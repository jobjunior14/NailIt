import { SafeAreaView, ScrollView, View } from "react-native";
import InboxHeader from "./inBoxComponents/header";
import Message from "./inBoxComponents/message";
import PriceDiscussion from "./inBoxComponents/priceDiscussion";
import FontsLoader from "@/components/FontLoader/fontLoader";
import InputMessage from "./inputComponent";

export default function Inbox() {
  return (
    <FontsLoader>
      <SafeAreaView className=" px-3 w-full flex-1 pb-4">
        {/* header  */}
        <InboxHeader />

        {/* //all messages  */}

        <ScrollView
          bounces={true}
          stickyHeaderHiddenOnScroll={true}
          className="w-full mt-2 "
        >
          <Message from_me={false} priceDiscussion={false} />
          <Message from_me={true} priceDiscussion={false} />
          <PriceDiscussion />
          <Message from_me={true} priceDiscussion={false} />
          <Message from_me={false} priceDiscussion={false} />
          <Message from_me={true} priceDiscussion={false} />
          <Message from_me={false} priceDiscussion={false} />
          <PriceDiscussion />
        </ScrollView>

        <InputMessage nameComponent="inBox" />
      </SafeAreaView>
    </FontsLoader>
  );
}
