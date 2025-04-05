import { View, ScrollView } from "react-native";
import ProfilPresentationDaily from "../../components/screens/home/daily/profilPresentation";
import DailyPlublication from "../../components/screens/home/daily/publication";
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
        paddingBottom: 40,
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
