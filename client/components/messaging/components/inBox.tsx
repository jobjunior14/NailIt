import { SafeAreaView, View } from "react-native";
import InboxHeader from "./inBoxComponents/header";
import Message from "./inBoxComponents/message";
import PriceDiscussion from "./inBoxComponents/priceDiscussion";
import FontsLoader from "@/components/FontLoader/fontLoader";
export default function Inbox() {
  return (
    <FontsLoader>
      <SafeAreaView className=" px-3 w-full ">
        {/* header  */}
        <InboxHeader />

        <PriceDiscussion />
      </SafeAreaView>
    </FontsLoader>
  );
}
