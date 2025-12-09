import { NavigatorScreenParams } from "@react-navigation/native";
import { AUTH_ROUTES, MAIN_ROUTES, PREFERENCES_ROUTES, ROOT_ROUTES } from "./routes";

export type AuthStackParamList = {
  [AUTH_ROUTES.PhoneLogin]: undefined;
  [AUTH_ROUTES.VerifyOtp]: undefined;
};

export type PreferencesStackParamList = {
  [PREFERENCES_ROUTES.PreferencesSetup]: undefined;
};

export type MainStackParamList = {
  [MAIN_ROUTES.Feed]: undefined;
  [MAIN_ROUTES.Saved]: undefined;
  [MAIN_ROUTES.Search]: undefined;
  [MAIN_ROUTES.Profile]: undefined;
};


export type RootStackParamList = {
  [ROOT_ROUTES.Onboarding]: undefined;
  [ROOT_ROUTES.AuthStack]: NavigatorScreenParams<AuthStackParamList>;
  [ROOT_ROUTES.MainStack]: NavigatorScreenParams<MainStackParamList>;
};