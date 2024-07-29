import { View, Image, Text, Pressable, TouchableOpacity } from "react-native";
import { rango } from "@/constants/image";
import { Star, World, Plus } from "@/assets/svg/home/mySvg";
import { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

interface ProfilPresentationPorps {
  custom: string;
}
export default function ProfilPresentation({
  custom,
}: ProfilPresentationPorps) {
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
    <View className={"flex-row justify-between items-center w-full mx-2 mt-4"}>
      {/* profil and publication info */}
      <View className="flex-row justify-start items-center w-[75%] gap-x-2 ">
        {/* profil image  */}
        <TouchableOpacity onPress={() => console.log("hey")}>
          <Image
            className="w-20 h-20 rounded-full"
            resizeMode="cover"
            source={rango}
          />
        </TouchableOpacity>

        {/* name, date, categorie */}
        <View className=" flex-col gap-y-[1px] w-[70%]">
          <TouchableOpacity>
            <Text className=" font-interBold ">Job Junior</Text>
          </TouchableOpacity>

          <Text className="font-interRegular text-[13px]">
            Make-up & Beauté & Tendance
          </Text>

          <View className="flex-row gap-x-4  items-center">
            <Text className=" text-mainBlack text-[13px] font-interRegular">
              24 minutes
            </Text>

            <View className="flex-row  justify-center items-center">
              <View className="flex-row justify-center items-center ">
                <View className="w-2 h-2 mr-[2px] rounded-full bg-textGray"></View>
                <Star className="w-4 h-4 text-mainGray " />
                <Text className=" text-mainBlack ml-1 text-[13px] font-interRegular">
                  4/5
                </Text>
              </View>
            </View>

            <World className="w-5 h-5 text-mainBlack" />
          </View>
        </View>
      </View>

      {/* link or unlink button  */}
      <TouchableOpacity
        onPress={handleLinkBtn}
        className="w-[25%] flex justify-center items-center pr-3"
      >
        <View className="h-[3.5vh] w-[20vw] flex justify-center items-center border border-mainBlack rounded-full">
          <View className=" flex-row items-center justify-stretch">
            <Plus
              className={`w-5 h-5 ${
                linkBtn ? "" : "rotate-45"
              }  text-mainBlack`}
            />
            <Text className=" text-mainBlack">
              {linkBtn ? "Lier" : "Délier"}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
