import React from "react";
import { Text, View } from "react-native";
import PhoneNumberField from "./PhoneNumberField";
import PrimaryButton from "./PrimaryButton";
import { AUTH_STRINGS } from "../constants";

interface Props {
  phone: string;
  onChangePhone: (value: string) => void;
  loading: boolean;
  onSendOtp: () => void;
  disabled: boolean;
  error: string;
}

const PhoneLoginForm: React.FC<Props> = ({
  phone,
  onChangePhone,
  loading,
  onSendOtp,
  disabled,
  error,
}) => {
  return (
    <>
      <PhoneNumberField value={phone} onChangeText={onChangePhone} />
      {error && (
        <Text style={{ color: "red", marginTop: 6, marginHorizontal: 6 }}>
          {error}
        </Text>
      )}
      <View style={{ height: 18 }} />
      <PrimaryButton
        title={AUTH_STRINGS.sendOtp}
        onPress={onSendOtp}
        loading={loading}
        disabled={disabled}
      />
    </>
  );
};

export default PhoneLoginForm;