import {
  Image,
  Platform,
  View,
  SafeAreaView,
  TextInput,
  Text,
} from "react-native";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

const logo = require("@/assets/images/adaptive-icon.png");
import {
  BellSvg,
  MySpaceSvg,
  SearchSvg,
  TimeSvg,
} from "@/assets/svg/home/mySvg";

export default function Tryy() {
  //Custom font, follow the link to see them
  const [loaded, error] = useFonts({
    "Inter-Black": require("@/assets/fonts/Inter-Black.ttf"),
    "Inter-Bold": require("@/assets/fonts/Inter-Bold.ttf"),
    "Inter-Regular": require("@/assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("@/assets/fonts/Inter-Medium.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView className=" flex-1 justify-center items-center">
      {/* heading of the application  */}
      <Text>Hello world </Text>
    </SafeAreaView>
  );
}
