import { View } from "react-native";
import BanqueInformation from "./banqueInformation";
export default function BanqueSpace() {
  return (
    <View
      style={{
        // shadowColor: "#fff",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.6,
        shadowRadius: 8,
        elevation: 4,
      }}
      className="w-full h-fit  bg-banqueSpaceBg rounded-lg"
    >
      <BanqueInformation />
    </View>
  );
}
