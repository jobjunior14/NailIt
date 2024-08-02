import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, SafeAreaView } from "react-native";
import CustomNavBar from "../components/navigation/CustomNavBar";
import SearchBar from "../components/navigation/searchBar";
import DailyScreen from "@/components/screens/dailyScreen";
import ProductScreen from "@/components/screens/productScreen";
import ServiceScreen from "@/components/screens/serviceScreen";
import SeparationLine from "@/components/navigation/sepationLine";

const Drawer = createDrawerNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer independent={true}>
      <SafeAreaView className="flex-1 w-full pt-10">
        <SearchBar />
        <CustomNavBar />
        <SeparationLine />
        <Drawer.Navigator
          initialRouteName="Service"
          screenOptions={{
            headerShown: false, // hide header if needed
            gestureEnabled: true, // enable swipe gestures
          }}
        >
          <Drawer.Screen name="Service" component={ServiceScreen} />
          <Drawer.Screen name="Product" component={ProductScreen} />
          <Drawer.Screen name="Daily" component={DailyScreen} />
        </Drawer.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
