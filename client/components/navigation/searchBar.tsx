import {
  Image,
  Platform,
  View,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { router } from "expo-router";

const logo = require("@/assets/images/adaptive-icon.png");
import {
  BellSvg,
  MySpaceSvg,
  SearchSvg,
  TimeSvg,
} from "@/assets/svg/home/mySvg";

export default function SearchBar() {
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

  return (
    <SafeAreaView className="">
      {/* heading of the application  */}
      <View className="flex-1 flex-col px-6 gap-y-[-3px]">
        {/* search bar, my space and notification view  */}
        <View className=" flex-row justify-between items-center ">
          {/* my space  */}
          <TouchableOpacity
            onPress={() => router.push("/mySpace/home")}
            className="relative w-[10%]"
          >
            <MySpaceSvg className=" text-mainGray w-[10vw] h-[35px] mt-5" />
            <View className="bg-mainRed left-6 top-5 z-50 rounded-full flex justify-center items-center absolute w-[20px] h-[20px]">
              <View className="flex justify-center  items-center relative">
                <Text className="text-center font-interRegular text-xs relative text-white ">
                  20
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* search bar  */}
          <View className="w-[75%] pl-3 mb-2 relative">
            <SearchSvg className=" text-mainGray w-[25px] h-[25px] mt-5 absolute right-3 z-50 opacity-70 top-[13px]" />
            <TextInput
              keyboardType="web-search"
              placeholder="faites une recherche"
              className="pl-3 h-[35] font-interRegular   outline-none  rounded-[10px] mt-7 text-[16px] bg-secondGray appearance-none "
            />
          </View>

          {/* notification  */}
          <View className="relative w-[10%]">
            <BellSvg className=" text-mainGray w-[10vw] h-[35px] mt-5" />
            <View className="bg-mainRed left-6 top-5 z-50 rounded-full flex justify-center items-center absolute w-[20px] h-[20px]">
              <View className="flex justify-center  items-center relative">
                <Text className="text-center text-xs font-interRegular relative text-white ">
                  12
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
