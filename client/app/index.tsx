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
import NavButton from "@/components/mainScreens/actualityFile/navigation/bottomNav/navButton";
import { MessagingStack } from "./messaging";
import { MySpaceStack } from "./mySpace";
import LoginScreen from "@/components/auth/login";
import { AuthStack } from "./auth";
const Tab = createMaterialTopTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <SafeAreaView className="flex-1 w-full pt-14 ">
        <SearchBar />
        <CustomNavBar />
        <Tab.Navigator
          initialRouteName="Auth"
          backBehavior="history"
          screenOptions={{
            swipeEnabled: false,
            tabBarShowLabel: false,
            tabBarStyle: {
              height: 0,
            },
            animationEnabled: false,
          }}
        >
          <Tab.Screen name="Auth" component={AuthStack} />
          <Tab.Group screenOptions={{ lazy: true, animationEnabled: true }}>
            <Tab.Screen name="Service" component={ServiceScreen} />
            <Tab.Screen name="Product" component={ProductScreen} />
            <Tab.Screen name="Daily" component={DailyScreen} />
          </Tab.Group>

          <Tab.Screen name="MessagingStack" component={MessagingStack} />
          <Tab.Screen name="MySpaceStack" component={MySpaceStack} />
        </Tab.Navigator>
      </SafeAreaView>
      <NavButton />
    </NavigationContainer>
  );
};

export default App;
