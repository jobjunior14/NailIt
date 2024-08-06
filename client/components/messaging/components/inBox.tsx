import { SafeAreaView, View } from "react-native";
import InboxHeader from "./inBoxComponents/header";

export default function Inbox() {
  return (
    <SafeAreaView className=" px-3 w-full ">
      {/* header  */}
      <InboxHeader />
    </SafeAreaView>
  );
}
