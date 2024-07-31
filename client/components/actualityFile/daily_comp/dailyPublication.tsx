import { useState, useEffect, useRef } from "react";
import {
  Image,
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { man1, man2, man3 } from "@/constants/image";
import { video } from "@/constants/video";
import { Video } from "expo-av";
import ProgressBar from "./ProgressBar";
import { ArrowUp, MapPin } from "@/assets/svg/home/mySvg";
import ContentDetails from "./contentDetails";
SplashScreen.preventAutoHideAsync();

export default function DailyPlublication() {
  //state to show or hide details
  const [detailheight, setDetailHeight] = useState<number>(40);

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

  //handle the show or hide details text
  const handleShowDetails = (): any => {
    setShowDetails((prev) => !prev);
  };

  //
  const onlayoutDetailHeight = (event: any) => {
    const { height } = event.nativeEvent.layout;
    setDetailHeight(height);
  };

  const screenWidth: number = Dimensions.get("window").width;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const player = useRef<any>(null);

  //handle the horizontal scroll
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
          onLayout={onlayoutDetailHeight}
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

              <ContentDetails maxHeight={detailheight} />
            </View>
          ))}
        </ScrollView>

        {/* map pin  */}
        <View className=" absolute right-1 h-7 w-7 rounded-full bg-transparentBlack1 top-1 flex-row justify-center items-center">
          <MapPin className=" text-white w-5 h-5" />
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
