import React from "react";
import { View, StyleSheet } from "react-native";
import { ONBOARDING_COLORS } from "../theme";

interface Props {
  count: number;
  activeIndex: number;
}

const PaginationDots: React.FC<Props> = ({ count, activeIndex }) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: count }).map((_, i) => {
        const active = i === activeIndex;
        return (
          <View
            key={i}
            style={[
              styles.dot,
              active && { backgroundColor: ONBOARDING_COLORS.activeDot, width: 22 },
            ]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 24,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 999,
    backgroundColor: ONBOARDING_COLORS.mutedDot,
  },
});

export default PaginationDots;