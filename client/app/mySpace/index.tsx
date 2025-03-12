import { createStackNavigator } from "@react-navigation/stack";
import { NavigationIndependentTree } from "@react-navigation/native";
import MySpaceView from "@/components/mySpace/mySpace";

const Stack = createStackNavigator();

export const MySpaceStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MySpaceScreen" component={MySpaceView} />
    </Stack.Navigator>
  );
};

export default function MySpaceScreen() {
  return (
    <NavigationIndependentTree>
      <MySpaceStack />
    </NavigationIndependentTree>
  );
}
