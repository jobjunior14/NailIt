import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Animated,
} from "react-native";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { TimeSvg } from "@/assets/svg/home/mySvg";

type RootStackParamList = {
  Service: { categorie: string | undefined };
  Product: { categorie: string | undefined };
  Daily: { categorie: string | undefined };
};

interface categorieInterface {
  [index: string]: boolean;
}

SplashScreen.preventAutoHideAsync();

const CustomNavBar: React.FC = () => {
  const [loaded, error] = useFonts({
    "Inter-Black": require("@/assets/fonts/Inter-Black.ttf"),
    "Inter-Bold": require("@/assets/fonts/Inter-Bold.ttf"),
    "Inter-Regular": require("@/assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("@/assets/fonts/Inter-Medium.ttf"),
  });

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const currentRoute = useNavigationState(
    (state) => state?.routes[state.index]?.name ?? "Service"
  );

  const [categories] = useState<string[]>([
    "Tous",
    "Ongles",
    "Make-Up",
    "Manicure",
    "Electronique",
    "Electricite",
  ]);

  //state to filter the screen categories
  const [activeCategorie, setActiveCategorie] = useState<categorieInterface>(
    {}
  );

  /// annimation to hide suggestions on screen layout
  const suggestionHeightAnnim = useRef(new Animated.Value(47)).current; // Initial height is 100

  //fucntion to show the suggestions
  const showSuggestion = () => {
    Animated.timing(suggestionHeightAnnim, {
      toValue: 47, // Target height
      duration: 200, // Duration of the animation
      useNativeDriver: false, // `false` because we're animating layout properties
    }).start();
  };

  //function to hide the seggestion
  const hideSuggestion = () => {
    Animated.timing(suggestionHeightAnnim, {
      toValue: 0, // Target height
      duration: 200, // Duration of the animation
      useNativeDriver: false, // `false` because we're animating layout properties
    }).start();
  };

  useEffect(() => {
    if (error) throw error;

    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  //use effect to load the categorie at the first rundering
  useEffect(() => {
    setActiveCategorie(handleCategorieState(false) as categorieInterface);
  }, []);

  const handleCategorieState = (index: boolean, categorie?: string): object => {
    let obj: categorieInterface = {};

    for (let i = 0; i < categories.length; i++) {
      if (i === 0 && !index) {
        obj[categories[i]] = true;
      } else {
        obj[categories[i]] = false;
      }
    }

    if (categorie) obj[categorie] = true;

    return obj;
  };

  const handleCategorie = (el: string): void => {
    setActiveCategorie(handleCategorieState(true, el) as categorieInterface);
  };

  if (!loaded && !error) {
    return null;
  }

  //searche the active categorie
  const searchActiveCategorie = (obj: object): string | undefined => {
    for (const key in obj) {
      if (obj[key as keyof object] === true) {
        return key as string;
      }
    }
  };

  return (
    <SafeAreaView className="flex-col mt-14 justify-between items-center bg-white py-2 px-3">
      {/* navBar screen */}
      <View className="flex-row justify-between items-center bg-white py-2 px-3 w-full">
        {/* Service  */}
        <TouchableOpacity
          className={`w-[30%] h-6  rounded-full lex justify-center items-center ${
            currentRoute === "Service"
              ? "bg-selectRed"
              : "border border-textGray"
          }`}
          onPress={() =>
            navigation.navigate("Service", {
              categorie: searchActiveCategorie(activeCategorie),
            })
          }
        >
          <Text
            className={`${
              currentRoute === "Service"
                ? "text-textRed font-InterMedium"
                : "text-mainBlack font-interRegular"
            } text-center text-sm`}
          >
            Service
          </Text>
        </TouchableOpacity>

        {/* produit  */}
        <TouchableOpacity
          className={`w-[30%] h-6 rounded-full flex justify-center items-center ${
            currentRoute === "Product"
              ? "bg-selectRed"
              : "border border-textGray"
          }`}
          onPress={() =>
            navigation.navigate("Product", {
              categorie: searchActiveCategorie(activeCategorie),
            })
          }
        >
          <Text
            style={{ fontFamily: "Inter-Medium" }}
            className={`${
              currentRoute === "Product"
                ? "text-textRed font-InterMedium"
                : "text-mainBlack font-interRegular"
            } text-center text-sm`}
          >
            Product
          </Text>
        </TouchableOpacity>

        {/* daily  */}
        <TouchableOpacity
          className={`w-[30%] h-6 rounded-full flex justify-center items-center ${
            currentRoute === "Daily" ? "bg-selectRed" : "border border-textGray"
          }`}
          onPress={() =>
            navigation.navigate("Daily", {
              categorie: searchActiveCategorie(activeCategorie),
            })
          }
        >
          <View className="flex-row justify-center items-center gap-1">
            <TimeSvg
              className={`w-5 h-5 ${
                currentRoute === "Daily" ? "text-textRed" : "text-textGray"
              }`}
            />
            <Text
              className={`${
                currentRoute === "Daily"
                  ? "text-textRed font-InterMedium"
                  : "text-mainBlack font-interRegular"
              } text-center text-sm`}
            >
              Daily
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* suggestion  */}
      <Animated.ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          height: suggestionHeightAnnim,
        }}
        contentContainerStyle={{
          flexDirection: "row",
          paddingVertical: 5,
        }}
      >
        {categories.map((li) => (
          <TouchableOpacity
            key={li}
            className="flex-row "
            onPress={() => {
              handleCategorie(li);
              navigation.navigate(currentRoute as keyof RootStackParamList, {
                categorie: li,
              });
            }}
          >
            <View className=" px-2 flex-col justify-center items-center ">
              <Text className=" font-interRegular text-[14px]">{li}</Text>
              <View
                className={`w-full duration-200  mt-1 h-[1.5px] ${
                  activeCategorie[li]
                    ? "bg-mainBlack translate-x-0"
                    : " translate-x-14"
                }  rounded-full `}
              ></View>
            </View>
          </TouchableOpacity>
        ))}
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default CustomNavBar;
