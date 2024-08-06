import { View, Text } from "react-native";
import FontsLoader from "@/components/FontLoader/fontLoader";
import HistoriesDetails from "./historiesDetailCom";
export default function BanqueHistoriesDetails() {
  return (
    <View className="w-full flex-col gap-y-4 mt-0">
      <View className="w-full flex-row justify-center items-center">
        <Text className="font-interRegular text-[12px]">19/12/2024</Text>
      </View>

      {/* separated line  */}

      <View className="w-full flex-col">
        <View className="w-[50%] h-[2px] rounded-full bg-mainGray opacity-30 mb-2"></View>
        <HistoriesDetails />
        <HistoriesDetails />
        <HistoriesDetails />
        <HistoriesDetails />
        <HistoriesDetails />
        <HistoriesDetails />
      </View>
    </View>
  );
}
