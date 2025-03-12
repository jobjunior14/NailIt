import { View, TextInput, Text, TouchableOpacity } from "react-native";
import FontsLoader from "@/components/FontLoader/fontLoader";
import { useNavigation } from "@react-navigation/native";
import { BellSvg, MySpaceSvg, SearchSvg } from "@/assets/svg/home/mySvg";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import useHideNavigations from "@/hooks/useHideNavigations";

type RootDrawerParamList = {
  MySpace: { categorie: string | undefined };
};

export default function Headers() {
  const currentRoute = useHideNavigations();

  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>();

  return (
    <FontsLoader>
      {/* heading of the application  */}
      {/* search bar, my space and notification view  */}
      <View
        className={`${
          currentRoute ? "hidden" : ""
        } flex-row justify-between items-center px-6 bg-white flex h-auto `}
      >
        {/* my space  */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() =>
            navigation.navigate("MySpace", { categorie: undefined })
          }
          className="relative w-[10%]"
        >
          <MySpaceSvg width={30} height={30} color="#666" />
          <View className="bg-mainRed left-5 -top-1 z-50 rounded-full flex justify-center items-center absolute w-[20px] h-[20px]">
            <View className="flex justify-center  items-center relative">
              <Text className="text-center font-interRegular text-[10px] relative text-white ">
                20
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* search bar  */}
        <View className="w-[75%] h-8 relative pb-0">
          <View className="absolute right-3 top-[3px] z-50 opacity-70">
            <SearchSvg width={25} height={25} color="#888" />
          </View>

          <TextInput
            placeholder="Chercher n'importe quoi"
            className="pl-3 w-full pb-0 pt-0 h-full font-interRegular outline-none rounded-[10px] text-[14px] bg-secondGray appearance-none "
          />
        </View>

        {/* notification  */}
        <View className="relative w-[10%]">
          <BellSvg width={30} height={30} color="#666" />
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
