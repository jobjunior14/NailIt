import { View, Text, ScrollView } from "react-native";
import ProfilPresentation from "@/components/actualityFile/product_and_service_comp/profilPresentation";
import Publication from "@/components/actualityFile/product_and_service_comp/publication";
interface categorieProps {
  route: object;
}
const ServiceScreen: any = ({ route }: categorieProps) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-white"
      contentContainerStyle={{ paddingBottom: 10 }}
    >
      <ProfilPresentation screen="service" />

      {/* no className used, it provide but not used in the component cause of nativewind compiler  */}
      <Publication screen="service" />
    </ScrollView>
  );
};

export default ServiceScreen;
