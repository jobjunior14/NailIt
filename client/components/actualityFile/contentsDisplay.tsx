import React, { useState } from "react";
import { Image, View, Dimensions, ScrollView, Text } from "react-native";
import { Video } from "expo-av";
import { man1, man2, man3 } from "@/constants/image";
import { video } from "@/constants/video";

export default function ContentDisplay() {
  const content = [
    { type: "image", source: man1 },
    { type: "image", source: man2 },
    { type: "image", source: man3 },
    { type: "video", source: video },
  ];

  const screenWidth: number = Dimensions.get("window").width;
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / screenWidth);
    setCurrentIndex(index);
  };

  return (
    <View
      style={{
        flex: 1,
        position: "relative",
        borderRadius: 15,
        overflow: "hidden",
      }}
    >
      {/* Content display */}
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: "row",
          justifyContent: "center",
        }}
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
              <Image
                source={item.source}
                style={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "cover",
                  borderRadius: 15,
                }}
              />
            ) : (
              <Video
                source={item.source}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 15,
                }}
                useNativeControls
                resizeMode="contain"
                isLooping
              />
            )}
          </View>
        ))}
      </ScrollView>

      {/* Counter */}
      <View
        style={{
          position: "absolute",
          bottom: 10,
          left: "50%",
          // transform: [{ translateX: -50% }], // Center horizontally
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: 5,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "white", fontSize: 10 }}>
          {`${currentIndex + 1} / ${content.length}`}
        </Text>
      </View>
    </View>
  );
}
