import { useState, useEffect, useRef } from "react";
import { Image, View, Dimensions, StyleSheet, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { man1, man2, man3 } from "@/constants/image";
import { video } from "@/constants/video";
import { Video } from "expo-av";
import ProgressBar from "./ProgressBar";

SplashScreen.preventAutoHideAsync();

export default function DailyPlucation() {
  const content = [
    { type: "image", source: man1 },
    { type: "image", source: man2 },
    { type: "image", source: man2 },
    { type: "image", source: man2 },
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
    <View className="flex-1 flex-col mt-5">
      <ProgressBar count={content.length} currentIndex={currentIndex} />

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
                aspectRatio: 3 / 4,
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
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",

    overflow: "hidden",
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
