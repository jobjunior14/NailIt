import { View, Text, ScrollView } from "react-native";
import ProfilPresentation from "@/components/actualityFile/product_and_service_comp/profilPresentation";
import ProfilPresentationDaily from "@/components/actualityFile/daily_comp/profilPresentationDaily";
import DailyPlublication from "@/components/actualityFile/daily_comp/dailyPublication";
interface categorieProps {
  route: object;
}
const DailyScreen: any = ({ route }: categorieProps) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-white"
      contentContainerStyle={{ paddingBottom: 10 }}
    >
      <ProfilPresentationDaily />

      <DailyPlublication />
    </ScrollView>
  );
};

export default DailyScreen;
