import { useState, useMemo } from "react";
import { useAppNavigation } from "../../../navigation/useAppNavigation";

export type FrameworkId =
  | "react"
  | "react-native"
  | "node"
  | "next"
  | "graphql"
  | "ts";

export type NotificationLevel = "low" | "medium" | "high";

const FRAMEWORKS = [
  { id: "react" as FrameworkId, title: "React", subtitle: "Library" },
  { id: "react-native" as FrameworkId, title: "React Native", subtitle: "Framework" },
  { id: "node" as FrameworkId, title: "Node.js", subtitle: "Runtime" },
  { id: "next" as FrameworkId, title: "Next.js", subtitle: "Framework" },
  { id: "graphql" as FrameworkId, title: "GraphQL", subtitle: "API" },
  { id: "ts" as FrameworkId, title: "TypeScript", subtitle: "Language" },
];

const NOTIFICATION_LEVELS = [
  {
    id: "low" as NotificationLevel,
    label: "LOW",
    title: "Only critical",
    subtitle: "Major releases and breaking changes",
  },
  {
    id: "medium" as NotificationLevel,
    label: "MEDIUM",
    title: "Balanced",
    subtitle: "Important updates and releases",
    recommended: true,
  },
  {
    id: "high" as NotificationLevel,
    label: "HIGH",
    title: "Everything",
    subtitle: "All updates including minor patches",
  },
];

export const usePreferencesSetup = () => {
  const [stepIndex, setStepIndex] = useState(0); // 0 = step1, 1 = step2
  const [selectedFrameworks, setSelectedFrameworks] = useState<FrameworkId[]>([
    "react",
    "react-native",
    "node",
  ]);
  const [notificationLevel, setNotificationLevel] =
    useState<NotificationLevel>("medium");

    const {goToMain} = useAppNavigation();

  const totalSteps = 2;
  const minFrameworks = 3;

  const toggleFramework = (id: FrameworkId) => {
    setSelectedFrameworks((prev) => {
      if (prev.includes(id)) {
        return prev.filter((f) => f !== id);
      }
      return [...prev, id];
    });
  };

  const canContinueStep1 = selectedFrameworks.length >= minFrameworks;
  const isLastStep = stepIndex === totalSteps - 1;

  const handlePrimaryAction = () => {
    if (stepIndex === 0) {
      if (!canContinueStep1) return;
      setStepIndex(1);
      return;
    }

    // Finish onboarding
    console.log("Selected frameworks:", selectedFrameworks);
    console.log("Notification level:", notificationLevel);
    // TODO: save preferences + navigate to main app
  };

  const handleSkip = () => {
    console.log("Onboarding skipped");
    goToMain("FeedScreen")
    // TODO: navigate to main app
  };

  const progress = useMemo(
    () => (stepIndex + 1) / totalSteps,
    [stepIndex, totalSteps]
  );

  return {
    // state
    stepIndex,
    totalSteps,
    progress,
    selectedFrameworks,
    notificationLevel,

    // data
    frameworks: FRAMEWORKS,
    notificationLevels: NOTIFICATION_LEVELS,
    minFrameworks,

    // handlers
    toggleFramework,
    setNotificationLevel,
    handlePrimaryAction,
    handleSkip,

    // UI helpers
    canContinueStep1,
    isLastStep,
  };
};