import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importação das tel
import CodeVerificationScreen from "../screens/CodeVerificationScreen";
import LoginScreen from "../screens/loginScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import RegisterScreen from "../screens/RegisterScreen";
import OTPVerificationScreen from "../screens/OTPVerificationScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";
import TermsAndPrivacyScreen from "../screens/TermsAndPrivacyScreen";
import SplashScreen from "../screens/SplashScreen";
import WhoUsingScreen from "../screens/WhoUsingScreen";
import ChooseProfileScreen from "../screens/ChooseProfileScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        {/* Fluxo de autenticação */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="OTPVerification" component={OTPVerificationScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        <Stack.Screen name="CodeVerification" component={CodeVerificationScreen} />

        {/* Termos e políticas */}
        <Stack.Screen name="TermsAndPrivacy" component={TermsAndPrivacyScreen} />

        {/* Fluxo principal */}
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="WhoUsing" component={WhoUsingScreen} />
        <Stack.Screen name="ChooseProfile" component={ChooseProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
