import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "@/components/auth/login";
import SignUpScreen from "@/components/auth/signUp";
const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

const Messaging: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <AuthStack />
    </NavigationContainer>
  );
};

export default Messaging;
