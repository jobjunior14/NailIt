import {
  View,
  Text,
  Animated,
  ScrollView,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import { useState, useRef } from "react";
import {
  ChevronDownAndUp,
  ArrowLongRight,
} from "@/assets/svg/messaging/messagingSvg";
import { ArrowLeftSvg } from "@/assets/svg/messaging/messagingSvg";
import { MapPin } from "@/assets/svg/home/mySvg";
import Message from "./message";

export default function PriceDiscussion() {
  const messageHeightAnim = useRef(new Animated.Value(50)).current;
  const [toggleAllMessage, seToggleAllMessage] = useState<boolean>(false);

  //handle the show or hide details text
  const handleToggleMessage = (): any => {
    seToggleAllMessage((prev) => !prev);
  };
  const showAllMessageAnim = () => {
    Animated.timing(messageHeightAnim, {
      toValue: 10000, // Target height
      duration: 1000, // Duration of the animation
      useNativeDriver: false, // `false` because we're animating layout properties
    }).start();
  };

  //function to hide the seggestion
  const hideMessageAnim = () => {
    Animated.timing(messageHeightAnim, {
      toValue: 50, // Target height
      duration: 1000, // Duration of the animation
      useNativeDriver: false, // `false` because we're animating layout properties
    }).start();
  };

  return (
    <Animated.View
      style={{ maxHeight: messageHeightAnim, overflow: "hidden" }}
      className="w-full flex-col p-1 border border-mainBlack rounded-lg"
    >
      {/* title, toogleBtn, items, initial price  */}
      <View className="w-full flex-col">
        {/* //title, toogleBtn */}
        <View className="w-full justify-between flex-row items-center">
          {/* title  */}
          <View className="w-90%">
            <Text className="font-InterSemiBold text-mainBlack">
              Bijoux en acier inoxydable
            </Text>
          </View>

          {/* toggle btn  */}
          <View className="w-[10%] flex justify-center items-center">
            <TouchableNativeFeedback
              onPress={() => {
                handleToggleMessage();

                !toggleAllMessage ? showAllMessageAnim() : hideMessageAnim();
              }}
            >
              <ChevronDownAndUp
                className={` w-6 h-6 text-mainBlack ${
                  toggleAllMessage ? "rotate-180" : ""
                }`}
              />
            </TouchableNativeFeedback>
          </View>
        </View>

        {/* number of items, total initial price  */}
        <View className="flex-row w-[50%] justify-between">
          {/* items  */}
          <View className="flex-row">
            <Text>Items:</Text>
            <Text>3</Text>
          </View>

          {/* total inital price */}
          <View className="flex-row">
            <Text>Total:</Text>
            <Text>3</Text>
          </View>
        </View>

        {/* // stuff about messages  */}
        <View className="w-full"></View>

        {/* // stuff about transfering the bill, payement confirmation, localisation.... */}
        <View className="w-full flex-col">
          {/* //transfering bill  */}
          <View className="w-full justify-center items-center flex-row">
            <Text>Transferer la facture</Text>
            <ArrowLongRight className=" w-6 h-6 text-mainBlack" />
          </View>

          <View className="w-full flex-row justify-between">
            <View className="flex-col">
              <Text className="font-interRegular">
                Confirmer une fois apres la reception du produit
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                className="px-2 py-1 bg-mainBlack"
              >
                <Text className=" font-InterSemiBold text-white">
                  Confirmer
                </Text>
              </TouchableOpacity>
            </View>

            {/* localisation  */}
            <MapPin className=" w-6 h-6 text-mainBlack" />
          </View>
        </View>
      </View>
    </Animated.View>
  );
}

{
  /* <Button
  title="Press me"
  onPress={() => {
    handleToggleMessage();

    !toggleAllMessage ? showAllMessageAnim() : hideMessageAnim();
  }}
></Button> */
}
