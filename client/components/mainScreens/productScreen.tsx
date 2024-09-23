import { View, Text, ScrollView } from "react-native";
import Publication from "./actualityFile/product_and_service_comp/publication";
interface categorieProps {
  route: object;
}
const ProductScreen: any = ({ route }: categorieProps) => {
  const handleScroll = (event: any) => {
    const { contentOffset } = event.nativeEvent;
  };

  return (
    <ScrollView
      onScroll={handleScroll}
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-white"
      contentContainerStyle={{ paddingBottom: 50, width: "100%" }}
    >
      <View className="w-full mt-2">
        <View className="h-fit flex-1">
          <Publication screen="product" />
        </View>

        <View className="h-fit flex-1">
          <Publication screen="product" />
        </View>
        <View className="h-fit flex-1">
          <Publication screen="product" />
        </View>
        <View className="h-fit flex-1">
          <Publication screen="product" />
        </View>
        <View className="h-fit flex-1">
          <Publication screen="product" />
        </View>
        <View className="h-fit flex-1">
          <Publication screen="product" />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductScreen;
