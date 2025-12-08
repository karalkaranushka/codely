import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { AUTH_COLORS, AUTH_RADIUS, AUTH_TYPOGRAPHY } from "../theme";

interface Props {
  label: string;
  iconText: string;
  onPress: () => void;
}

const SocialButton: React.FC<Props> = ({ label, iconText, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.85} onPress={onPress}>
      <View style={styles.iconWrapper}>
        <Text style={styles.iconText}>{iconText}</Text>
      </View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.iconWrapper} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    borderRadius: AUTH_RADIUS.button,
    backgroundColor: AUTH_COLORS.socialButtonBg,
    borderWidth: 1,
    borderColor: AUTH_COLORS.socialButtonBorder,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  iconWrapper: {
    width: 24,
    alignItems: "center",
  },
  iconText: {
    fontSize: 18,
    color: AUTH_COLORS.primaryText,
  },
  label: {
    fontSize: AUTH_TYPOGRAPHY.button,
    fontWeight: "500",
    color: AUTH_COLORS.primaryText,
  },
});

export default SocialButton;