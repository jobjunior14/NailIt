import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, SafeAreaView } from "react-native";
import CustomNavBar from "../components/navigation/CustomNavBar";
import SearchBar from "../components/navigation/searchBar";
import { useState } from "react";
import ServiceScreen from "./screens/serviceScreen";
import ProductScreen from "./screens/productScreen";
import DailyScreen from "./screens/dailyScreen";
import SeparationLine from "@/components/navigation/sepationLine";

type RootStackParamList = {
  Service: { screen: string };
  Product: { screen: string };
  Daily: { screen: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <SafeAreaView className="flex-1 w-full pt-10">
        <SearchBar />
        <CustomNavBar />
        <SeparationLine />
        <Stack.Navigator
          initialRouteName="Service"
          screenOptions={{
            headerShown: false, // hide header if needed
            gestureEnabled: true, // enable swipe gestures
            animation: "fade",
            animationDuration: 0,
          }}
        >
          <Stack.Screen name="Service" component={ServiceScreen} />
          <Stack.Screen name="Product" component={ProductScreen} />
          <Stack.Screen name="Daily" component={DailyScreen} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
