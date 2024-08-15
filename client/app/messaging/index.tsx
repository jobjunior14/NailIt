import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, SafeAreaView } from "react-native";
import Inbox from "@/components/messaging/components/inBoxComponents/inBox";
import MessagingScreen from "@/components/messaging/messaging";

const Stack = createStackNavigator();

export const MessagingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Messaging" component={MessagingScreen} />
      <Stack.Screen name="inBox" component={Inbox} />
    </Stack.Navigator>
  );
};

const Messaging: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <MessagingStack />
    </NavigationContainer>
  );
};

export default Messaging;
