import React from "react";
import LoginLayout from "../components/LoginLayout";
import LoginHeader from "../components/LoginHeader";
import PhoneLoginForm from "../components/PhoneLoginForm";
import DividerWithText from "../components/DividerWithText";
import SocialLoginGroup from "../components/SocialLoginGroup";
import TermsAndPrivacyText from "../components/TermsAndPrivacyText";
import { usePhoneLogin } from "../hooks/usePhoneLogin";

const PhoneLoginScreen: React.FC = () => {
  const {
    phone,
    setPhone,
    loading,
    error,
    sendOtp,
    loginWithSocial,
    isSendDisabled,
  } = usePhoneLogin();

  return (
    <LoginLayout>
      <LoginHeader />
      <PhoneLoginForm
        phone={phone}
        onChangePhone={setPhone}
        loading={loading}
        onSendOtp={sendOtp}
        disabled={isSendDisabled}
        error={error}
      />
      <DividerWithText />
      <SocialLoginGroup
        onGithub={() => loginWithSocial("github")}
        onGoogle={() => loginWithSocial("google")}
      />
      <TermsAndPrivacyText />
    </LoginLayout>
  );
};

export default PhoneLoginScreen;