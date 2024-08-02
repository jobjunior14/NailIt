import { View, ScrollView } from "react-native";
import FontsLoader from "../FontLoader/fontLoader";
import ProfilPresentationProfil from "./profilPresentationProfil";
export default function Profil() {
  return (
    <FontsLoader>
      <ScrollView>
        <ProfilPresentationProfil />
      </ScrollView>
    </FontsLoader>
  );
}
