import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MySpace from "@/components/mySpace/mySpace";

import ProfilPresentationProfil from "@/components/profil/profilPresentationProfil";
import BanqueHistories from "@/components/mySpace/banqueHistories/banqueHistories";
import Inbox from "@/components/messaging/components/inBoxComponents/inBox";
import MySpaceScreen from "@/components/mySpace/mySpace";

const Stack = createStackNavigator();

export const MySpaceStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MySpace" component={MySpaceScreen} />
    </Stack.Navigator>
  );
};

export default function Home() {
  return (
    <NavigationContainer independent={true}>
      <MySpaceStack />
    </NavigationContainer>
  );
}
