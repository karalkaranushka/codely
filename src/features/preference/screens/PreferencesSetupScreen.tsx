import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FrameworkOptionCard from "../../../components/cards/FrameworkOptionCard";
import NotificationOptionCard from "../components/NotificationOptionCard";
import { ONBOARDING_COLORS, ONBOARDING_TYPO } from "../../onboarding/theme";
import { usePreferencesSetup } from "../hooks/usePreferencesSetup";
import PreferencesStepLayout from "../components/PreferencesStepLayout";

interface Props {
  navigation: any;
}

const PreferencesSetupScreen: React.FC<Props> = ({ navigation }) => {
  const {
    stepIndex,
    totalSteps,
    progress,
    frameworks,
    notificationLevels,
    selectedFrameworks,
    notificationLevel,
    toggleFramework,
    setNotificationLevel,
    handlePrimaryAction,
    handleSkip,
    canContinueStep1,
    isLastStep,
    minFrameworks,
  } = usePreferencesSetup();

  const primaryLabel = stepIndex === 0 ? "Continue" : "Get Started";

  return (
    <PreferencesStepLayout
      stepIndex={stepIndex}
      totalSteps={totalSteps}
      progress={progress}
      onSkip={handleSkip}
      primaryLabel={primaryLabel}
      onPrimaryPress={handlePrimaryAction}
      primaryDisabled={stepIndex === 0 && !canContinueStep1}
    >
      {stepIndex === 0 ? (
        <View style={{ flex: 1, paddingHorizontal: 0}}>
          <Text style={styles.title}>Select frameworks to follow</Text>
          <Text style={styles.subtitle}>Choose at least 3</Text>

          <View style={{ height: 16 }} />

          <View style={styles.frameworkGrid}>
            {frameworks.map((fw) => (
              <FrameworkOptionCard
                key={fw.id}
                item={fw}
                selected={selectedFrameworks.includes(fw.id)}
                onPress={toggleFramework}
              />
            ))}
          </View>

          {/* <View style={{ flex: 1 }} /> */}

          <Text style={styles.helperText}>
            {selectedFrameworks.length} of {frameworks.length} selected
          </Text>
        </View>
      ) : (
        <>
          <Text style={styles.title}>Notification frequency</Text>
          <View style={{ height: 4 }} />
          <Text style={styles.subtitle}>
            How often should we notify you?
          </Text>

          <View style={{ height: 24 }} />

          {notificationLevels.map((opt) => (
            <NotificationOptionCard
              key={opt.id}
              label={opt.label}
              title={opt.title}
              subtitle={opt.subtitle}
              selected={notificationLevel === opt.id}
              recommended={opt.recommended}
              onPress={() => setNotificationLevel(opt.id)}
            />
          ))}
        </>
      )}
    </PreferencesStepLayout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: ONBOARDING_COLORS.primaryText,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: ONBOARDING_TYPO.subtitle,
    color: ONBOARDING_COLORS.secondaryText,
  },
  frameworkGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  helperText: {
    textAlign: "center",
    fontSize: ONBOARDING_TYPO.subtitle,
    color: ONBOARDING_COLORS.secondaryText,
    marginBottom: 16,
  },
});

export default PreferencesSetupScreen;