import { View, Text, ScrollView } from "react-native";
import ProfilPresentation from "@/components/actualityFile/product_and_service_comp/profilPresentation";
import Publication from "@/components/actualityFile/product_and_service_comp/publication";
interface categorieProps {
  route: object;
}
const ProductScreen: any = ({ route }: categorieProps) => {
  const handleScroll = (event: any) => {
    const { contentOffset } = event.nativeEvent;
    console.log("Scroll Y Offset:", contentOffset.y);
  };

  return (
    <ScrollView
      onScroll={handleScroll}
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-white"
      contentContainerStyle={{ paddingBottom: 10 }}
    >
      {/* no className used, it provide but not used in the component cause of nativewind compiler  */}
      <Publication screen="product" />
      <Publication screen="product" />
      <Publication screen="product" />
    </ScrollView>
  );
};

export default ProductScreen;
