import React, { useState } from "react";
import OnboardingLayout from "../components/OnboardingLayout";
// import SkipButton from "../components/SkipButton";
import TextSection from "../components/TextSection";
import PaginationDots from "../components/PaginationDots";
import PrimaryButton from "../components/PrimaryButton";
import { useOnboarding } from "../hooks/useOnboarding";
import { ONBOARDING_STRINGS } from "../constant";
import { View } from "react-native";
// import ThemeToggle from "../components/ThemeTogggle";


const OnboardingScreen: React.FC = () => {
  const { pages, current, index, handleNext, handleSkip } = useOnboarding();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  return (
    <OnboardingLayout theme={theme}>
      {/* <SkipButton onPress={handleSkip} /> */}
      {/* <ThemeToggle
        theme={theme}
        onToggle={() =>
          setTheme(theme === "dark" ? "light" : "dark")
        }
      /> */}
      <View style={{ flex: 0.9 }} />
      <TextSection title={current.title} subtitle={current.subtitle} theme={theme} />
      <PaginationDots count={pages.length} activeIndex={index} />
      <PrimaryButton title={ONBOARDING_STRINGS.next} onPress={handleNext} />
    </OnboardingLayout>
  );
};

export default OnboardingScreen;