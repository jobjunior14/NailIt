import FontsLoader from "@/components/FontLoader/fontLoader";
import { View, Text } from "react-native";
export default function HistoriesDetails() {
  return (
    <View className="flex-col w-full mb-2">
      <View className="flex-row w-full">
        <View className="w-[30%] ">
          <Text className=" font-interRegular text-mainRed">223.4$</Text>
        </View>

        <View className="w-[70%] flex-col">
          <View className=" flex-row">
            <Text className=" font-interRegular text-textGray text-[12px]">
              Service:
            </Text>

            <Text className="text-mainBlack font-InterSemiBold text-[12px] ml-1">
              Decoration interne
            </Text>
          </View>

          <View className="flex-row mt-1">
            <Text className="font-interRegular text-textGray text-[12px]">
              RDC Nord-Kivu Goma
            </Text>

            <View className="flex-row items-center ml-2">
              <View className="w-1 h-1 bg-mainBlack  rounded-full"></View>

              <Text className="font-interRegular text-textGray text-[12px] ml-1">
                Job Junior
              </Text>
            </View>
          </View>
          {/* separated line */}
          <View className="w-[80%] h-[0.5px] bg-mainGray opacity-40 mt-2"></View>
        </View>
      </View>
    </View>
  );
}
