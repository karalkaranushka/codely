import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import OtpCodeField from "./OtpCodeField";
import PrimaryButton from "./PrimaryButton";
import { AUTH_COLORS, AUTH_TYPOGRAPHY } from "../theme";
import { AUTH_STRINGS } from "../constants";

interface Props {
  phone: string;
  code: string;
  onChangeCode: (value: string) => void;
  loading: boolean;
  onVerify: () => void;
  onResend: () => void;
  onChangePhone: () => void;
  disabled: boolean;
}

const VerifyOtpForm: React.FC<Props> = ({
  phone,
  code,
  onChangeCode,
  loading,
  onVerify,
  onResend,
  onChangePhone,
  disabled,
}) => {
  return (
    <View style={styles.content}>
            <View style={{ flex: 0.1 }} />
      {/* Circle icon */}
      {/* <View style={styles.iconCircle}>
        <Text style={styles.iconEmoji}>📞</Text>
      </View> */}

      <View style={{ flex: 0.1 }} />

      <Text style={styles.title}>{AUTH_STRINGS.verifyTitle}</Text>
      <View style={{ height: 8 }} />
      <Text style={styles.subtitle}>{AUTH_STRINGS.verifySubtitle}</Text>
      <View style={{ height: 6 }} />
      <Text style={styles.phoneText}>{phone}</Text>

      <View style={{ flex: 0.1 }} />

      <OtpCodeField value={code} onChange={onChangeCode} length={6} />

      <View style={{flex: 0.1 }} />

      <PrimaryButton
        title={AUTH_STRINGS.verifyCta}
        onPress={onVerify}
        loading={loading}
        disabled={disabled}
        style={{paddingHorizontal: 50}}
      />

      <View style={{ height: 24 }} />

      <Text style={styles.mutedText}>{AUTH_STRINGS.didntReceive}</Text>

      <TouchableOpacity onPress={onResend} style={{ marginTop: 4 }}>
        <Text style={styles.resendText}>{AUTH_STRINGS.resendOtp}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onChangePhone} style={{ marginTop: 24 }}>
        <Text style={styles.changePhoneText}>
          {AUTH_STRINGS.changePhoneNumber}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 24,
  },
  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: AUTH_COLORS.inputBg,
    alignItems: "center",
    justifyContent: "center",
  },
  iconEmoji: {
    fontSize: 32,
  },
  title: {
    fontSize: 26,
    color: AUTH_COLORS.primaryText,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: AUTH_TYPOGRAPHY.subtitle,
    color: AUTH_COLORS.mutedText,
  },
  phoneText: {
    fontSize: 16,
    color: AUTH_COLORS.primaryText,
    fontWeight: "500",
  },
  mutedText: {
    fontSize: 16,
    color: AUTH_COLORS.mutedText,
  },
  resendText: {
    fontSize: 16,
    color: AUTH_COLORS.primaryText,
    fontWeight: "600",
  },
  changePhoneText: {
    fontSize: 16,
    color: AUTH_COLORS.primaryText,
  },
});

export default VerifyOtpForm;