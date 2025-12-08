import React from "react";
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, ViewStyle, TextStyle } from "react-native";
import { AUTH_COLORS, AUTH_RADIUS, AUTH_TYPOGRAPHY } from "../theme";

interface Props {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const PrimaryButton: React.FC<Props> = ({ title, onPress, disabled, loading, style, textStyle }) => {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={isDisabled}
      style={[styles.button, isDisabled && styles.disabled, style]}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={[styles.title, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 56,
    borderRadius: AUTH_RADIUS.button,
    backgroundColor: AUTH_COLORS.primaryButtonBg,
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
  },
  disabled: {
    opacity: 0.6,
  },
  title: {
    fontSize: AUTH_TYPOGRAPHY.button,
    fontWeight: "600",
    color: AUTH_COLORS.primaryButtonText,
  },
});

export default PrimaryButton;