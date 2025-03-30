import { View } from "react-native";
import BasketHeader from "./header";
import ProductInBasket from "./productInBaskets";
export default function Basket() {
  return (
    <View className="flex-1">
      <BasketHeader />

      <View className="flex-col justify-center items-center mb-5">
        <ProductInBasket />
      </View>

      <View className="flex-col justify-center items-center">
        <ProductInBasket />
      </View>
    </View>
  );
}
