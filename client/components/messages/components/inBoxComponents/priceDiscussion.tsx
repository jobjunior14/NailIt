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
import { MapPin } from "@/assets/svg/home/mySvg";
import Message from "./message";
import { Colors } from "@/constants/Colors";

export default function PriceDiscussion() {
  const messageHeightAnim = useRef(new Animated.Value(70)).current;
  const [toggleAllMessage, seToggleAllMessage] = useState<boolean>(false);

  //handle the show or hide details text
  const handleToggleMessage = (): any => {
    seToggleAllMessage((prev) => !prev);
  };
  const showAllMessageAnim = () => {
    Animated.timing(messageHeightAnim, {
      toValue: 10000, // Target height
      duration: 1500, // Duration of the animation
      useNativeDriver: false, // `false` because we're animating layout properties
    }).start();
  };

  //function to hide the seggestion
  const hideMessageAnim = () => {
    Animated.timing(messageHeightAnim, {
      toValue: 70, // Target height
      duration: 500, // Duration of the animation
      useNativeDriver: false, // `false` because we're animating layout properties
    }).start();
  };

  return (
    <Animated.View
      style={{ maxHeight: messageHeightAnim, overflow: "hidden" }}
      className="w-full flex-col p-1 pb-4 border border-mainBlack rounded-lg mt-4"
    >
      <View className="w-full flex-col gap-y-4">
        {/* title, toogleBtn, items, initial price  */}
        <View className="w-full flex-col gap-y-2">
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
                background={TouchableNativeFeedback.Ripple(
                  "rgba(0,0,0,0.1)",
                  true,
                  20
                )}
                onPress={() => {
                  handleToggleMessage();

                  !toggleAllMessage ? showAllMessageAnim() : hideMessageAnim();
                }}
              >
                <ChevronDownAndUp
                  width={20}
                  height={20}
                  color={Colors.light.mainBlack}
                  style={{
                    transform: [
                      { rotate: toggleAllMessage ? "180deg" : "0deg" },
                    ],
                  }}
                />
              </TouchableNativeFeedback>
            </View>
          </View>

          {/* number of items, total initial price  */}
          <View className="flex-row w-[50%] justify-between">
            {/* items  */}
            <View className="flex-row gap-x-1">
              <Text className="font-interRegular text-[12px]">Items:</Text>
              <Text className="font-InterSemiBold text-[12px]">3</Text>
            </View>

            {/* total inital price */}
            <View className="flex-row gap-x-1">
              <Text className="font-interRegular text-[12px]">Total:</Text>
              <Text className="font-InterSemiBold text-[12px]">40$</Text>
            </View>
          </View>
        </View>

        {/* // stuff about messages  */}
        <View className="w-full flex-col gap-y-2">
          <Message from_me={true} priceDiscussion={true} />
          <Message from_me={false} priceDiscussion={true} />
        </View>

        {/* // stuff about transfering the bill, payement confirmation, localisation.... */}
        <View className="w-full flex-col gap-y-4 ">
          {/* //transfering bill  */}
          <TouchableOpacity
            activeOpacity={0.6}
            className="w-full justify-center gap-x-2 items-center flex-row"
          >
            <Text className="font-interRegular">Transferer la facture</Text>
            <ArrowLongRight
              width={20}
              height={20}
              color={Colors.light.mainBlack}
              stroke={Colors.light.mainBlack}
              className=" w-5 h-5 text-mainBlack"
            />
          </TouchableOpacity>

          {/* confirmation and advices before doing anything  */}
          <View className="w-full flex-row justify-between pl-2 items-center">
            <View className="flex-col gap-y-1">
              <Text className="font-interRegular text-[10px] text-mainRed">
                Confirmer une fois apres la reception du produit
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                className="w-24 flex items-center justify-center rounded-full py-1 bg-mainBlack"
              >
                <Text className=" font-interRegular text-white">Confirmer</Text>
              </TouchableOpacity>
            </View>

            {/* localisation  */}
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple(
                "rgba(0,0,0,0.1)",
                true,
                15
              )}
            >
              <MapPin
                height={20}
                width={20}
                color="none"
                stroke={Colors.light.mainBlack}
                className=" w-5 h-5 text-mainBlack"
              />
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>
    </Animated.View>
  );
}
