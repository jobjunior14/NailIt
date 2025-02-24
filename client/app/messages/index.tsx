import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationIndependentTree } from "@react-navigation/native";
import { View, SafeAreaView } from "react-native";
import Inbox from "@/components/messages/components/inBoxComponents/inBox";
import AllMessages from "@/components/messages/allMessages";

const Stack = createStackNavigator();

export const MessagingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="MessagesViewer"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="MessagesViewer" component={AllMessages} />
      <Stack.Screen name="inBox" component={Inbox} />
    </Stack.Navigator>
  );
};

export const MessagesScreen: React.FC = () => {
  return (
    <NavigationIndependentTree>
      <MessagingStack />
    </NavigationIndependentTree>
  );
};

export default MessagingStack;
