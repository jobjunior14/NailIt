import { View, Text } from "react-native";
import ProfilPresentation from "@/components/actualityFile/profilPresentation";
interface categorieProps {
  route: object;
}
const ServiceScreen: any = ({ route }: categorieProps) => {
  return (
    <View className="flex-1 bg-white">
      <ProfilPresentation />
    </View>
  );
};

export default ServiceScreen;
