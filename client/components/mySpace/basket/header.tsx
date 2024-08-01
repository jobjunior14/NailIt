import { View, Text, TouchableNativeFeedback } from "react-native";
import { AdjustmentHorizontalSvg } from "@/assets/svg/mySpace/mySpaceSvg";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function BasketHeader() {
  const [loaded, error] = useFonts({
    "Inter-Bold": require("@/assets/fonts/Inter-Bold.ttf"),
    "Inter-Regular": require("@/assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("@/assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("@/assets/fonts/Inter-SemiBold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return (
    <View className=" w-full flex-col mt-6">
      <View className="w-full flex-row justify-between items-center px-3 py-2">
        <Text className=" font-InterSemiBold text-[16px]">Panier</Text>

        <View className=" flex-row justify-center items-center ">
          <Text className=" font-interRegular text-[12px] text-textGray">
            Trier par
          </Text>
          <TouchableNativeFeedback>
            <AdjustmentHorizontalSvg className=" w-5 h-5 text-mainGray ml-1" />
          </TouchableNativeFeedback>
        </View>
      </View>

      {/* separeted line */}
      <View
        style={{ opacity: 0.5 }}
        className="w-full h-[0.5px] bg-mainGray mt-1"
      ></View>
    </View>
  );
}
