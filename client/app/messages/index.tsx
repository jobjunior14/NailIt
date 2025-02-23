import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, SafeAreaView } from "react-native";
import Inbox from "@/components/messages/components/inBoxComponents/inBox";
import Messages from "@/components/messages/messaging";

const Stack = createStackNavigator();

export const MessagingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Messaging" component={Messages} />
      <Stack.Screen name="inBox" component={Inbox} />
    </Stack.Navigator>
  );
};

const MessagesScreen: React.FC = () => {
  return <MessagingStack />;
};

export default MessagesScreen;
