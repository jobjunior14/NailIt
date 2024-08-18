import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import {
  ArrowUp1,
  HomeSvg,
  ChatBubbleFillSvg,
  ShoppingCardSvg,
  PlusSvg,
  CogSvg,
} from "@/assets/svg/home/mySvg";
import { useNavigation } from "@react-navigation/native";
import { MotiView } from "moti";
import FontsLoader from "@/components/FontLoader/fontLoader";
import { rango } from "@/constants/image";
import useHideNavigations from "@/hooks/useHideNavigations";

type RootDrawerParamList = {
  MessagingStack: { categorie: string | undefined };
  Service: { categorie: string | undefined };
};
const NavButton = () => {
  const [isOn, setIsOn] = useState<boolean>(false);
  const [keyboardState, setKeyboardState] = useState<boolean>(false);

  //track the keyBoard state
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardState(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardState(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>();

  const currentRoute = useHideNavigations();

  const handleIsOn = (): any => {
    setIsOn((prev) => !prev);
  };

  return (
    <FontsLoader>
      <View
        style={{
          flexDirection: "row",
          columnGap: 35,
          flex: 1,
          display: currentRoute || keyboardState ? "none" : undefined,
        }}
        className={`w-full justify-center items-center absolute bottom-0 pb-1 pt-1 ${
          isOn ? "bg-white" : ""
        }`}
      >
        {/* Cog (Parameters)  */}
        <Pressable className={`${isOn ? "" : "hidden"} flex-col items-center`}>
          <MotiView
            style={{ elevation: 3 }}
            from={{ transform: [{ translateY: 0 }], opacity: 1 }}
            animate={{
              transform: [{ translateY: isOn ? 0 : 40 }],
              opacity: isOn ? 1 : 0,
            }}
            className="w-10 h-10 rounded-full flex justify-center items-center bg-mainGray"
          >
            <CogSvg className="w-6 h-6 text-white" />
          </MotiView>

          <Text className="text-[8px]"> Parametre</Text>
        </Pressable>

        {/* home  and shoppingCard*/}
        <Pressable className="flex-col h-10 items-center">
          {/* home  */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate("Service", { categorie: undefined })
            }
          >
            <MotiView
              style={{ elevation: 3 }}
              from={{ transform: [{ translateY: 0 }], opacity: 1 }}
              animate={{
                transform: [{ translateY: isOn ? -30 : 0 }],
                opacity: isOn ? 0 : 1,
              }}
              className="w-10 h-10 rounded-full flex justify-center items-center bg-mainGray"
            >
              <HomeSvg className="w-6 h-6 text-white" />
            </MotiView>
          </TouchableOpacity>

          {/* shopping card  */}
          <MotiView
            from={{ transform: [{ translateY: 0 }], opacity: 1 }}
            animate={{
              transform: [{ translateY: isOn ? -40 : 0 }],
              opacity: isOn ? 1 : 0,
            }}
            className="w-10 h-10 flex justify-center items-center"
          >
            <View className="w-full h-full flex-col items-center mb-[10px]">
              <View
                style={{ elevation: 3 }}
                className="w-full h-full bg-mainGray rounded-full flex justify-center items-center"
              >
                <ShoppingCardSvg className="w-6 h-6 text-white" />
              </View>

              <Text className="text-[8px]">Panier</Text>
            </View>
          </MotiView>
        </Pressable>

        {/* more option  */}
        <Pressable onPress={handleIsOn}>
          <MotiView
            style={[
              { elevation: isOn ? 0 : 5 },
              { transform: [{ translateY: 0 }] },
            ]}
            from={{ transform: [{ translateY: 0 }] }}
            animate={{ transform: [{ translateY: isOn ? -20 : 0 }] }}
            className={`w-10 h-10 rounded-full flex ${
              isOn ? "border-[2px] border-white" : ""
            } justify-center items-center bg-mainGray`}
          >
            <ArrowUp1
              className={`w-5 h-5 text-white ${isOn ? "rotate-180" : ""}`}
            />
          </MotiView>
        </Pressable>

        {/* messages  and profil*/}
        <View className="flex-col h-10">
          {/* // messages */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate("MessagingStack", { categorie: undefined })
            }
          >
            <MotiView
              style={{ elevation: 3 }}
              from={{ transform: [{ translateY: 0 }], opacity: 1 }}
              animate={{
                transform: [{ translateY: isOn ? -30 : 0 }],
                opacity: isOn ? 0 : 1,
                display: isOn ? "none" : undefined,
              }}
              className="w-10 h-10 rounded-full flex justify-center items-center bg-mainGray"
            >
              <ChatBubbleFillSvg
                style={{ elevation: 10 }}
                className="w-6 h-6  text-white"
              />

              <View className="bg-mainRed left-5 -top-1 z-50 rounded-full flex justify-center items-center absolute w-[20px] h-[20px]">
                <View className="flex justify-center  items-center relative">
                  <Text className="text-center font-interRegular text-[10px] relative text-white ">
                    20
                  </Text>
                </View>
              </View>
            </MotiView>
          </TouchableOpacity>

          {/* profil  */}
          <MotiView
            from={{ transform: [{ translateY: 0 }], opacity: 1 }}
            animate={{
              transform: [{ translateY: isOn ? -40 : 0 }],
              opacity: isOn ? 1 : 0,
            }}
            className="w-10 h-10 flex justify-center items-center"
          >
            <View className="w-full h-full flex-col items-center mb-[10px]">
              <View
                style={{ elevation: 3 }}
                className="w-full h-full rounded-full flex"
              >
                <Image
                  source={rango}
                  className="w-full h-full rounded-full"
                  resizeMode="cover"
                />
              </View>

              <Text className="text-[8px]">Profil</Text>
            </View>
          </MotiView>
        </View>

        {/* publier  */}
        <Pressable className={`${isOn ? "" : "hidden"} flex-col items-center`}>
          <MotiView
            style={{ elevation: 3 }}
            from={{ transform: [{ translateY: 0 }], opacity: 1 }}
            animate={{
              transform: [{ translateY: isOn ? 0 : 40 }],
              opacity: isOn ? 1 : 0,
            }}
            className="w-10 h-10 rounded-full flex justify-center items-center bg-mainGray flex-col"
          >
            <PlusSvg className="w-6 h-6 text-white" />
          </MotiView>
          <Text className="text-[8px] ">Publier</Text>
        </Pressable>
      </View>
    </FontsLoader>
  );
};

export default NavButton;

// const styles = StyleSheet.create({
//   switchContainer: {
//     // height: 88,
//     // backgroundColor: "#ccc",
//     // borderRadius: 25,
//     // justifyContent: "",
//     // overflow: "hidden",
//   },
// });

// import React, { useState, useRef, useMemo } from "react";
// import { View, Animated, PanResponder, StyleSheet, Text } from "react-native";
// import { MotiView } from "moti";
// import { Colors } from "@/constants/Colors";
// const NavButton = () => {
//   const [isOn, setIsOn] = useState(false);
//   const pan = useRef(new Animated.ValueXY()).current;
//   const switchHeight = 100; // Width of the switch component
//   const switchThreshold = switchHeight / 2; // Threshold for switch state change

//   const panResponder = useRef(
//     PanResponder.create({
//       onStartShouldSetPanResponder: () => true,
//       onMoveShouldSetPanResponder: () => true,
//       onPanResponderMove: (e, gestureState) => {
//         // Move the switch horizontally
//         pan.setValue({ x: 0, y: gestureState.dy });
//       },
//       onPanResponderRelease: () => {
//         // Determine the switch state based on the position
//         const shouldTurnOn = pan.y._value > switchThreshold;
//         setIsOn(shouldTurnOn);

//         // Animate to the final position
//         Animated.spring(pan, {
//           toValue: { y: shouldTurnOn ? switchHeight - 50 : 0, x: 0 },
//           useNativeDriver: false,
//         }).start();
//       },
//     })
//   ).current;

//   const animatedStyle = {
//     transform: pan.getTranslateTransform(),
//   };

//   const trackOpacity = useMemo(() => (isOn ? 0 : 1), [isOn]);

//   console.log(trackOpacity);

//   return (
//     <View className="w-full flex-row">
//       <View style={styles.switchContainer}>
//         <Animated.View
//           style={[styles.switch, animatedStyle]}
//           {...panResponder.panHandlers}
//         >
//           <Text style={styles.text}>{!isOn ? "off" : "on"}</Text>
//         </Animated.View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   switchContainer: {
//     width: 50,
//     height: 200,
//     backgroundColor: "#ccc",
//     borderRadius: 25,
//     justifyContent: "center",
//     overflow: "hidden",
//   },
//   switch: {
//     width: 50,
//     height: 100,
//     backgroundColor: "skyblue",
//     borderRadius: 25,
//     justifyContent: "center",
//     alignItems: "center",
//     position: "absolute",
//   },
//   text: {
//     color: "white",
//     fontSize: 18,
//   },
// });

// export default NavButton;
