import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import {
  ONBOARDING_COLORS,
  ONBOARDING_RADIUS,
  ONBOARDING_TYPO,
  ONBOARDING_SPACING,
} from "../../features/onboarding/theme";

interface FrameworkItem {
  id: string;
  title: string;
  subtitle: string;
}

interface Props {
  item: FrameworkItem;
  selected: boolean;
  onPress: (id: string) => void;
}

const FrameworkOptionCard: React.FC<Props> = ({
  item,
  selected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.card, selected && styles.cardSelected]}
      onPress={() => onPress(item.id)}
      activeOpacity={0.9}
    >
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "48%",
    padding: ONBOARDING_SPACING.screenPadding,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2a3544ff",
    backgroundColor: "#161B22",
    marginBottom: ONBOARDING_SPACING.screenPadding,
  },
  cardSelected: {
    borderColor: "#E5E7EB",
    backgroundColor: "#2c3746ff",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: ONBOARDING_COLORS.primaryText,
  },
  subtitle: {
    marginTop: 4,
    fontSize: ONBOARDING_TYPO.subtitle,
    color: ONBOARDING_COLORS.secondaryText,
  },
});

export default FrameworkOptionCard;