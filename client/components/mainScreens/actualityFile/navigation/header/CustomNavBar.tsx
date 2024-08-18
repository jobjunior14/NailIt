import React, { useEffect, useState, useRef } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { TimeSvg } from "@/assets/svg/home/mySvg";
import FontsLoader from "@/components/FontLoader/fontLoader";
import useHideNavigations from "@/hooks/useHideNavigations";

type RootDrawerParamList = {
  Service: { categorie: string | undefined };
  Product: { categorie: string | undefined };
  Daily: { categorie: string | undefined };
};

interface categorieInterface {
  [index: string]: boolean;
}

const CustomNavBar: React.FC = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>();

  const currentRoute = useNavigationState(
    (state) => state?.routes[state.index]?.name ?? "Service"
  );

  const hideNav = useHideNavigations();

  console.log(currentRoute);

  const [categories] = useState<string[]>([
    "Tous",
    "Ongles",
    "Make-Up",
    "Manicure",
    "Electronique",
    "Electricite",
  ]);

  const [activeCategorie, setActiveCategorie] = useState<categorieInterface>(
    {}
  );

  const suggestionHeightAnnim = useRef(new Animated.Value(47)).current;

  const showSuggestion = () => {
    Animated.timing(suggestionHeightAnnim, {
      toValue: 47,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const hideSuggestion = () => {
    Animated.timing(suggestionHeightAnnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    setActiveCategorie(handleCategorieState(false) as categorieInterface);
  }, []);

  const handleCategorieState = (index: boolean, categorie?: string): object => {
    let obj: categorieInterface = {};
    for (let i = 0; i < categories.length; i++) {
      obj[categories[i]] = i === 0 && !index;
    }
    if (categorie) obj[categorie] = true;
    return obj;
  };

  const handleCategorie = (el: string): void => {
    setActiveCategorie(handleCategorieState(true, el) as categorieInterface);
  };

  const searchActiveCategorie = (obj: object): string | undefined => {
    for (const key in obj) {
      if (obj[key as keyof object] === true) {
        return key as string;
      }
    }
  };

  return (
    <FontsLoader>
      <View
        className={`flex-col justify-between items-center bg-white py-2 px-3 ${
          hideNav ? "hidden" : ""
        } `}
      >
        <View className="flex-row justify-between items-center bg-white py-2 px-3 w-full">
          <TouchableOpacity
            className={`w-[30%] h-6 rounded-full flex justify-center items-center ${
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
              } text-center text-[14px]`}
            >
              Service
            </Text>
          </TouchableOpacity>

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
              } text-center text-[14px]`}
            >
              Product
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className={`w-[30%] h-6 rounded-full flex justify-center items-center ${
              currentRoute === "Daily"
                ? "bg-selectRed"
                : "border border-textGray"
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
                } text-center text-[14px]`}
              >
                Daily
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <Animated.ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ height: suggestionHeightAnnim }}
          contentContainerStyle={{ flexDirection: "row", paddingVertical: 5 }}
        >
          {categories.map((li) => (
            <TouchableOpacity
              key={li}
              className="flex-row "
              onPress={() => {
                handleCategorie(li);
                navigation.navigate(currentRoute as keyof RootDrawerParamList, {
                  categorie: li,
                });
              }}
            >
              <View className="px-2 flex-col justify-center items-center ">
                <Text className="font-interRegular text-[12px]">{li}</Text>
                <View
                  className={`w-full duration-200 mt-1 h-[1.5px] ${
                    activeCategorie[li]
                      ? "bg-mainBlack translate-x-0"
                      : "translate-x-14"
                  } rounded-full`}
                ></View>
              </View>
            </TouchableOpacity>
          ))}
        </Animated.ScrollView>

        {/* separated line  */}
        <View className="w-full h-[0.5px] bg-dailyColor "></View>
      </View>
    </FontsLoader>
  );
};

export default CustomNavBar;
