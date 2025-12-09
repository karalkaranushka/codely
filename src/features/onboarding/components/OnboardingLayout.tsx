import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Animated,
  Easing,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ONBOARDING_COLORS,
  ONBOARDING_SPACING,
} from "../theme";

interface Props {
  children: React.ReactNode;
}

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const PARTICLE_COUNT = 24;

type ParticleConfig = {
  progress: Animated.Value;
  x: number;
  size: number;
  delay: number;
  duration: number;
};

const ParticleBackground: React.FC = () => {
  const particles = useRef<ParticleConfig[]>(
    Array.from({ length: PARTICLE_COUNT }).map((_, index) => ({
      progress: new Animated.Value(0),
      x: Math.random(), // 0–1 across width
      size: 2 + Math.random() * 3,
      delay: index * 200,
      duration: 4000 + Math.random() * 2000, // different speed
    }))
  ).current;

  useEffect(() => {
    const animations = particles.map((p) =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(p.progress, {
            toValue: 1,
            duration: p.duration,
            easing: Easing.linear, // smooth constant travel
            useNativeDriver: true,
            delay: p.delay,
          }),
          // reset back to 0 instantly for next loop
          Animated.timing(p.progress, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }),
        ])
      )
    );

    animations.forEach((a) => a.start());
    return () => animations.forEach((a) => a.stop());
  }, [particles]);

  return (
    <View pointerEvents="none" style={particleStyles.container}>
      {particles.map((p, index) => {
        const translateY = p.progress.interpolate({
          inputRange: [0, 1],
          // from slightly above screen to below bottom
          outputRange: [-40, SCREEN_HEIGHT + 40],
        });

        const opacity = p.progress.interpolate({
          inputRange: [0, 0.1, 0.8, 1],
          outputRange: [0, 0.4, 0.9, 0],
        });

        const scale = p.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0.7, 1.2],
        });

        return (
          <Animated.View
            key={index}
            style={[
              particleStyles.particle,
              {
                width: p.size,
                height: p.size,
                borderRadius: p.size / 2,
                // fixed x, y handled by translateY
                top: -40,
                left:
                  ONBOARDING_SPACING.screenPadding +
                  p.x * (SCREEN_WIDTH - ONBOARDING_SPACING.screenPadding * 2),
                opacity,
                transform: [{ translateY }, { scale }],
              },
            ]}
          />
        );
      })}
    </View>
  );
};

const OnboardingLayout: React.FC<Props> = ({ children }) => {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" />
      <View style={styles.deviceCard}>
        <ParticleBackground />
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: ONBOARDING_COLORS.screenBg,
    paddingHorizontal: ONBOARDING_SPACING.screenPadding,
  },
  deviceCard: {
    flex: 1,
  },
});

const particleStyles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  particle: {
    position: "absolute",
    backgroundColor: "rgba(255,255,255,0.65)",
    shadowColor: "#7FB5FF",
    shadowOpacity: 0.5,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 0 },
  },
});

export default OnboardingLayout;