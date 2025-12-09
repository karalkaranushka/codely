export const ROOT_ROUTES = {
  Onboarding: "Onboarding",
  AuthStack: "AuthStack",
  PreferencesStack: "PreferencesStack",
  MainStack: "MainStack",
} as const;

export const AUTH_ROUTES = {
  PhoneLogin: "PhoneLogin",
  VerifyOtp: "VerifyOtp",
} as const;

export const MAIN_ROUTES = {
  Feed: "Feed",
  Saved: "Saved",
  Search: "Search",
  Profile: "Profile",
} as const;

export const PREFERENCES_ROUTES = {
  PreferencesSetup: "PreferencesSetup",
} as const;

export type RootRouteName = (typeof ROOT_ROUTES)[keyof typeof ROOT_ROUTES];
export type AuthRouteName = (typeof AUTH_ROUTES)[keyof typeof AUTH_ROUTES];
export type MainRouteName = (typeof MAIN_ROUTES)[keyof typeof MAIN_ROUTES];
export type PreferencesRouteName = (typeof PREFERENCES_ROUTES)[keyof typeof PREFERENCES_ROUTES];