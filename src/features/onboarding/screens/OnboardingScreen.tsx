import React from "react";
import OnboardingLayout from "../components/OnboardingLayout";
import SkipButton from "../components/SkipButton";
import CodeCards from "../components/CodeCards";
import TextSection from "../components/TextSection";
import PaginationDots from "../components/PaginationDots";
import PrimaryButton from "../components/PrimaryButton";
import { useOnboarding } from "../hooks/useOnboarding";
import { ONBOARDING_STRINGS } from "../constant";
import { View } from "react-native";

const OnboardingScreen: React.FC = () => {
  const { pages, current, index, handleNext, handleSkip } = useOnboarding();

  return (
    <OnboardingLayout>
      <SkipButton onPress={handleSkip} />
      <View style={{ flex: 0.2 }} />
      <CodeCards />

      <View style={{ flex: 0.4 }} />

      <TextSection title={current.title} subtitle={current.subtitle} />

      <PaginationDots count={pages.length} activeIndex={index} />

      <PrimaryButton title={ONBOARDING_STRINGS.next} onPress={handleNext} />
    </OnboardingLayout>
  );
};

export default OnboardingScreen;