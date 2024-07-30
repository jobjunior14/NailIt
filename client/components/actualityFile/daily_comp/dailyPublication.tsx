import { useState, useEffect, useRef } from "react";
import {
  Image,
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { man1, man2, man3 } from "@/constants/image";
import { video } from "@/constants/video";
import { Video } from "expo-av";
import ProgressBar from "./ProgressBar";

SplashScreen.preventAutoHideAsync();

export default function DailyPlublication() {
  const content = [
    { type: "image", source: man1 },
    { type: "image", source: man2 },
    { type: "image", source: man3 },
    { type: "video", source: video },
  ];

  const [loaded, error] = useFonts({
    "Inter-Black": require("@/assets/fonts/Inter-Black.ttf"),
    "Inter-Bold": require("@/assets/fonts/Inter-Bold.ttf"),
    "Inter-Regular": require("@/assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("@/assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("@/assets/fonts/Inter-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded && !error) {
    return null;
  }

  const screenWidth: number = Dimensions.get("window").width;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const player = useRef<any>(null);

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / screenWidth);
    setCurrentIndex(index);
  };

  return (
    <View className="flex-1 flex-col mt-5  mx-2 h-fit">
      {/* ProgressBar to show the number of items */}
      <ProgressBar count={content.length} currentIndex={currentIndex} />

      {/* the publication contents  */}
      <View style={style.container}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={style.scrollView}
          snapToInterval={screenWidth}
          snapToAlignment="center"
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {content.map((item, index) => (
            <View
              className="bg-mainBlack"
              key={index}
              style={{
                width: screenWidth,
                aspectRatio: 4 / 4,
              }}
            >
              {item.type === "image" ? (
                <Image source={item.source} style={style.image} />
              ) : (
                <Video
                  ref={player}
                  source={item.source}
                  style={style.video}
                  useNativeControls
                  resizeMode="contain"
                  isLooping
                />
              )}
            </View>
          ))}
        </ScrollView>

        {/* detail about the content  */}
        <View className="flex-row w-full justify-between absolute bottom-0">
          {/* This View is for the background color with opacity */}
          <View
            className="w-full h-full bg-mainBlack absolute"
            style={{ opacity: 0.8 }}
          ></View>
          <View className="w-full h-full px-2">
            <ScrollView className="w-full h-full">
              {/* price and */}
              <View className="flex-row items-center w-[90%]">
                <View className="flex-row items-end pb-0 gap-x-2">
                  <Text className="font-bold text-white text-xl">9.99 $</Text>
                  <Text className="font-light mb-[3px] text-white line-through">
                    15.9$
                  </Text>
                </View>

                <Text className="font-interRegular text-white text-xs pl-4 text-ellipsis">
                  + livraison gratuite
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",

    overflow: "hidden",
    marginTop: 5,
  },
  scrollView: {
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  video: {
    width: "100%",
    height: "100%",
  },
});
