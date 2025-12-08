import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { ONBOARDING_STRINGS } from "../constant";
import { ONBOARDING_COLORS } from "../theme";

interface Props {
  onPress: () => void;
}

const SkipButton: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} hitSlop={8}>
      <Text style={styles.text}>{ONBOARDING_STRINGS.skip}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-end",
    
  },
  text: {
    color: ONBOARDING_COLORS.skipText,
    fontSize: 15,
  },
});

export default SkipButton;