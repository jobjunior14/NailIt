import { useState, useEffect } from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Ellips, MapPin } from "@/assets/svg/home/mySvg";
import ContentDisplay from "./contentsDisplay";
SplashScreen.preventAutoHideAsync();

interface PublicationProps {
  screen: "service" | "product";
}
export default function Publication({ screen }: PublicationProps) {
  //diplay or  details
  const [seeMore, setSeeMore] = useState<boolean>(false);
  //font loader
  const [loaded, error] = useFonts({
    "Inter-Black": require("@/assets/fonts/Inter-Black.ttf"),
    "Inter-Bold": require("@/assets/fonts/Inter-Bold.ttf"),
    "Inter-Regular": require("@/assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("@/assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("@/assets/fonts/Inter-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded && !error) {
    return null;
  }

  //handle see more btn
  function handleSeeMore(): any {
    setSeeMore((prev) => !prev);
  }

  return (
    <View className=" flex flex-col justify-center mt-8 mx-2 ">
      {/* price and benefint and more option  */}
      <View className=" flex-row justify-between mb-2 items-center">
        {/* price and benefint */}
        <View className=" flex-row items-center  w-[90%]">
          <View className="flex-row items-end pb-0 gap-x-2">
            <Text className=" font-bold text-mainBlack text-xl">9.99 $</Text>
            <Text className=" font-light mb-[3px] line-through">15.9$</Text>
          </View>

          <Text className=" font-interRegular text-xs pl-4 text-ellipsis">
            {" "}
            + livraison gratuite
          </Text>
        </View>

        {/* more option  */}
        <TouchableNativeFeedback className=" rounded-full">
          <Ellips className="w-5 h-5 text-mainBlack rounded-full" />
        </TouchableNativeFeedback>
      </View>

      {/* title and puplication detail  */}
      <View className=" flex-row justify-between items-center w-full">
        <View className="flex-row justify-between w-full ">
          <View className="w-[90%] text-clip">
            <Text className=" font-InterSemiBold text-base leading-5">
              Découvrez Nos Pinceaux de Maquillage Professionnels ! 🌟
            </Text>

            {/* see more btn  */}
            {!seeMore && (
              <TouchableOpacity onPress={handleSeeMore}>
                <Text className=" text-mainGray font-interRegular">
                  Voir plus
                </Text>
              </TouchableOpacity>
            )}

            {/* details  */}
            <View
              className={`w-full transition-all ${
                seeMore ? "min-h-fit mt-1" : "h-0"
              }`}
            >
              <Text
                className={`w-full transition-all font-interRegular leading-5`}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit, voluptatem eaque tempora quod molestiae
                repellendus libero rem at ratione fuga mollitia excepturi,
                facilis ea saepe aliquam porro quia unde debitis.
              </Text>
            </View>

            {/* see less btn  */}
            {seeMore && (
              <TouchableOpacity onPress={handleSeeMore}>
                <Text className=" text-mainGray font-interRegular">
                  Voir moins
                </Text>
              </TouchableOpacity>
            )}
          </View>

          <TouchableOpacity className=" w-[10%] justify-start pt-[4px] flex items-end">
            <MapPin className="w-5 h-5 text-mainBlack" />
          </TouchableOpacity>
        </View>
      </View>

      {/* image or video content  */}
      <ContentDisplay screen={screen} />
    </View>
  );
}
