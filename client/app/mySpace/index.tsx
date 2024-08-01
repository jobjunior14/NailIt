// import { Stack } from "expo-router";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableNativeFeedback,
} from "react-native";
import { router } from "expo-router";
import BanqueSpace from "@/components/mySpace/banque/banqueSpace";
import Basket from "@/components/mySpace/basket/basket";
import { ChevroLeftSvg } from "@/assets/svg/mySpace/mySpaceSvg";
export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 20 }}>
      {/* title of the page  */}
      <View className="h-fit w-full mt-10 px-3 pb-2 flex-row items-center">
        <TouchableNativeFeedback onPress={() => router.push("../")}>
          <ChevroLeftSvg className="w-6 h-6 text-mainBlack" />
        </TouchableNativeFeedback>
        <Text className="text-xl font-InterSemiBold">My space</Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingTop: 20,
          flexGrow: 1,
          flexDirection: "column",
        }}
      >
        <View className="px-3">
          <BanqueSpace />
        </View>

        <Basket />
      </ScrollView>
    </SafeAreaView>
  );
}
