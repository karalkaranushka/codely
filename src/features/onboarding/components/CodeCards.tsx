import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, Easing, Platform } from "react-native";
import { ONBOARDING_COLORS, ONBOARDING_RADIUS } from "../theme";
import { ONBOARDING_STRINGS } from "../constant";

const DURATION = 2600;
const EASING = Easing.inOut(Easing.ease);

const createLoop = (val: Animated.Value) =>
  Animated.loop(
    Animated.sequence([
      Animated.timing(val, {
        toValue: 1,
        duration: DURATION,
        easing: EASING,
        useNativeDriver: true,
      }),
      Animated.timing(val, {
        toValue: 0,
        duration: DURATION,
        easing: EASING,
        useNativeDriver: true,
      }),
    ])
  );

interface FloatingCardProps {
  val: Animated.Value;
  style?: any;
  children: React.ReactNode;
}

const FloatingCard: React.FC<FloatingCardProps> = ({ val, style, children }) => {
  const press = useRef(new Animated.Value(1)).current;

  const scaleAnim = Animated.multiply(
    press,
    val.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 1.03, 1],
    })
  );

  return (
    <Animated.View
      style={[
        style,
        {
          opacity: val.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0.9, 1, 0.95],
          }),
          transform: [
            {
              translateY: val.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0, -10, 0],
              }),
            },
            {
              translateX: val.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0, 6, 0],
              }),
            },
            {
              rotate: val.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: ["-6deg", "0deg", "6deg"],
              }),
            },
            { scale: scaleAnim },
          ],
        },
      ]}
      onStartShouldSetResponder={() => true}
      onResponderGrant={() =>
        Animated.spring(press, {
          toValue: 0.96,
          useNativeDriver: true,
        }).start()
      }
      onResponderRelease={() =>
        Animated.spring(press, {
          toValue: 1,
          useNativeDriver: true,
        }).start()
      }
    >
      {children}
    </Animated.View>
  );
};

const CodeCards = () => {
  const left = useRef(new Animated.Value(0)).current;
  const right = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const a = createLoop(left);
    const b = createLoop(right);

    const t1 = setTimeout(() => a.start(), 0);
    const t2 = setTimeout(() => b.start(), 180);

    return () => {
      a.stop();
      b.stop();
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [left, right]);

  return (
    <View style={styles.container}>
      {/* top left */}
      <FloatingCard val={left} style={[styles.card, styles.topLeft]}>
        <Text style={styles.title}>{ONBOARDING_STRINGS.reactNativeTitle}</Text>
        <Text style={styles.sub}>{ONBOARDING_STRINGS.reactNativeSubtitle}</Text>
      </FloatingCard>

      {/* top right */}
      <FloatingCard val={right} style={[styles.card, styles.topRight]}>
        <Text style={styles.title}>{ONBOARDING_STRINGS.lightningSetupTitle}</Text>
        <Text style={styles.sub}>{ONBOARDING_STRINGS.lightningSetupSubtitle}</Text>
      </FloatingCard>

      {/* bottom / center */}
      <FloatingCard val={left} style={[styles.card, styles.bottomCenter]}>
        <Text style={styles.title}>{ONBOARDING_STRINGS.nodeJsTitle}</Text>
        <Text style={styles.sub}>{ONBOARDING_STRINGS.nodeJsSubtitle}</Text>
      </FloatingCard>

      {/* bottom right */}
      {/* <FloatingCard val={right} style={[styles.card, styles.bottomRight]}>
        <Text style={styles.title}>{ONBOARDING_STRINGS.versionControlTitle}</Text>
        <Text style={styles.sub}>{ONBOARDING_STRINGS.versionControlSubtitle}</Text>
      </FloatingCard> */}
    </View>
  );
};

const CARD_WIDTH = 160;

const CODE_FONT = Platform.select({
  ios: "Menlo",
  android: "monospace",
  default: "System",
});

const styles = StyleSheet.create({
  container: {
    height: 340,
    justifyContent: "center",
  },
  card: {
    position: "absolute",
    width: CARD_WIDTH,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: ONBOARDING_RADIUS.card ?? 22, // more pill-y like screenshot
    backgroundColor: "#334a82ff", // deep navy
    borderWidth: 1,
    borderColor: "rgba(134,184,255,0.90)", // soft blue border
    shadowColor: "#202953ff", // strong bottom glow
    shadowOpacity: 0.9,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 20 },
    elevation: 18,
  },
  topLeft: { left: 30, top: 28 },
  topRight: { right: 28, top: 135 },
  bottomCenter: { left: 40, top: 245 },
  bottomRight: { right: 24, top: 290 },
  title: {
    fontSize: 13,
    fontWeight: "400",
    color: "#F7FAFF",
    letterSpacing: 0.3,
    fontFamily: CODE_FONT, // code look
  },
  sub: {
    marginTop: 4,
    fontSize: 13,
    color: "#F7FAFF",
    opacity: 0.8,
    letterSpacing: 0.3,
    fontFamily: CODE_FONT,
  },
});

export default CodeCards;