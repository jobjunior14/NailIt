import React from "react";
import "react-native-reanimated";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, SafeAreaView } from "react-native";
import CustomNavBar from "@/components/mainScreens/actualityFile/navigation/header/CustomNavBar";
import SearchBar from "@/components/mainScreens/actualityFile/navigation/header/searchBar";
import DailyScreen from "@/components/mainScreens/dailyScreen";
import ProductScreen from "@/components/mainScreens/productScreen";
import ServiceScreen from "@/components/mainScreens/serviceScreen";
import SeparationLine from "@/components/mainScreens/actualityFile/navigation/header/sepationLine";
import NavButton from "@/components/mainScreens/actualityFile/navigation/bottomNav/swipBtn";

const Tab = createMaterialTopTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <SafeAreaView className="flex-1 w-full pt-10 ">
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
        <NavButton />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
