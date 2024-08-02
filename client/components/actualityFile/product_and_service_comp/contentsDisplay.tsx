import React, { useRef, useState, useEffect } from "react";
import {
  Image,
  View,
  Dimensions,
  ScrollView,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import FontsLoader from "@/components/FontLoader/fontLoader";

import { Video } from "expo-av";
import { man1, man2, man3 } from "@/constants/image";
import { video } from "@/constants/video";
import {
  CommentSvg,
  ValidateSvg,
  BookMarkSvg,
  InBoxSvg,
  ChatBubbleSvg,
} from "@/assets/svg/home/mySvg";

interface ContentDisplayProps {
  screen: "product" | "service";
}

export default function ContentDisplay({ screen }: ContentDisplayProps) {
  const content = [
    { type: "image", source: man1 },
    { type: "image", source: man2 },
    { type: "image", source: man3 },
    { type: "video", source: video },
  ];

  // getting the screen width
  const screenWidth: number = Dimensions.get("window").width;

  //the state to track the current displayed picture
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const player = useRef<any>(null);

  //function for updating the index tracker (the state to track the current displayed picture)
  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / screenWidth);
    setCurrentIndex(index);
  };

  return (
    <FontsLoader>
      <View className="flex-1 flex-col">
        {/* contents publicaiton's display  */}
        <View style={style.contenair}>
          {/*Display  Content  for product and service publicsation*/}
          {/* depending on a type of file, video or photo  */}
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
          {/* Counter */}
          {/* label to show the number of picture  */}
          <View style={style.labelContenairCounter}>
            <Text className=" text-[10px] text-white font-interRegular">
              {`${currentIndex + 1} / ${content.length}`}
            </Text>
          </View>
          {/* test btn for video player  */}
          {/* <Button
          title="fullScree"
          onPress={() => player?.current?._setFullscreen(true)}
        />
        <Button
          title="mute"
          onPress={() => player?.current?.setIsMutedAsync(false)}
        /> */}
        </View>

        {/* number of publication's views  */}
        <View className="flex-row w-full items-center pl-1 pt-[2px] gap-x-1">
          <View className="w-[3px] h-[3px] bg-mainBlack rounded-full"></View>
          <Text className=" text-[10px] font-interRegular">124</Text>
          <Text className=" text-[10px] font-interRegular text-textGray">
            Vues
          </Text>
        </View>

        {/* validete, comment add to basket (my space) */}
        <View className="w-full flex-row justify-between items-center mt-1">
          {/* comment, validate and bookMark a publication  */}
          <View className="flex-row justify-start items-center gap-x-6">
            {/* comments  */}
            <View className="flex-row gap-x-[2px] items-center">
              <CommentSvg className="w-6 h-6 text-mainBlack" />
              <Text className=" text-[14px] font-interRegular">10</Text>
            </View>

            {/* Validate  */}
            <View className="flex-row gap-x-[2px] items-center">
              <ValidateSvg className="w-6 h-6 text-mainBlack" />
              <Text className=" text-[14px] font-interRegular">244</Text>
            </View>

            {/* BookMark  */}
            <View className="flex-row gap-x-[2px] items-center">
              <BookMarkSvg className="w-6 h-6 text-mainBlack" />
            </View>
          </View>

          {/* Add to basket (my space)  */}
          {screen === "product" && (
            <TouchableOpacity
              activeOpacity={0.8}
              className="relative flex-row w-fit bg-mainBlack rounded-lg overflow-hidden gap-x-1"
            >
              {/* add in basket btn  */}
              <View className="flex-row gap-x-[2px] items-center px-2 py-[6px]">
                <InBoxSvg className="w-6 h-6 text-white" />
                <Text className=" text-[14px] text-white font-interRegular">
                  Ajouter
                </Text>
              </View>

              <View className=" bg-mainRed flex-row items-center text-center px-3">
                <Text className="text-[14px] text-white">-30</Text>
              </View>
            </TouchableOpacity>
          )}

          {/* contact btn if it's a service publication  */}
          {screen === "service" && (
            <TouchableOpacity
              activeOpacity={0.8}
              className=" flex-row bg-mainBlack rounded-lg gap-x-1"
            >
              {/* add in basket btn  */}
              <View className="flex-row gap-x-[4px] items-center px-3 py-[6px]">
                <ChatBubbleSvg className="w-6 h-6 text-mainRed" />
                <Text className=" text-[14px] text-white font-interRegular mr-1">
                  Contacter
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </FontsLoader>
  );
}

// if u try using the same style in nativewind it'll not work
//so don't try to do the same thing as i do
const style = StyleSheet.create({
  contenair: {
    flex: 1,
    position: "relative",
    borderRadius: 10,
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
    borderRadius: 10,
  },
  video: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  labelContenairCounter: {
    position: "absolute",
    bottom: 10,
    left: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 4,
    borderRadius: 5,
  },
});
