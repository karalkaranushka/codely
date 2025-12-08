import { NavigatorScreenParams } from "@react-navigation/native";
import { AUTH_ROUTES, MAIN_ROUTES, ROOT_ROUTES } from "./routes";

export type AuthStackParamList = {
  [AUTH_ROUTES.PhoneLogin]: undefined;
  [AUTH_ROUTES.VerifyOtp]: undefined;
};

export type MainStackParamList = {
  [MAIN_ROUTES.Home]: undefined;
  [MAIN_ROUTES.Profile]: undefined;
};

export type RootStackParamList = {
  [ROOT_ROUTES.Onboarding]: undefined;
  [ROOT_ROUTES.AuthStack]: NavigatorScreenParams<AuthStackParamList>;
  [ROOT_ROUTES.MainStack]: NavigatorScreenParams<MainStackParamList>;
};