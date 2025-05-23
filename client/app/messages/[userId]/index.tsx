import { SafeAreaView, ScrollView, View, Text } from "react-native";
import InboxHeader from "./header";
import Message from "./message";
import PriceDiscussion from "./priceDiscussion";
import FontsLoader from "@/components/fontLoader/fontLoader";
import InputMessage from "./inputComponent";

export default function Inbox() {
  return (
    <FontsLoader>
      <SafeAreaView className="  w-full  flex-1 pb-4 bg-white relative">
        {/* header  */}
        <InboxHeader />

        {/* //all messages  */}
        <ScrollView
          bounces={true}
          stickyHeaderHiddenOnScroll={true}
          className="w-full mt-4 mb-24 px-3"
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

        <View className="absolute bottom-4 px-3 bg-white">
          <InputMessage componentName="inBox" />
        </View>
      </SafeAreaView>
    </FontsLoader>
  );
}
