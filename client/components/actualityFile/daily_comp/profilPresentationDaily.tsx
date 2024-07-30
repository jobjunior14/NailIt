import {
  View,
  Image,
  Text,
  Pressable,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import { rango } from "@/constants/image";
import { Star, World, Plus } from "@/assets/svg/home/mySvg";
import { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Ellips } from "@/assets/svg/home/mySvg";
SplashScreen.preventAutoHideAsync();

export default function ProfilPresentationDaily() {
  const [linkBtn, setLinkBtn] = useState<boolean>(false);
  //Custom font, follow the link to see them
  const [loaded, error] = useFonts({
    "Inter-Black": require("@/assets/fonts/Inter-Black.ttf"),
    "Inter-Bold": require("@/assets/fonts/Inter-Bold.ttf"),
    "Inter-Regular": require("@/assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("@/assets/fonts/Inter-Medium.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded && !error) {
    return null;
  }

  //normaly have an id of the person
  const handleLinkBtn = (): any => {
    setLinkBtn((prev: boolean) => !prev);
  };
  return (
    <View className={"flex-row justify-between items-center w-full mx-2 mt-2"}>
      {/* profil and publication info */}
      <View className="flex-row justify-start items-center w-[75%] gap-x-2 ">
        {/* profil image  */}
        <TouchableOpacity onPress={() => console.log("hey")}>
          <Image
            className="w-10 h-10 rounded-full"
            resizeMode="cover"
            source={rango}
          />
        </TouchableOpacity>

        {/* name, date, rating */}
        <TouchableOpacity
          activeOpacity={0.5}
          className=" flex-col gap-y-[1px] w-[70%] justify-start"
        >
          {/* name of the profil  */}
          <View>
            <Text className=" font-interBold text-[12px]">Job Junior</Text>
          </View>

          {/* elapsed time of the post and profil rating */}
          <View className="flex-row gap-x-4  items-center">
            <Text className=" text-mainBlack text-[10px] font-interRegular">
              24 minutes
            </Text>

            {/* profil rating */}
            <View className="flex-row  justify-center items-center">
              <View className="flex-row justify-center items-center ">
                <View className="w-[6px] h-[6px] mr-[2px] rounded-full bg-textGray"></View>
                <Star className="w-4 h-4 text-mainGray " />
                <Text className=" text-mainBlack ml-1 text-[10px] font-interRegular">
                  4/5
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      {/* more options */}
      <TouchableNativeFeedback>
        <Ellips className="w-6 h-6 text-mainBlack mr-4" />
      </TouchableNativeFeedback>
    </View>
  );
}
