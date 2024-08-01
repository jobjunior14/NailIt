// import { Stack } from "expo-router";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import BanqueInformation from "@/components/mySpace/banque/banqueInformation";
import BanqueSpace from "@/components/mySpace/banque/banqueSpace";
export default function Home() {
  return (
    <SafeAreaView className="flex-1 w-full pt-10 px-3 ">
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <BanqueSpace />
      </ScrollView>
    </SafeAreaView>
  );
}
