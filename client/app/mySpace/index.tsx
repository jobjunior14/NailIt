// import { Stack } from "expo-router";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableNativeFeedback,
} from "react-native";
import MySpace from "@/components/mySpace/mySpace";
import ProfilPresentationProfil from "@/components/profil/profilPresentationProfil";
import BanqueHistories from "@/components/mySpace/banqueHistories/banqueHistories";
import Inbox from "@/components/messaging/components/inBoxComponents/inBox";
import MessagingScreen from "@/components/messaging/messaging";
export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 40 }}>
      <MessagingScreen />
    </SafeAreaView>
  );
}
