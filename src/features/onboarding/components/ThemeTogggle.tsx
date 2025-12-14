import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

type Theme = "light" | "dark";

type Props = {
  theme: Theme;
  onToggle: () => void;
};

const TOGGLE_WIDTH = 64;
const TOGGLE_HEIGHT = 34;
const KNOB_SIZE = 26;
const KNOB_OFFSET = TOGGLE_WIDTH - KNOB_SIZE - 8;

const ThemeToggle: React.FC<Props> = ({ theme, onToggle }) => {
  const knobAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withSpring(
          theme === "dark" ? KNOB_OFFSET : 0,
          { damping: 18, stiffness: 120 }
        ),
      },
    ],
  }));

  const isDark = theme === "dark";

  return (
    <Pressable onPress={onToggle} style={styles.container}>
      <View
        style={[
          styles.track,
          { backgroundColor: isDark ? "#1f2933" : "#e5e7eb" },
        ]}
      >
        <Text style={[styles.icon, { opacity: isDark ? 0.4 : 1 }]}>
          ☀️
        </Text>
        <Text style={[styles.icon, { opacity: isDark ? 1 : 0.4 }]}>
          🌙
        </Text>

        <Animated.View
          style={[
            styles.knob,
            { backgroundColor: isDark ? "#111827" : "#ffffff" },
            knobAnimatedStyle,
          ]}
        />
      </View>
    </Pressable>
  );
};

export default ThemeToggle;

const styles = StyleSheet.create({
  container: {
    padding: 6,
    alignSelf: "flex-end",
  },
  track: {
    width: TOGGLE_WIDTH,
    height: TOGGLE_HEIGHT,
    borderRadius: TOGGLE_HEIGHT / 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: "#cbd5e1",
  },
  knob: {
    position: "absolute",
    left: 4,
    width: KNOB_SIZE,
    height: KNOB_SIZE,
    borderRadius: KNOB_SIZE / 2,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  icon: {
    fontSize: 14,
  },
});