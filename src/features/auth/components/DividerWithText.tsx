import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AUTH_STRINGS } from "../constants";
import { AUTH_COLORS } from "../theme";

const DividerWithText: React.FC = () => {
  return (
    <View style={styles.row}>
      <View style={styles.line} />
      <Text style={styles.text}>{AUTH_STRINGS.dividerText}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: AUTH_COLORS.divider,
  },
  text: {
    marginHorizontal: 12,
    fontSize: 13,
    color: AUTH_COLORS.mutedText,
  },
});

export default DividerWithText;