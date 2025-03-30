import { View, Text, ScrollView } from "react-native";
import Publication from "../../components/screens/home/common_components/publication";

interface categorieProps {
  route: object;
}
const ServiceScreen: any = ({ route }: categorieProps) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-white"
      contentContainerStyle={{ paddingBottom: 50 }}
    >
      <Publication screen="service" />
      <Publication screen="service" />
      <Publication screen="service" />
    </ScrollView>
  );
};

export default ServiceScreen;
