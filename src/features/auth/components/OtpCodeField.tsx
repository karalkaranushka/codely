import React, { useEffect, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { AUTH_COLORS, AUTH_RADIUS, AUTH_TYPOGRAPHY } from "../theme";

interface Props {
  value: string;
  onChange: (code: string) => void;
  length?: number;
}

const OtpCodeField: React.FC<Props> = ({ value, onChange, length = 6 }) => {
  const inputRef = useRef<TextInput | null>(null);

const handleChangeText = (text: string) => {
  console.log("RAW:", text);
  const numeric = text.replace(/[^0-9]/g, "");
  console.log("NUMERIC:", numeric);
  if (numeric.length <= length) {
    onChange(numeric);
  }
};

  const focusInput = () => {
    inputRef.current?.focus();
  };

  // 👇 Make sure input really gets focus when screen opens
  useEffect(() => {
    const id = setTimeout(() => {
      inputRef.current?.focus();
    }, 250);
    return () => clearTimeout(id);
  }, []);

  return (
    <TouchableOpacity activeOpacity={1} onPress={focusInput} style={styles.container}>
      <View style={styles.boxRow}>
        {Array.from({ length }).map((_, index) => {
          const char = value[index] || "";
          const isActive = index === value.length && value.length < length;
          const isFilled = !!char;

          return (
            <View
              key={index}
              style={[
                styles.box,
                (isActive || isFilled) && styles.boxActive,
              ]}
            >
              <Text style={styles.char}>{char}</Text>
            </View>
          );
        })}
      </View>

      {/* Hidden "real" input */}
      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={handleChangeText}
        keyboardType="number-pad"
        maxLength={length}
        style={styles.hiddenInput}
        // autoFocus removed, we control focus via useEffect + tap
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  boxRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  box: {
    width: 48,
    height: 56,
    borderRadius: AUTH_RADIUS.input,
    borderWidth: 1,
    borderColor: AUTH_COLORS.inputBorder,
    backgroundColor: AUTH_COLORS.inputBg,
    marginHorizontal: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  boxActive: {
    borderColor: AUTH_COLORS.primaryText,
  },
  char: {
    fontSize: AUTH_TYPOGRAPHY.input,
    color: AUTH_COLORS.primaryText,
  },
  hiddenInput: {
    position: "absolute",
    opacity: 0,
    width: 1,
    height: 1,
  },
});

export default OtpCodeField;