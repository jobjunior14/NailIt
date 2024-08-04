import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, SafeAreaView } from "react-native";
import CustomNavBar from "@/components/mainScreens/actualityFile/navigation/CustomNavBar";
import SearchBar from "@/components/mainScreens/actualityFile/navigation/searchBar";
import DailyScreen from "@/components/mainScreens/dailyScreen";
import ProductScreen from "@/components/mainScreens/productScreen";
import ServiceScreen from "@/components/mainScreens/serviceScreen";
import SeparationLine from "@/components/mainScreens/actualityFile/navigation/sepationLine";

const Tab = createMaterialTopTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <SafeAreaView className="flex-1 w-full pt-10">
        <SearchBar />
        <CustomNavBar />
        <SeparationLine />
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
          <Tab.Group>
            <Tab.Screen name="Service" component={ServiceScreen} />
            <Tab.Screen name="Product" component={ProductScreen} />
            <Tab.Screen name="Daily" component={DailyScreen} />
          </Tab.Group>
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
