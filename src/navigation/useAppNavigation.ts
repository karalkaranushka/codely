import { useNavigation, CommonActions } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type {
  RootStackParamList,
  AuthStackParamList,
  MainStackParamList,
} from "./types";
import { ROOT_ROUTES } from "./routes";

type RootNav = NativeStackNavigationProp<RootStackParamList>;

export const useAppNavigation = () => {
  const navigation = useNavigation<RootNav>();

  const goToRoot = <T extends keyof RootStackParamList>(
    route: T,
    params?: RootStackParamList[T]
  ) => {
    navigation.navigate(route as any, params as any);
  };

  const goToAuth = <T extends keyof AuthStackParamList>(
    screen: T,
    params?: AuthStackParamList[T]
  ) => {
    navigation.navigate(ROOT_ROUTES.AuthStack, {
      screen,
      params,
    });
  };

  const goToMain = <T extends keyof MainStackParamList>(
    screen: T,
    params?: MainStackParamList[T]
  ) => {
    navigation.navigate(ROOT_ROUTES.MainStack, {
      screen,
      params,
    });
  };

  const resetToOnboarding = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: ROOT_ROUTES.Onboarding }],
      })
    );
  };

  const resetToAuth = <T extends keyof AuthStackParamList>(
    screen: T = "PhoneLogin" as T,
    params?: AuthStackParamList[T]
  ) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: ROOT_ROUTES.AuthStack,
            params: { screen, params },
          },
        ],
      })
    );
  };

  const resetToMain = <T extends keyof MainStackParamList>(
    screen: T = "Home" as T,
    params?: MainStackParamList[T]
  ) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: ROOT_ROUTES.MainStack,
            params: { screen, params },
          },
        ],
      })
    );
  };

  return {
    navigation,
    goToRoot,
    goToAuth,
    goToMain,
    resetToOnboarding,
    resetToAuth,
    resetToMain,
  };
};