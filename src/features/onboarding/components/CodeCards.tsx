import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
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
    val.interpolate({ inputRange: [0, 0.5, 1], outputRange: [1, 1.03, 1] })
  );

  return (
    <Animated.View
      style={[
        style,
        {
          opacity: val.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0.92, 1, 0.96],
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
                outputRange: [0, 3, 0],
              }),
            },
            {
              rotate: val.interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: ["-10deg", "0deg", "10deg"],
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
      <FloatingCard val={left} style={[styles.card, styles.react]}>
        <Text style={styles.title}>{ONBOARDING_STRINGS.reactNativeTitle}</Text>
        <Text style={styles.sub}>{ONBOARDING_STRINGS.reactNativeSubtitle}</Text>
      </FloatingCard>

      <FloatingCard val={right} style={[styles.card, styles.topRight]}>
        <Text style={styles.title}>{ONBOARDING_STRINGS.lightningSetupTitle}</Text>
        <Text style={styles.sub}>{ONBOARDING_STRINGS.lightningSetupSubtitle}</Text>
      </FloatingCard>

      <FloatingCard val={left} style={[styles.card, styles.center]}>
        <Text style={styles.title}>{ONBOARDING_STRINGS.nodeJsTitle}</Text>
        <Text style={styles.sub}>{ONBOARDING_STRINGS.nodeJsSubtitle}</Text>
      </FloatingCard>

      <FloatingCard val={right} style={[styles.card, styles.bottomRight]}>
        <Text style={styles.title}>{ONBOARDING_STRINGS.versionControlTitle}</Text>
        <Text style={styles.sub}>{ONBOARDING_STRINGS.versionControlSubtitle}</Text>
      </FloatingCard>
    </View>
  );
};

const CARD_WIDTH = 180;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  card: {
    position: "absolute",
    width: CARD_WIDTH,
    paddingVertical: 18,
    paddingHorizontal: 18,
    borderRadius: ONBOARDING_RADIUS.card,
    backgroundColor: ONBOARDING_COLORS.cardBgChip,
    borderWidth: 1,
    borderColor: ONBOARDING_COLORS.cardBorder,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
  react: { left: 24, top: 40 },
  topRight: { right: 24, top: 120 },
  center: { top: 225, left: "12%" },
  bottomRight: { right: 32, top: 320 },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFF",
    letterSpacing: 0.3,
  },
  sub: {
    marginTop: 4,
    fontSize: 11,
    opacity: 0.85,
    color: "#C8CEDA",
  },
});

export default CodeCards;