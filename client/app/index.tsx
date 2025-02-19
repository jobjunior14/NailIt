import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { SafeAreaView, Text, View } from "react-native";
import Header from "@/components/mainScreens/Header/header";
import { MySpaceSvg } from "@/assets/svg/home/mySvg";
import CategoriesFilter from "@/components/mainScreens/Header/categoriesFilter";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Footer from "@/components/mainScreens/Footer/footer";
import ServiceScreen from "@/components/mainScreens/sreens/services";
import ProductScreen from "@/components/mainScreens/sreens/products";
import DailyScreen from "@/components/mainScreens/sreens/daily";

const Tab = createMaterialTopTabNavigator();

export default function Index() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <SafeAreaView
          style={{
            flex: 1,
            width: "100%",
            paddingTop: 3.5,
          }}
        >
          <Header />
          <CategoriesFilter />

          <Tab.Navigator
            initialRouteName="Service"
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
            <Tab.Group screenOptions={{ lazy: true, animationEnabled: true }}>
              <Tab.Screen
                name="Service"
                component={ServiceScreen}
                initialParams={{ user_name: "guest" }}
              />
              <Tab.Screen
                name="Product"
                component={ProductScreen}
                initialParams={{ user_name: "guest" }}
              />

              <Tab.Screen
                name="Daily"
                component={DailyScreen}
                initialParams={{ user_name: "guest" }}
              />
            </Tab.Group>
          </Tab.Navigator>

          <Footer />
        </SafeAreaView>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
