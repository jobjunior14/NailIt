import { Tabs } from "expo-router";
import "../global.css";
export default function RootLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 0,
        },
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Product" }} />
    </Tabs>
  );
}
