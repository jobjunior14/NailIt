import { View, ScrollView } from "react-native";
import FontsLoader from "../FontLoader/fontLoader";
import ProfilPresentationProfil from "./profilPresentationProfil";
export default function Profil() {
  return (
    <FontsLoader>
      <View className="flex-1">
        <ProfilPresentationProfil />
      </View>
    </FontsLoader>
  );
}
