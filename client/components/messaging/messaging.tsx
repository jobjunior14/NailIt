import React from "react";
import { SafeAreaView, View } from "react-native";
import CustomNavBarMessaging from "./navigation/customNavBar";
import FontsLoader from "../FontLoader/fontLoader";
import SearchBarMessaging from "./navigation/headingBarMessaging";
import TemporaryUpdates from "./temporaryUpdates/temporaryUpdates";
const MessagingScreen: React.FC = () => {
  return (
    <FontsLoader>
      <SafeAreaView style={{ flex: 1, flexDirection: "column" }}>
        <SearchBarMessaging />
        <CustomNavBarMessaging />
        <TemporaryUpdates />
      </SafeAreaView>
    </FontsLoader>
  );
};

export default MessagingScreen;
