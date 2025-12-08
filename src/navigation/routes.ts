export const ROOT_ROUTES = {
  Onboarding: "Onboarding",
  AuthStack: "AuthStack",
  MainStack: "MainStack",
} as const;

export const AUTH_ROUTES = {
  PhoneLogin: "PhoneLogin",
  VerifyOtp: "VerifyOtp",
} as const;

export const MAIN_ROUTES = {
  Home: "Home",
  Profile: "Profile",
} as const;

export type RootRouteName = (typeof ROOT_ROUTES)[keyof typeof ROOT_ROUTES];
export type AuthRouteName = (typeof AUTH_ROUTES)[keyof typeof AUTH_ROUTES];
export type MainRouteName = (typeof MAIN_ROUTES)[keyof typeof MAIN_ROUTES];