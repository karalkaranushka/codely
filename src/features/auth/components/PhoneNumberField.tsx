import React from "react";
import { View, Text, TextInput, StyleSheet, TextInputProps } from "react-native";
import { AUTH_STRINGS } from "../constants";
import { AUTH_COLORS, AUTH_RADIUS, AUTH_TYPOGRAPHY } from "../theme";

interface Props extends TextInputProps {}

const PhoneNumberField: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.code}>{AUTH_STRINGS.countryCode}</Text>
      <View style={styles.divider} />
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        placeholder={AUTH_STRINGS.phonePlaceholder}
        placeholderTextColor={AUTH_COLORS.mutedText}
        maxLength={10}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 64,
    borderRadius: AUTH_RADIUS.input,
    backgroundColor: AUTH_COLORS.inputBg,
    borderWidth: 1,
    borderColor: AUTH_COLORS.inputBorder,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
  },
  code: {
    fontSize: AUTH_TYPOGRAPHY.input,
    color: AUTH_COLORS.primaryText,
  },
  divider: {
    width: 1,
    height: 28,
    backgroundColor: AUTH_COLORS.inputBorder,
    marginHorizontal: 12,
  },
  input: {
    flex: 1,
    fontSize: AUTH_TYPOGRAPHY.input,
    color: AUTH_COLORS.primaryText,
  },
});

export default PhoneNumberField;