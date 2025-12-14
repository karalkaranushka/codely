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
  | "donut"
  | "apple"
  | "triangle";

const NUM_PARTICLES = 390;
const DONUT_RADIUS_MAJOR = 130;
const DONUT_RADIUS_MINOR = 55;
const PERSPECTIVE = 900;

type ParticleData = {
  theta: number;
  phi: number;
  speed: number;
  phase: number;
};

const generateParticles = (
  count: number,
  shape: ShapeType
): ParticleData[] => {
  const arr: ParticleData[] = [];
  for (let i = 0; i < count; i++) {
    arr.push({
      theta: (i / count) * Math.PI * 2,
      phi:
        shape === "triangle"
          ? Math.random()
          : Math.random() * Math.PI * 2,
      speed: 0.5 + Math.random() * 0.5,
      phase: Math.random() * Math.PI * 2,
    });
  }
  return arr;
};

function getShapePoint(
  shape: ShapeType,
  theta: number,
  phi: number,
  R: number,
  r: number,
  t: number
) {
  "worklet";

  switch (shape) {
    case "sphere":
      return {
        x: R * Math.sin(phi) * Math.cos(theta),
        y: R * Math.sin(phi) * Math.sin(theta),
        z: R * Math.cos(phi),
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

    case "triangle": {
      const height = R;
      const base = R;

      const y = (phi - 0.5) * height;

      const halfWidth = ((0.5 - phi) * base);
      const x =
        ((theta % (Math.PI * 2 / 3)) / (Math.PI * 2 / 3) - 0.5) *
        halfWidth *
        2;

      return {
        x,
        y,
        z: Math.sin(theta + t) * 15,
      };
    }

    default:
      return { x: 0, y: 0, z: 0 };
  }
}

const Dot = ({
  data,
  rotationX,
  rotationY,
  time,
  pressFactor,
  shape,
}: {
  data: ParticleData;
  rotationX: SharedValue<number>;
  rotationY: SharedValue<number>;
  time: SharedValue<number>;
  pressFactor: SharedValue<number>;
  shape: ShapeType;
}) => {
  const animStyle = useAnimatedStyle(() => {
    const rotX = rotationX.value;
    const rotY = rotationY.value;
    const t = time.value;
    const press = pressFactor.value;

    const radiusBoost = interpolate(press, [0, 1], [1, 1.3]);
    const R = DONUT_RADIUS_MAJOR * radiusBoost;
    const r = DONUT_RADIUS_MINOR;

    const theta = data.theta + rotY;
    const phi = data.phi;

    const wave =
      shape === "donut" || shape === "sphere"
        ? Math.sin(data.theta * 2 + t) * 10
        : Math.sin(t + data.phase) * 4;

    const { x, y, z } = getShapePoint(
      shape,
      theta,
      phi,
      R + wave,
      r,
      t
    );

    const TILT = 0.45 + rotX * 0.25;
    const cosRx = Math.cos(TILT);
    const sinRx = Math.sin(TILT);

    const y1 = y * cosRx - z * sinRx;
    const z1 = y * sinRx + z * cosRx;

    const scale3d = PERSPECTIVE / Math.max(0.1, z1 + PERSPECTIVE);

    return {
      transform: [
        { translateX: x * scale3d },
        { translateY: y1 * scale3d },
        { scale: scale3d },
      ],
      opacity: interpolate(z1, [-80, 80], [0.4, 1]),
      zIndex: Math.round(z1),
    };
  });

  return <Animated.View style={[styles.dot, animStyle]} />;
};

const Donut = ({ shape }: { shape: ShapeType }) => {
  const centerX = useSharedValue(0);
  const centerY = useSharedValue(0);
  const startX = useSharedValue(0);
  const startY = useSharedValue(0);
  const autoRotateY = useSharedValue(0);
  const autoRotateX = useSharedValue(0);
  const time = useSharedValue(0);
  const pressFactor = useSharedValue(0);

  const particles = useMemo(
    () => generateParticles(NUM_PARTICLES, shape),
    [shape]
  );

  useEffect(() => {
    autoRotateY.value = withRepeat(
      withTiming(Math.PI * 2, { duration: 24000, easing: Easing.linear }),
      -1
    );
    autoRotateX.value = withRepeat(
      withTiming(0.2, { duration: 8000, easing: Easing.inOut(Easing.sin) }),
      -1,
      true
    );
    time.value = withRepeat(
      withTiming(Math.PI * 6, { duration: 28000, easing: Easing.linear }),
      -1
    );
  }, []);

  const pan = Gesture.Pan()
    .onBegin(() => {
      startX.value = centerX.value;
      startY.value = centerY.value;
      pressFactor.value = withSpring(1);
    })
    .onUpdate((e) => {
      centerX.value = startX.value + e.translationX;
      centerY.value = startY.value + e.translationY;
    })
    .onEnd(() => {
      pressFactor.value = withTiming(0);
    });

  const containerStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: centerX.value },
      { translateY: centerY.value },
    ],
  }));

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={[styles.donutContainer, containerStyle]}>
        {particles.map((p, i) => (
          <Dot
            key={i}
            data={p}
            rotationX={autoRotateX}
            rotationY={autoRotateY}
            time={time}
            pressFactor={pressFactor}
            shape={shape}
          />
        ))}
      </Animated.View>
    </GestureDetector>
  );
};

export default function ParticleDonut({
  shape = 'apple',
}: {
  shape?: ShapeType;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.centerer}>
        <Donut shape={shape} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  centerer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 80,
  },
  donutContainer: {
    width: 320,
    height: 320,
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    position: "absolute",
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#6d93e8",
    shadowColor: "#86b8ff",
    shadowOpacity: 0.8,
    shadowRadius: 6,
  },
});