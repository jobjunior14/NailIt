import { View, ScrollView, Image, Text } from "react-native";
import { rango } from "@/constants/image";
import HomeMessageViewer from "../components/home/homeMessageViewer";

export default function TemporaryUpdates() {
  return (
    <View className="w-full">
      {/* separated line  */}
      <View className="w-full h-[0.5px] bg-mainGray opacity-30"></View>

      {/* //showing updates and showing if someone doing a live video or not  */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: "row",
          rowGap: 6,
          paddingVertical: 6,
          paddingHorizontal: 12,
        }}
      >
        {/* //showing updates / */}
        <View className=" aspect-square w-14 rounded-full border-2 border-textGray p-[2px] mr-4">
          <Image
            source={rango}
            resizeMode="cover"
            className="h-full w-full rounded-full"
          />
        </View>

        <View className=" aspect-square w-14 rounded-full border-2 border-textGray p-[2px] mr-4">
          <Image
            source={rango}
            resizeMode="cover"
            className="h-full w-full rounded-full"
          />
        </View>

        {/* // show live's videos  */}
        <View className=" aspect-square w-14 rounded-full p-[2px] mr-4">
          <Image
            source={rango}
            resizeMode="cover"
            className="h-full w-full rounded-full"
          />

          <View className="w-4 h-4 bg-mainRed absolute flex items-center justify-center rounded-full border border-white right-0 bottom-0">
            <Text className="text-[6px] font-interRegular text-white">
              Live
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* separated line  */}
      <View className="w-full h-[0.5px] bg-mainGray opacity-30"></View>

      {/* //home shower messages  */}
      <View className="w-full flex-col  px-3 mt-2">
        <HomeMessageViewer />
        <HomeMessageViewer />
        <HomeMessageViewer />
      </View>
    </View>
  );
}
