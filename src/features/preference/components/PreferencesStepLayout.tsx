import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ONBOARDING_COLORS,
  ONBOARDING_SPACING,
  ONBOARDING_RADIUS,
  ONBOARDING_TYPO,
} from "../../onboarding/theme";

interface Props {
  stepIndex: number;
  totalSteps: number;
  progress: number; // 0–1
  onSkip: () => void;
  primaryLabel: string;
  onPrimaryPress: () => void;
  primaryDisabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  contentStyle?: ViewStyle;
}

const PreferencesStepLayout: React.FC<Props> = ({
  stepIndex,
  totalSteps,
  progress,
  onSkip,
  primaryLabel,
  onPrimaryPress,
  primaryDisabled,
  loading,
  children,
  contentStyle,
}) => {
  const stepText = `Step ${stepIndex + 1} of ${totalSteps}`;

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.card}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.progressRow}>
            <View style={styles.progressBarTrack}>
              <View
                style={[
                  styles.progressBarFill,
                  { width: `${progress * 100}%` },
                ]}
              />
            </View>
            <TouchableOpacity onPress={onSkip} hitSlop={8}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.headerRow}>
            <Text style={styles.stepText}>{stepText}</Text>
          </View>
          <View style={styles.divider} />
        </View>

        {/* Content */}
        <View style={[styles.content, contentStyle]}>{children}</View>

        {/* Footer button */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={[
              styles.primaryButton,
              (primaryDisabled || loading) && styles.primaryButtonDisabled,
            ]}
            onPress={onPrimaryPress}
            disabled={primaryDisabled || loading}
          >
            {loading ? (
              <ActivityIndicator />
            ) : (
              <Text
                style={[
                  styles.primaryButtonText,
                  (primaryDisabled || loading) && styles.primaryButtonTextDisabled,
                ]}
              >
                {primaryLabel}
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: ONBOARDING_COLORS.screenBg,
  },
  card: {
    flex: 1,
    borderWidth: 1
  },
  header: {
    paddingHorizontal: 12,
  },
  progressBarTrack: {
    flex: 1,
    height: 4,
    borderRadius: 9,
    marginRight: 12,
    backgroundColor: ONBOARDING_COLORS.cardBorder,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 9,
    backgroundColor: '#7a8594ff',
  },
  headerRow: {
    flexDirection: "row",
    alignItems: 'flex-end',
    marginTop: 10,
  },
  stepText: {
    flex: 1,
    fontSize: ONBOARDING_TYPO.subtitle,
    color: ONBOARDING_COLORS.mutedDot,
  },
  skipText: {
    fontWeight: "600",
    fontSize: ONBOARDING_TYPO.subtitle,
    color: ONBOARDING_COLORS.secondaryText,
  },
  divider: {
    height: 1,
    backgroundColor: ONBOARDING_COLORS.cardBorder,
    marginTop: 16,
    marginHorizontal: -12,
  },
  content: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: ONBOARDING_SPACING.lg,
  },
  footer: {
    paddingHorizontal: ONBOARDING_SPACING.lg,
    paddingVertical: ONBOARDING_SPACING.lg,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: ONBOARDING_COLORS.cardBorder,
  },
  primaryButton: {
    height: 52,
    borderRadius: ONBOARDING_RADIUS.card,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: ONBOARDING_COLORS.buttonText,
  },
  primaryButtonDisabled: {
    backgroundColor: ONBOARDING_COLORS.mutedDot,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: '#333333',
  },
  primaryButtonTextDisabled: {
    color: '#ffffff',
  },
});

export default PreferencesStepLayout;