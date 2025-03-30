import React, { useEffect, useState, useRef } from "react";
import { Text, TouchableOpacity, Animated } from "react-native";

interface filterInterface {
  [index: string]: boolean;
}

const CustomMessageFilter: React.FC = () => {
  //
  const [filter] = useState<string[]>(["Tous", "Contacts", "No Contacts"]);

  const [activeFilter, setActiveFilter] = useState<filterInterface>({});

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
    setActiveFilter(handlefiltertate(false) as filterInterface);
  }, []);

  const handlefiltertate = (index: boolean, filterParams?: string): object => {
    let obj: filterInterface = {};

    for (let i = 0; i < filter.length; i++) {
      obj[filter[i]] = i === 0 && !index;
    }

    if (filterParams) obj[filterParams] = true;

    return obj;
  };

  const handleFilter = (el: string): void => {
    setActiveFilter(handlefiltertate(true, el) as filterInterface);
  };

  const searchActiveFilter = (obj: object): string | undefined => {
    for (const key in obj) {
      if (obj[key as keyof object] === true) {
        return key as string;
      }
    }
  };

  return (
    <Animated.View className="flex-row justify-between items-center bg-white py-2 px-3 w-full">
      {filter.map((li) => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={li}
            className={`w-[28%] h-6 rounded-full flex justify-center items-center ${
              activeFilter[li] ? "bg-mainBlack" : "border border-textGray"
            }`}
            onPress={() => handleFilter(li)}
          >
            <Text
              className={`${
                activeFilter[li]
                  ? "text-white font-InterMedium"
                  : "text-mainBlack font-interRegular"
              } text-center text-[12px]`}
            >
              {li}
            </Text>
          </TouchableOpacity>
        );
      })}
    </Animated.View>
  );
};

export default CustomMessageFilter;
