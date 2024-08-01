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
  TouchableNativeFeedback,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { man1, man2, man3 } from "@/constants/image";
import { video } from "@/constants/video";
import { Video } from "expo-av";
import ProgressBar from "./ProgressBar";
import {
  MapPin,
  InBoxSvg,
  SmileEmojiSvg,
  PaperPlanSvg,
} from "@/assets/svg/home/mySvg";
import ContentDetails from "./contentDetails";

SplashScreen.preventAutoHideAsync();

export default function DailyPlublication() {
  //state to show or hide details
  const [detailheight, setDetailHeight] = useState<number>(40);
  const [text, SetText] = useState<string>("");

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

  //
  const onlayoutDetailHeight = (event: any) => {
    const { height } = event.nativeEvent.layout;
    setDetailHeight(height);
  };

  const screenWidth: number = Dimensions.get("window").width;
  const screenHeight: number = Dimensions.get("window").height;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const player = useRef<any>(null);

  //handle the horizontal scroll
  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / screenWidth);
    setCurrentIndex(index);
  };

  //handle input text

  return (
    <View className="flex-1 flex-col mt-5  mx-2 mb-10">
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
                aspectRatio: 4 / 4.7,
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

        {/* map pin to see the place where the product or service are provide */}
        <View className=" absolute right-1 h-7 w-7 rounded-full bg-transparentBlack1 top-1 flex-row justify-center items-center">
          <MapPin className=" text-white w-5 h-5" />
        </View>

        {/* text Input  */}
        <View className="w-full flex-row justify-between mt-5">
          {/* text input to discuss the price  */}
          {/* a travailler  */}

          <View className="w-[85%] min-h-10 max-h-14 relative flex-row">
            <TextInput
              onChangeText={SetText}
              multiline
              keyboardType="default"
              className=" font-interRegular w-full h-full border border-mainGray rounded-lg pl-3"
              placeholder="Envoyer un message"
            ></TextInput>

            {/* emoji  */}
            <View className="absolute right-0 top-2 w-8 h-8 rounded-full">
              <TouchableNativeFeedback className="">
                <SmileEmojiSvg className=" text-mainBlack w-6 h-6 " />
              </TouchableNativeFeedback>
            </View>
          </View>

          {/* send a message or add to baskette depend on a current state the input text  */}
          <TouchableOpacity
            activeOpacity={0.8}
            className="h-10 w-10 bg-mainBlack rounded-full flex justify-center items-center"
          >
            {text === "" ? (
              <InBoxSvg className="w-5 h-5 text-white" />
            ) : (
              <PaperPlanSvg className="w-5 h-5 text-white" />
            )}
          </TouchableOpacity>
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
