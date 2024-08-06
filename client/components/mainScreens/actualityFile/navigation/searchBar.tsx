import {
  Image,
  Platform,
  View,
  SafeAreaView,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";
import FontsLoader from "@/components/FontLoader/fontLoader";

import { BellSvg, MySpaceSvg, SearchSvg } from "@/assets/svg/home/mySvg";

export default function SearchBar() {
  return (
    <FontsLoader>
      <SafeAreaView className="">
        {/* heading of the application  */}
        <View className="flex-1 flex-col px-6 gap-y-[-3px]">
          {/* search bar, my space and notification view  */}
          <View className=" flex-row justify-between items-center ">
            {/* my space  */}
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => router.push("/mySpace")}
              className="relative w-[10%]"
            >
              <MySpaceSvg className=" text-mainGray w-[10vw] h-[35px] mt-5" />
              <View className="bg-mainRed left-6 top-5 z-50 rounded-full flex justify-center items-center absolute w-[20px] h-[20px]">
                <View className="flex justify-center  items-center relative">
                  <Text className="text-center font-interRegular text-[10px] relative text-white ">
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
                  <Text className="text-center text-[10px] font-interRegular relative text-white ">
                    12
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </FontsLoader>
  );
}
