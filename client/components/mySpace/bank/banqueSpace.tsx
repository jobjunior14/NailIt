import { View } from "react-native";
import MoneyInformation from "./moneyInformations";
export default function BanqueSpace() {
  return (
    <View
      style={{
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.6,
        shadowRadius: 8,
        elevation: 4,
      }}
      className="w-full h-fit  bg-banqueSpaceBg rounded-lg "
    >
      <MoneyInformation />
    </View>
  );
}
