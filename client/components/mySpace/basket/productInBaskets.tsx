import { View, Text } from "react-native";
import InBasketContentDisplay from "./inBasketContentsDisplay";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function ProductInBasket() {
  const [loaded, error] = useFonts({
    "Inter-Regular": require("@/assets/fonts/Inter-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
  return (
    <View className=" w-full flex-col px-3 mt-2">
      <View className="w-full flex-row justify-center items-center">
        <Text className="font-interRegular text-[12px]">19/12/2024</Text>
      </View>

      <View className="w-[50%] h-[2px] rounded-full bg-mainGray opacity-30 mt-1"></View>

      <View className="w-full flex-col gap-y-1">
        <InBasketContentDisplay />
        <InBasketContentDisplay />
        <InBasketContentDisplay />
      </View>
    </View>
  );
}
