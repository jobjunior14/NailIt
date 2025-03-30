import React from "react";
import { View } from "react-native";
import CustomMessageFilter from "./navigation/customNavBar";
import FontsLoader from "../fontLoader/fontLoader";
import SearchBarMessaging from "./navigation/headingBarMessaging";
import TemporaryUpdates from "./temporaryUpdates/temporaryUpdates";
import { MotiView } from "moti";
import HomeMessageViewer from "./components/home/homeMessageViewer";

const AllMessages: React.FC = () => {
  return (
    <FontsLoader>
      <MotiView
        from={{ transform: [{ translateX: 100 }] }}
        animate={{ transform: [{ translateX: 0 }] }}
        transition={{
          loop: false,
          type: "timing",
          duration: 400,
        }}
        className="bg-white"
        style={{ flex: 1, flexDirection: "column" }}
      >
        <SearchBarMessaging />
        <CustomMessageFilter />
        <TemporaryUpdates />

        {/* //home shower messages  */}
        <View className="w-full flex-col  px-3 mt-2">
          <HomeMessageViewer />
          <HomeMessageViewer />
          <HomeMessageViewer />
        </View>
      </MotiView>
    </FontsLoader>
  );
};

export default AllMessages;
