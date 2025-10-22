import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CodeVerificationScreen from "../screens/CodeVerificationScreen";
import LoginScreen from "../screens/loginScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import RegisterScreen from "../screens/RegisterScreen";
import OTPVerificationScreen from "../screens/OTPVerificationScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";
import TermsAndPrivacyScreen from "../screens/TermsAndPrivacyScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
<Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="OTPVerification" component={OTPVerificationScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        <Stack.Screen name="CodeVerification" component={CodeVerificationScreen} />
        <Stack.Screen name="TermsAndPrivacy" component={TermsAndPrivacyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
