import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AUTH_COLORS } from "../theme";
import { AUTH_STRINGS } from "../constants";
import VerifyOtpForm from "../components/VerifyOtpForm";
import { useVerifyOtp } from "../hooks/useVerifyOtp";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  route: { params: { phone: string } };
  navigation: any;
}

const VerifyOtpScreen: React.FC<Props> = ({ route, navigation }) => {
  const { phone } = route.params;
  const { code, setCode, loading, verifyOtp, resendOtp, isVerifyDisabled } =
    useVerifyOtp();

  const handleChangePhone = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.screen}>
      {/* Simple header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* <Text style={styles.backArrow}>{"<"}</Text> */}
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{AUTH_STRINGS.verifyTitle}</Text>
        <View style={{ width: 24 }} />{/* spacer for center alignment */}
      </View>

      <VerifyOtpForm
        phone={phone}
        code={code}
        onChangeCode={setCode}
        loading={loading}
        onVerify={verifyOtp}
        onResend={resendOtp}
        onChangePhone={handleChangePhone}
        disabled={isVerifyDisabled}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: AUTH_COLORS.cardBg,
  },
  header: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: AUTH_COLORS.inputBorder,
  },
  backArrow: {
    fontSize: 20,
    color: AUTH_COLORS.primaryText,
    width: 24,
  },
  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontSize: 16,
    color: AUTH_COLORS.primaryText,
    fontWeight: "600",
  },
});

export default VerifyOtpScreen;