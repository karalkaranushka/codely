import React from "react";
import { View } from "react-native";
import SocialButton from "./SocialButton";
import { AUTH_STRINGS } from "../constants";

interface Props {
  onGithub: () => void;
  onGoogle: () => void;
}

const SocialLoginGroup: React.FC<Props> = ({ onGithub, onGoogle }) => {
  return (
    <View style={{ gap: 12 }}>
      <SocialButton label={AUTH_STRINGS.github} iconText="" onPress={onGithub} />
      <SocialButton label={AUTH_STRINGS.google} iconText="G" onPress={onGoogle} />
    </View>
  );
};

export default SocialLoginGroup;