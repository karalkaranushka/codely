import React from "react";
import { Text, StyleSheet } from "react-native";
import { AUTH_STRINGS } from "../constants";
import { AUTH_COLORS, AUTH_TYPOGRAPHY } from "../theme";

const TermsAndPrivacyText: React.FC = () => {
  return (
    <Text style={styles.terms}>
      {AUTH_STRINGS.termsPrefix}
      <Text style={styles.highlight}>{AUTH_STRINGS.termsHighlight}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  terms: {
    marginTop: 26,
    fontSize: AUTH_TYPOGRAPHY.helper,
    color: AUTH_COLORS.mutedText,
    textAlign: "center",
    lineHeight: 18,
  },
  highlight: {
    color: AUTH_COLORS.secondaryText,
  },
});

export default TermsAndPrivacyText;