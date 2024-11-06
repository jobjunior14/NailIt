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
import { useNavigationState } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { BellSvg, MySpaceSvg, SearchSvg } from "@/assets/svg/home/mySvg";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import useHideNavigations from "@/hooks/useHideNavigations";

type RootDrawerParamList = {
  MySpaceStack: { category: string | undefined };
};

export default function SearchBar() {
  const currentRoute = useHideNavigations();

  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>();

  return (
    <FontsLoader>
      {/* heading of the application  */}
      {/* search bar, my space and notification view  */}
      <View
        className={`${
          currentRoute ? "hidden" : ""
        } flex-row justify-between items-center px-6 bg-white`}
      >
        {/* my space  */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() =>
            navigation.navigate("MySpaceStack", { category: undefined })
          }
          className="relative w-[10%]"
        >
          <MySpaceSvg className=" text-mainGray w-[30px] h-[30px]" />
          <View className="bg-mainRed left-5 -top-1 z-50 rounded-full flex justify-center items-center absolute w-[20px] h-[20px]">
            <View className="flex justify-center  items-center relative">
              <Text className="text-center font-interRegular text-[10px] relative text-white ">
                20
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* search bar  */}
        <View className="w-[75%] pl-3 relative">
          <SearchSvg className=" text-mainGray w-[25px] h-[25px] absolute right-3 z-50 opacity-70 top-[3px]" />
          <TextInput
            keyboardType="web-search"
            placeholder="faites une recherche"
            className="pl-3 h-[30px] font-interRegular   outline-none  rounded-[10px] text-[14px] bg-secondGray appearance-none "
          />
        </View>

        {/* notification  */}
        <View className="relative w-[10%]">
          <BellSvg className=" text-mainGray w-[30px] h-[30px] " />
          <View className="bg-mainRed left-5 -top-1 z-50 rounded-full flex justify-center items-center absolute w-[20px] h-[20px]">
            <View className="flex justify-center  items-center relative">
              <Text className="text-center text-[10px] font-interRegular relative text-white ">
                12
              </Text>
            </View>
          </View>
        </View>
      </View>
    </FontsLoader>
  );
}
