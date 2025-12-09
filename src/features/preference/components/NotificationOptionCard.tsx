import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import {
  ONBOARDING_COLORS,
  ONBOARDING_RADIUS,
  ONBOARDING_TYPO,
  ONBOARDING_SPACING,
} from "../../onboarding/theme";

interface Props {
  label: string;
  title: string;
  subtitle: string;
  selected: boolean;
  recommended?: boolean;
  onPress: () => void;
}

const NotificationOptionCard: React.FC<Props> = ({
  label,
  title,
  subtitle,
  selected,
  recommended,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.card, selected && styles.cardSelected]}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <View style={styles.row}>
        <Text style={styles.label}>{label}</Text>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          {recommended && (
            <View style={styles.tag}>
              <Text style={styles.tagText}>Recommended</Text>
            </View>
          )}
          {selected && <Text style={styles.check}>✓</Text>}
        </View>
      </View>

      <View style={{ height: 8 }} />

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    paddingVertical: ONBOARDING_SPACING.md,
    paddingHorizontal: ONBOARDING_SPACING.md,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#2a3544ff',
    backgroundColor: '#161B22',
    marginBottom: ONBOARDING_SPACING.md,
  },
  cardSelected: {
    borderColor: '#E5E7EB',
    backgroundColor: '#2c3746ff',
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    flex: 1,
    fontSize: ONBOARDING_TYPO.subtitle,
    color: ONBOARDING_COLORS.secondaryText,
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    backgroundColor: ONBOARDING_COLORS.activeDot,
  },
  tagText: {
    fontSize: ONBOARDING_TYPO.subtitle,
    color: ONBOARDING_COLORS.cardBgChip,
  },
  check: {
    fontSize: 16,
    color: ONBOARDING_COLORS.activeDot,
    marginLeft: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: ONBOARDING_COLORS.primaryText,
    marginTop: 4,
  },
  subtitle: {
    fontSize: ONBOARDING_TYPO.subtitle,
    color: ONBOARDING_COLORS.secondaryText,
    marginTop: 2,
  },
});

export default NotificationOptionCard;