import { useState } from "react";
import { useAppNavigation } from "../../../navigation/useAppNavigation";

export const useVerifyOtp = () => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const { goToPreferences } = useAppNavigation();

  const isValidCode = code.length === 6;

  const verifyOtp = () => {
    if (!isValidCode) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log("OTP verified:", code);

      goToPreferences("PreferencesSetup");
      // TODO: navigate to next screen or call API
    }, 800);
  };

  const resendOtp = () => {
    console.log("Resend OTP");
    // TODO: call resend API
  };

  return {
    code,
    setCode,
    loading,
    verifyOtp,
    resendOtp,
    isVerifyDisabled: !isValidCode || loading,
  };
};