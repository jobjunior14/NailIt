import { View, Text, ScrollView, Dimensions } from "react-native";
import ProfilPresentation from "@/components/actualityFile/product_and_service_comp/profilPresentation";
import ProfilPresentationDaily from "@/components/actualityFile/daily_comp/profilPresentationDaily";
import DailyPlublication from "@/components/actualityFile/daily_comp/dailyPublication";
import { useState } from "react";
interface categorieProps {
  route: object;
}
const DailyScreen: any = ({ route }: categorieProps) => {
  // const screenHeight: number = Dimensions.get("window").height;
  // const [dailyHeight, setDailyHeight] = useState<number>(screenHeight);

  // const handleVerticalScroll = (event: any) => {
  //   const { height } = event.nativeEvent.layout;
  //   setDailyHeight(height);
  // };

  return (
    <ScrollView
      // onLayout={handleVerticalScroll}
      showsVerticalScrollIndicator={false}
      // pagingEnabled
      // snapToInterval={dailyHeight}
      className="flex-1 bg-white"
      contentContainerStyle={{
        paddingBottom: 10,
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <View className="">
        <View className="flex-1">
          <ProfilPresentationDaily />
          <DailyPlublication />
        </View>

        <View className="flex-1">
          <ProfilPresentationDaily />
          <DailyPlublication />
        </View>

        <View className="flex-1">
          <ProfilPresentationDaily />
          <DailyPlublication />
        </View>
      </View>
    </ScrollView>
  );
};

export default DailyScreen;
