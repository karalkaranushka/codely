import { useState } from "react";
import type { OnboardingPage } from "../types";
import { ONBOARDING_STRINGS } from "../constant";
import { useAppNavigation } from "../../../navigation/useAppNavigation";

export const useOnboarding = () => {
  const { goToAuth } = useAppNavigation();
  const pages: OnboardingPage[] = [
    {
      id: "stay-updated",
      title: ONBOARDING_STRINGS.title,
      subtitle: ONBOARDING_STRINGS.subtitle,
    },
  ];

  const [index, setIndex] = useState(0);

  const current = pages[index];

  const handleNext = () => {
    goToAuth("PhoneLogin");
    // if (index < pages.length - 1) {
    //   setIndex((prev) => prev + 1);
    // } else {
    //   console.log("Onboarding finished");
    // }
  };

  const handleSkip = () => {
    console.log("Onboarding skipped");
  };

  return {
    pages,
    current,
    index,
    handleNext,
    handleSkip,
  };
};