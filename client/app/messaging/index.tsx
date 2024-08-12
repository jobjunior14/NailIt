import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, SafeAreaView } from "react-native";

const Tab = createMaterialTopTabNavigator();
import MessagingScreen from "@/components/messaging/messaging";

const Messaging: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <SafeAreaView className="flex-1 w-full pt-10">
        <Tab.Navigator
          // initialRouteName="Service"
          backBehavior="order"
          screenOptions={{
            swipeEnabled: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              height: 0,
            },
          }}
        >
          <Tab.Screen name="Messaging" component={MessagingScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default Messaging;
