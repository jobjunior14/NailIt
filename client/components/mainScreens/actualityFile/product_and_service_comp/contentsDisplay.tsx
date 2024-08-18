import React, { useRef, useState } from "react";
import {
  Image,
  View,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
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
import { useNavigation } from "@react-navigation/native";

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

  const screenWidth: number = Dimensions.get("window").width;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const player = useRef<any>(null);

  const navigation = useNavigation();

  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / screenWidth);
    setCurrentIndex(index);
  };

  return (
    <FontsLoader>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <ScrollView
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
                  aspectRatio: 3 / 4,
                  backgroundColor: "black",
                }}
              >
                {item.type === "image" ? (
                  <Image source={item.source} style={styles.image} />
                ) : (
                  <Video
                    ref={player}
                    source={item.source}
                    style={styles.video}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                  />
                )}
              </View>
            ))}
          </ScrollView>
          <View style={styles.counterContainer}>
            <Text style={styles.counterText}>
              {`${currentIndex + 1} / ${content.length}`}
            </Text>
          </View>
        </View>
        <View style={styles.viewsContainer}>
          <View style={styles.dot} />
          <Text style={styles.viewsText}>124</Text>
          <Text style={styles.viewsLabel}>Vues</Text>
        </View>
        <View style={styles.actionsContainer}>
          <View style={styles.actionsLeft}>
            <View style={styles.actionItem}>
              <CommentSvg style={styles.icon} />
              <Text style={styles.actionText}>10</Text>
            </View>
            <View style={styles.actionItem}>
              <ValidateSvg style={styles.icon} />
              <Text style={styles.actionText}>244</Text>
            </View>
            <View style={styles.actionItem}>
              <BookMarkSvg style={styles.icon} />
            </View>
          </View>
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
          {screen === "service" && (
            <TouchableOpacity
              activeOpacity={0.8}
              className=" flex-row bg-mainBlack rounded-lg gap-x-1"
              onPress={() => navigation.navigate("Auth")}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  contentContainer: {
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
  counterContainer: {
    position: "absolute",
    bottom: 10,
    left: "46%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 4,
    borderRadius: 5,
  },
  counterText: {
    color: "white",
    fontSize: 10,
    fontFamily: "Inter-Regular",
  },
  viewsContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 4,
    paddingTop: 2,
    gap: 1,
  },
  dot: {
    width: 3,
    height: 3,
    backgroundColor: "black",
    borderRadius: 1.5,
  },
  viewsText: {
    fontSize: 10,
    fontFamily: "Inter-Regular",
  },
  viewsLabel: {
    fontSize: 10,
    fontFamily: "Inter-Regular",
    color: "gray",
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  actionsLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
  },
  actionItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  icon: {
    width: 24,
    height: 24,
    color: "black",
  },
  actionText: {
    fontSize: 14,
    fontFamily: "Inter-Regular",
  },
  basketButton: {
    flexDirection: "row",
    backgroundColor: "black",
    borderRadius: 8,
    overflow: "hidden",
    alignItems: "center",
  },
  basketContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 6,
    gap: 4,
  },
  basketIcon: {
    width: 24,
    height: 24,
    color: "white",
  },
  basketText: {
    fontSize: 14,
    color: "white",
    fontFamily: "Inter-Regular",
  },
  basketDiscount: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  discountText: {
    fontSize: 14,
    color: "white",
  },
  contactButton: {
    flexDirection: "row",
    backgroundColor: "black",
    borderRadius: 8,
  },
  contactContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    gap: 4,
  },
  contactIcon: {
    width: 24,
    height: 24,
    color: "red",
  },
  contactText: {
    fontSize: 14,
    color: "white",
    fontFamily: "Inter-Regular",
  },
});
