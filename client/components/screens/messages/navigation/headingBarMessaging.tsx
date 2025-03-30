import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { Ellips, SearchSvg } from "@/assets/svg/home/mySvg";
import { ArrowLeftSvg } from "@/assets/svg/messaging/messagingSvg";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "@/constants/Colors";

export default function SearchBarMessaging() {
  const navigaton = useNavigation();

  return (
    <View className=" flex-row justify-between items-center  px-3 mb-3">
      <TouchableOpacity
        onPress={() => navigaton.goBack()}
        activeOpacity={0.7}
        className=" w-fit"
      >
        <ArrowLeftSvg width={20} height={20} color={Colors.light.mainGray} />
      </TouchableOpacity>

      <View className="w-[80%] flex ">
        <SearchSvg
          color={Colors.light.mainGray}
          width={25}
          height={25}
          style={{
            position: "absolute",
            zIndex: 50,
            opacity: 0.7,
            top: 3,
            right: 5,
          }}
        />
        <TextInput
          keyboardType="web-search"
          placeholder="faites une recherche"
          className="pl-3 pb-1 h-[30px]  font-interRegular w-full text-[14px]   outline-none  rounded-3xl bg-secondGray appearance-none "
        />
      </View>

      <TouchableOpacity activeOpacity={0.7} className=" w-fit  ">
        <Ellips color={Colors.light.mainBlack} width={20} height={20} />
      </TouchableOpacity>
    </View>
  );
}
