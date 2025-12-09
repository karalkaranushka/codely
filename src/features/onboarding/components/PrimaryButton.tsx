import React from "react";
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from "react-native";
import  LinearGradient  from "react-native-linear-gradient";
import { ONBOARDING_COLORS, ONBOARDING_RADIUS, ONBOARDING_TYPO } from "../theme";

interface Props {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}

const PrimaryButton: React.FC<Props> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={style}>
      <LinearGradient
        colors={[
          ONBOARDING_COLORS.primaryButtonGradientStart,
          ONBOARDING_COLORS.primaryButtonGradientEnd,
        ]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.gradient}
      >
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gradient: {
    height: 56,
    borderRadius: ONBOARDING_RADIUS.button,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#1D4ED8",
    shadowOpacity: 0.3,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 12 },
    elevation: 12,
  },
  text: {
    fontSize: ONBOARDING_TYPO.button,
    fontWeight: "600",
    color: ONBOARDING_COLORS.buttonText,
  },
});

export default PrimaryButton;