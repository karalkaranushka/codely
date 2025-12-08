import { useState } from "react";

export const useVerifyOtp = () => {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const isValidCode = code.length === 6;

  const verifyOtp = () => {
    if (!isValidCode) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log("OTP verified:", code);
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