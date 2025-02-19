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
import { man1, man2, man3 } from "@/constants/image";
import { video } from "@/constants/video";
import { useVideoPlayer, VideoView } from "expo-video";
import ProgressBar from "./progressBar";

import {
  MapPin,
  InBoxSvg,
  SmileEmojiSvg,
  PaperPlanSvg,
} from "@/assets/svg/home/mySvg";
import FontsLoader from "@/components/FontLoader/fontLoader";
import ContentDetails from "./contentDetails";
import InputMessage from "./inputMessages";
import { Colors } from "@/constants/Colors";

export default function DailyPlublication() {
  // State to show or hide details
  const [detailHeight, setDetailHeight] = useState<number>(40);
  const [text, setText] = useState<string>("");

  const content = [
    { type: "image", source: man1 },
    { type: "image", source: man2 },
    { type: "image", source: man3 },
    { type: "video", source: video },
  ];

  const screenWidth = Dimensions.get("window").width;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const player = useRef<any>(null);

  const onLayoutDetailHeight = (event: any) => {
    const { height } = event.nativeEvent.layout;
    setDetailHeight(height);
  };

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / screenWidth);
    setCurrentIndex(index);
  };

  return (
    <FontsLoader>
      <View className="flex-1 flex-col mt-5  mx-2 mb-10">
        <ProgressBar count={content.length} currentIndex={currentIndex} />

        <View style={styles.container}>
          <ScrollView
            onLayout={onLayoutDetailHeight}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollView}
            snapToInterval={screenWidth}
            snapToAlignment="center"
            onScroll={handleScroll}
            scrollEventThrottle={16}
          >
            {content.map((item, index) => (
              <View
                key={index}
                style={{
                  width: screenWidth,
                  aspectRatio: 4 / 4.7,
                  backgroundColor: "black", // Set your background color
                }}
              >
                {item.type === "image" ? (
                  <Image source={item.source} style={styles.image} />
                ) : (
                  <VideoView
                    ref={player}
                    player={item.source}
                    style={styles.video}
                    allowsPictureInPicture
                  />
                )}
                <ContentDetails maxHeight={detailHeight} />
              </View>
            ))}
          </ScrollView>

          <View className="absolute right-1 h-7 w-7 rounded-full bg-transparentBlack1 top-1 flex-row justify-center items-center">
            <MapPin
              stroke={Colors.light.white}
              color={"none"}
              width={20}
              height={20}
            />
          </View>

          {/* //input message  */}
          <InputMessage nameComponent="daily" />
        </View>
      </View>
    </FontsLoader>
  );
}

const styles = StyleSheet.create({
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
