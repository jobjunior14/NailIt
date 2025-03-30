import { View, Text, TouchableNativeFeedback } from "react-native";
import { AdjustmentHorizontalSvg } from "@/assets/svg/mySpace/mySpaceSvg";
import FontsLoader from "@/components/fontLoader/fontLoader";

export default function BasketHeader() {
  return (
    <FontsLoader>
      <View className=" w-full flex-col mt-6">
        <View className="w-full flex-row justify-between items-center px-3 py-2">
          <Text className=" font-InterSemiBold text-[16px]">Panier</Text>

          <View className=" flex-row justify-center items-center ">
            <Text className=" font-interRegular text-[12px] text-textGray">
              Trier par
            </Text>
            <TouchableNativeFeedback>
              <AdjustmentHorizontalSvg className=" w-5 h-5 text-mainGray ml-1" />
            </TouchableNativeFeedback>
          </View>
        </View>

        {/* separeted line */}
        <View
          style={{ opacity: 0.5 }}
          className="w-full h-[0.5px] bg-mainGray mt-1"
        ></View>
      </View>
    </FontsLoader>
  );
}
