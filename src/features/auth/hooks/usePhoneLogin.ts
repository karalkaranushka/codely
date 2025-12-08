import { useState } from "react";
import type { SocialProvider } from "../types";
import { useAppNavigation } from "../../../navigation/useAppNavigation";

export const usePhoneLogin = () => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

    const { goToAuth } = useAppNavigation();

  const isValidPhone = phone.trim().length === 10;

  const sendOtp = () => {
    if (!isValidPhone) {
      setError("Please enter 10 digit mobile number");
      return;
    }

    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      goToAuth("VerifyOtp", { phone });
    }, 800);
  };

  const loginWithSocial = (provider: SocialProvider) => {
    console.log("Login with:", provider);
  };

  return {
    phone,
    setPhone,
    loading,
    error,
    sendOtp,
    loginWithSocial,
    isSendDisabled: !isValidPhone || loading,
  };
};