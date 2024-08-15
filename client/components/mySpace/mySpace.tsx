// import { Stack } from "expo-router";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableNativeFeedback,
} from "react-native";
import BanqueSpace from "@/components/mySpace/banque/banqueSpace";
import Basket from "@/components/mySpace/basket/basket";
import { ArrowLeftSvg } from "@/assets/svg/messaging/messagingSvg";
import FontsLoader from "../FontLoader/fontLoader";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function MySpaceScreen() {
  const navigation = useNavigation();

  return (
    <FontsLoader>
      <View className="w-full bg-white">
        <View className="h-fit w-full   px-3 pb-4 flex-row items-center ">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <ArrowLeftSvg className="w-5 h-5 text-mainBlack mr-3" />
          </TouchableOpacity>
          <Text className="text-[20px] font-InterSemiBold">My space</Text>
        </View>

        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            flexDirection: "column",
            marginTop: 20,
            paddingBottom: 100,
          }}
        >
          {/* //information about your banque account  */}
          <View className="px-3">
            <BanqueSpace />
          </View>

          {/* //the items in your basket and all the historique */}
          <Basket />
        </ScrollView>
      </View>
    </FontsLoader>
  );
}
