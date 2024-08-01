import {
  View,
  Image,
  Text,
  TouchableNativeFeedbackBase,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import { man2 } from "@/constants/image";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Plus } from "@/assets/svg/home/mySvg";

SplashScreen.preventAutoHideAsync();

export default function InBasketContentDisplay() {
  const [loaded, error] = useFonts({
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
    <View
      style={{ aspectRatio: 4 / 2 }}
      className="w-full rounded-lg overflow-hidden bg-banqueSpaceBg flex-row mt-2 mb-2"
    >
      {/* //image container and number of items */}
      <View className="h-full w-[35%]">
        <Image
          resizeMode="cover"
          source={man2}
          style={{ height: "100%", width: "100%" }}
        />
        <View className="w-full flex-row aspect-auto  items-end justify-between bg-transparentBlack absolute px-1 py-[1px]">
          <View className=" flex-row items-end">
            <Text className="font-interRegular text-white text-[8px] mb-[1px] mr-[2px] ">
              Items:
            </Text>
            <Text className="text-white font-interRegular text-[12px]">2</Text>
          </View>

          <Text className="text-[10px] font-interRegular text-white flex-row">
            9.99 $
          </Text>
        </View>
      </View>

      {/* // the details  */}
      <View className="flex-col justify-between py-1 px-[6px] w-[75%]">
        <View className="w-full justify-between flex-row">
          <Text className=" font-interBold text-mainBlack text-[16px]">
            19.98$
          </Text>

          <TouchableNativeFeedback>
            <Plus className="w-6 h-6 text-mainBlack rotate-45 mr-10" />
          </TouchableNativeFeedback>
        </View>

        <View className="w-full flex-col gap-y-2">
          <Text className=" font-InterMedium">Pinceaux de maquillage</Text>

          <View className="w-full flex-col">
            <View className="w-full flex-row gap-x-1">
              <Text className=" font-interRegular text-textGray text-[12px]">
                RDC Nord-Kivu Goma |
              </Text>
              <View className="flex-row items-center gap-x-1">
                <View className="h-1 w-1 bg-mainBlack rounded-full"></View>
                <Text className=" underline font-interRegular text-textGray text-[12px]">
                  Job Junior
                </Text>
              </View>
            </View>

            <TouchableOpacity activeOpacity={0.6}>
              <Text className="font-interRegular text-mainRed text-[12px]">
                Voir plus
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="w-full flex-row justify-between">
          <TouchableOpacity
            activeOpacity={0.7}
            className=" border px-[6%] py-1 border-mainGray rounded-full"
          >
            <Text className="text-mainBlack font-InterMedium">Discuter</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            className=" border px-[6%] py-1 border-mainBlack bg-mainBlack rounded-full mr-10"
          >
            <Text className="text-white font-InterMedium">Confirmer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
