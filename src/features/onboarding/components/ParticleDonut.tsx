import React, { useEffect, useMemo } from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withSpring,
  Easing,
  interpolate,
  type SharedValue,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

type ShapeType =
  | "sphere"
  | "helix"
  | "donut"
  | "apple"
  | "banana"
  | "carrot"
  | "basket";

const NUM_PARTICLES = 420;
const DONUT_RADIUS_MAJOR = 180;
const DONUT_RADIUS_MINOR = 80;
const PERSPECTIVE = 900;

const DARK_DOT_COLORS = [
  "#1B2A5E",
  "#2E4FFF",
  "#3DDCFF",
  "#6BE7FF",
  "#7C8CFF",
];

const LIGHT_DOT_COLORS = [
  "#e0e7ff",
  "#a5b4fc",
  "#818cf8",
  "#6366f1",
  "#312e81",
];

type ParticleData = {
  theta: number;
  phi: number;
  speed: number;
  phase: number;
  color: string;
};

const generateParticles = (
  count: number,
  shape: ShapeType,
  colors: string[]
): ParticleData[] =>
  Array.from({ length: count }).map((_, i) => ({
    theta: (i / count) * Math.PI * 2,
    phi:
      shape === "banana" || shape === "carrot" || shape === "basket"
        ? Math.random() * Math.PI
        : Math.random() * Math.PI * 2,
    speed: 0.5 + Math.random() * 0.5,
    phase: Math.random() * Math.PI * 2,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));

const getShapePoint = (
  shape: ShapeType,
  theta: number,
  phi: number,
  R: number,
  r: number,
  t: number
) => {
  "worklet";
  switch (shape) {
    case "sphere":
      return {
        x: R * Math.sin(phi) * Math.cos(theta),
        y: R * Math.sin(phi) * Math.sin(theta),
        z: R * Math.cos(phi),
      };
    case "helix":
      return {
        x: Math.cos(theta) * R,
        y: Math.sin(theta) * R,
        z: Math.sin(phi + t) * 120,
      };
    case "donut":
      return {
        x: (R + r * Math.cos(phi)) * Math.cos(theta),
        y: (R + r * Math.cos(phi)) * Math.sin(theta),
        z: r * Math.sin(phi),
      };
    case "apple": {
      const squash = 0.85;
      const dimple = Math.sin(theta * 2) * 8;
      return {
        x: R * Math.sin(phi) * Math.cos(theta),
        y: R * Math.sin(phi) * Math.sin(theta),
        z: (R * Math.cos(phi) + dimple) * squash,
      };
    }
    case "basket": {
      const bowl = Math.sin(phi);
      return {
        x: Math.cos(theta) * R * bowl,
        y: Math.sin(theta) * R * bowl,
        z: -Math.cos(phi) * R * 0.8,
      };
    }
    default:
      return { x: 0, y: 0, z: 0 };
  }
};

const Dot = ({
  data,
  rotationX,
  rotationY,
  time,
  press,
  shape,
}: {
  data: ParticleData;
  rotationX: SharedValue<number>;
  rotationY: SharedValue<number>;
  time: SharedValue<number>;
  press: SharedValue<number>;
  shape: ShapeType;
}) => {
  const style = useAnimatedStyle(() => {
    const R =
      DONUT_RADIUS_MAJOR *
      interpolate(press.value, [0, 1], [1, 1.35]);
    const r =
      DONUT_RADIUS_MINOR *
      interpolate(press.value, [0, 1], [1, 1.15]);

    const theta = data.theta + rotationY.value;
    const phi = data.phi + time.value * 0.25;

    const wave =
      shape === "donut" || shape === "sphere"
        ? Math.sin(data.theta * 2.3 - time.value * 2.2) * 12
        : 0;

    const { x, y, z } = getShapePoint(
      shape,
      theta,
      phi,
      R + wave,
      r,
      time.value
    );

    const tilt = 0.6 + rotationX.value * 0.35;
    const y1 = y * Math.cos(tilt) - z * Math.sin(tilt);
    const z1 = y * Math.sin(tilt) + z * Math.cos(tilt);

    const scale3d = PERSPECTIVE / Math.max(0.1, PERSPECTIVE + z1);
    const wobble =
      0.95 + 0.08 * Math.sin(data.phase + time.value * data.speed);

    return {
      transform: [
        { translateX: x * scale3d },
        { translateY: y1 * scale3d },
        { scale: scale3d * wobble },
      ],
      opacity: interpolate(z1, [-r, 0, r], [0.12, 0.6, 1]),
      zIndex: Math.round(z1),
    };
  });

  return (
    <Animated.View
      style={[
        styles.dot,
        { backgroundColor: data.color, shadowColor: data.color },
        style,
      ]}
    />
  );
};

const ParticleShape = ({
  shape,
  colors,
}: {
  shape: ShapeType;
  colors: string[];
}) => {
  const centerX = useSharedValue(0);
  const centerY = useSharedValue(0);
  const startX = useSharedValue(0);
  const startY = useSharedValue(0);
  const rotY = useSharedValue(0);
  const rotX = useSharedValue(0);
  const time = useSharedValue(0);
  const press = useSharedValue(0);

  const particles = useMemo(
    () => generateParticles(NUM_PARTICLES, shape, colors),
    [shape, colors]
  );

  useEffect(() => {
    rotY.value = withRepeat(
      withTiming(Math.PI * 2, { duration: 26000, easing: Easing.linear }),
      -1
    );
    rotX.value = withRepeat(
      withTiming(0.22, { duration: 7000, easing: Easing.inOut(Easing.sin) }),
      -1,
      true
    );
    time.value = withRepeat(
      withTiming(Math.PI * 8, { duration: 30000, easing: Easing.linear }),
      -1
    );
  }, []);

  const pan = Gesture.Pan()
    .onBegin(() => {
      startX.value = centerX.value;
      startY.value = centerY.value;
      press.value = withSpring(1);
    })
    .onUpdate(e => {
      centerX.value = startX.value + e.translationX;
      centerY.value = startY.value + e.translationY;
    })
    .onEnd(() => {
      press.value = withTiming(0);
    });

  const containerStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: centerX.value },
      { translateY: centerY.value },
      { scale: interpolate(press.value, [0, 1], [1, 1.15]) },
    ],
  }));

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={[styles.shape, containerStyle]}>
        {particles.map((p, i) => (
          <Dot
            key={i}
            data={p}
            rotationX={rotX}
            rotationY={rotY}
            time={time}
            press={press}
            shape={shape}
          />
        ))}
      </Animated.View>
    </GestureDetector>
  );
};

export default function ParticleDonut({
  shape = "basket",
  theme = "light",
}: {
  shape?: ShapeType;
  theme?: "dark" | "light";
}) {
  const colors = theme === "dark" ? DARK_DOT_COLORS : LIGHT_DOT_COLORS;
  const bg = theme === "dark" ? "#181c23" : "#f7f8fa";

  return (
    <View style={[styles.container, { backgroundColor: bg }]}>
      <ParticleShape shape={shape} colors={colors} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  shape: {
    width: 400,
    height: 360,
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    position: "absolute",
    width: 6,
    height: 6,
    borderRadius: 3,
    shadowOpacity: 0.9,
    shadowRadius: 16,
  },
});