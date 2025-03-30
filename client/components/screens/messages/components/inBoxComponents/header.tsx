import {
  View,
  Image,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import { rango } from "@/constants/image";
import {
  ArrowLeftSvg,
  ArrowUpDownSvg,
  PhoneSvg,
} from "@/assets/svg/messaging/messagingSvg";
import { Ellips } from "@/assets/svg/home/mySvg";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "@/constants/Colors";
export default function InboxHeader() {
  const navigation = useNavigation();

  return (
    <View className="w-full h-fit flex-row justify-between items-center">
      {/* picture and status  */}
      <View className="flex-row items-center w-[70%] ">
        {/* // arrow left  */}
        <TouchableNativeFeedback
          onPress={() => navigation.goBack()}
          background={TouchableNativeFeedback.Ripple(
            "rgba(0,0,0,0.1)",
            true,
            20
          )}
        >
          <ArrowLeftSvg
            height={20}
            width={20}
            color={Colors.light.mainBlack}
            style={{ marginInline: 12 }}
          />
        </TouchableNativeFeedback>
        {/* image  */}
        <View className=" aspect-square">
          <Image source={rango} className="w-11 h-11 rounded-full" />
        </View>

        {/* name and status  */}
        <View className="flex-col justify-between py-[2px] ml-2 h-11">
          <Text className=" font-interBold">Durango Delray</Text>
          <Text className="text-[10px] font-interRegular">En ligne</Text>
        </View>
      </View>

      {/* transaction histories, call, more option  */}
      <View className="w-[30%] flex-row justify-between">
        <TouchableOpacity activeOpacity={0.5}>
          <ArrowUpDownSvg
            height={24}
            width={24}
            color={Colors.light.mainBlack}
            style={{ marginRight: 16 }}
          />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5}>
          <PhoneSvg
            width={24}
            color={Colors.light.mainBlack}
            style={{ marginRight: 16 }}
          />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5}>
          <Ellips
            height={24}
            width={24}
            color={Colors.light.mainGray}
            style={{ marginRight: 16 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
