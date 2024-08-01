import { View, Text, TouchableOpacity } from "react-native";
import MySpaceProfilPresentation from "./mySpaceProfilPresentation";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import {
  BanqueNoteSvg,
  EyeSlahSvg,
  QRCodeSvg,
  ArrowPathSvg,
  ArrowUpInSquareSvg,
  ArrowDownInSquareSvg,
  EllipsHorizontalSvg,
} from "@/assets/svg/mySpace/mySpaceSvg";

SplashScreen.preventAutoHideAsync();

export default function BanqueInformation() {
  const [loaded, error] = useFonts({
    "Inter-Black": require("@/assets/fonts/Inter-Black.ttf"),
    "Inter-Bold": require("@/assets/fonts/Inter-Bold.ttf"),
    "Inter-Regular": require("@/assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("@/assets/fonts/Inter-Medium.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  return (
    <View className="flex-col">
      {/* profil presentation  */}
      <MySpaceProfilPresentation />

      {/* balance and QR code  */}
      <View className="w-full flex-row justify-between items-center mt-8 px-3 py-2">
        {/* balance  */}
        <View className=" flex-row justify-start gap-x-2">
          <BanqueNoteSvg className="w-6 h-6 text-mainGray" />

          <View className="flex-col items-start justify-start">
            <Text className=" font-interRegular">Balance:</Text>
            <View className="flex-row items-center gap-x-2">
              <Text className="font-black text-xl">22.5 $</Text>
              <EyeSlahSvg className="w-5 h-4 text-textGray" />
            </View>
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.7}>
          <QRCodeSvg className=" w-9 h-9 text-mainBlack" />
        </TouchableOpacity>
      </View>

      {/* serapted line  */}
      <View className="w-full bg-textGray h-[0.5px] mt-4"></View>

      {/* banque's options  */}
      <View className="w-full flex-row justify-between items-center px-3 py-2 mt-4">
        <TouchableOpacity
          activeOpacity={0.7}
          accessibilityLabel="Transférer"
          className="flex-col items-center justify-center"
        >
          <View className="w-8 h-8 bg-mainBlack rounded-full flex justify-center items-center">
            <ArrowPathSvg className=" text-white w-6 h-6" />
          </View>

          <Text className=" text-[12px] font-interRegular text-mainBlack">
            Transférer
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          className="flex-col items-center justify-center"
        >
          <View className="w-8 h-8 bg-mainBlack rounded-full flex justify-center items-center">
            <ArrowUpInSquareSvg className=" text-white w-6 h-6" />
          </View>

          <Text className=" text-[12px] font-interRegular text-mainBlack">
            Rétier
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          className="flex-col items-center justify-center"
        >
          <View className="w-8 h-8 bg-mainBlack rounded-full flex justify-center items-center">
            <ArrowDownInSquareSvg className=" text-white w-6 h-6" />
          </View>

          <Text className=" text-[12px] font-interRegular text-mainBlack">
            Déposer
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          className="flex-col items-center justify-center"
        >
          <View className="w-8 h-8 bg-mainBlack rounded-full flex justify-center items-center">
            <EllipsHorizontalSvg className=" text-white w-6 h-6" />
          </View>

          <Text className=" text-[12px] font-interRegular text-mainBlack">
            Utiles
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
