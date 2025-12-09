import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FEED_COLORS, FEED_RADIUS } from "../../features/feed/theme";

interface Props {
  value: string;
  onChangeText: (text: string) => void;
}

export const SearchFrameworksInput: React.FC<Props> = ({
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconCircle} />
      <TextInput
        placeholder="Search frameworks"
        placeholderTextColor={FEED_COLORS.textMuted}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 9,
    borderWidth: 1,
    borderColor: FEED_COLORS.searchBorder,
    backgroundColor: FEED_COLORS.searchBg,
    paddingHorizontal: 14,
    paddingVertical: 18,
  },
  iconCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: FEED_COLORS.textMuted,
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: FEED_COLORS.textPrimary,
    fontSize: 15,
  },
});