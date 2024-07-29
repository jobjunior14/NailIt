import { View, Text, ScrollView } from "react-native";
import ProfilPresentation from "@/components/actualityFile/profilPresentation";
import Publication from "@/components/actualityFile/publication";
interface categorieProps {
  route: object;
}
const ProductScreen: any = ({ route }: categorieProps) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-white"
      contentContainerStyle={{ paddingBottom: 10 }}
    >
      <ProfilPresentation custom="flex-row justify-between items-center w-full mx-2 mt-4" />

      {/* no className used  */}
      <Publication className="flex-row justify-between items-center w-full mx-2 mt-4" />
    </ScrollView>
  );
};

export default ProductScreen;
