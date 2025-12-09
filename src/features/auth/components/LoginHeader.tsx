import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AUTH_STRINGS } from "../constants";
import { AUTH_COLORS, AUTH_RADIUS, AUTH_TYPOGRAPHY } from "../theme";


const LoginHeader: React.FC = () => {
  return (
    <>
      <View style={styles.logoWrapper}>
        <View style={styles.logoSquare}>
          <Text style={styles.logoBraces}>{"{   }"}</Text>
        </View>
      </View>

      <Text style={styles.title}>{AUTH_STRINGS.appName}</Text>
      <Text style={styles.subtitle}>{AUTH_STRINGS.subtitle}</Text>

      <View style={{ height: 40 }} />
    </>
  );
};

const styles = StyleSheet.create({
  logoWrapper: {
    alignItems: "center",
    marginVertical: 40,
  },
  logoSquare: {
    width: 100,
    height: 100,
    borderRadius: AUTH_RADIUS.logo,
    backgroundColor: AUTH_COLORS.logoBg,
    borderWidth: 1,
    borderColor: AUTH_COLORS.logoBorder,
    alignItems: "center",
    justifyContent: "center",
  },
  logoBraces: {
    fontSize: 40,
    color: AUTH_COLORS.mutedText,
  },
  title: {
    fontSize: AUTH_TYPOGRAPHY.appTitle,
    fontWeight: "700",
    textAlign: "center",
    color: AUTH_COLORS.primaryText,
    letterSpacing: 1.1,
  },
  subtitle: {
    marginTop: 8,
    fontSize: AUTH_TYPOGRAPHY.subtitle,
    textAlign: "center",
    color: AUTH_COLORS.secondaryText,
  },
});

export default LoginHeader;