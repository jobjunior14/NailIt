import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, SafeAreaView } from "react-native";
import CustomNavBar from "./CustomNavBar";
import SearchBar from "./searchBar";
import { useState } from "react";
import ServiceScreen from "./screens/serviceScreen";
import ProductScreen from "./screens/productScreen";
import DailyScreen from "./screens/dailyScreen";

type RootStackParamList = {
  Service: { screen: string };
  Product: { screen: string };
  Daily: { screen: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <SafeAreaView className="flex-1 pt-10">
        <SearchBar />
        <CustomNavBar />
        {/* separationline */}
        <View className="w-full h-[0.5px] bg-dailyColor mt-[-18px] "></View>
        <Stack.Navigator
          initialRouteName="Service"
          screenOptions={{ headerShown: false }}
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
