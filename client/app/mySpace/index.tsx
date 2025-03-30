import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import MySpaceView from "@/components/mySpace/mySpace";
import { SafeAreaView } from "react-native";

const Stack = createStackNavigator();

export default function Index() {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Stack.Navigator initialRouteName="MySpace">
          <Stack.Screen name="MySpace" component={MySpaceView} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
