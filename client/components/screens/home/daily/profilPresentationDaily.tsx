import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import { rango } from "@/constants/image";
import { Star } from "@/assets/svg/home/mySvg";
import { useState } from "react";
import { Ellips } from "@/assets/svg/home/mySvg";
import FontsLoader from "@/components/fontLoader/fontLoader";
import { Colors } from "@/constants/Colors";

export default function ProfilPresentationDaily() {
  const [linkBtn, setLinkBtn] = useState<boolean>(false);
  //Custom font, follow the link to see them

  //normaly have an id of the person
  const handleLinkBtn = (): any => {
    setLinkBtn((prev: boolean) => !prev);
  };
  return (
    <FontsLoader>
      <View
        className={"flex-row justify-between items-center w-full mx-2 mt-2"}
      >
        {/* profil and publication info */}
        <View className="flex-row justify-start items-center w-[75%] gap-x-2 ">
          {/* profil image  */}
          <TouchableOpacity onPress={() => console.log("hey")}>
            <Image
              className="w-10 h-10 rounded-full"
              resizeMode="cover"
              source={rango}
            />
          </TouchableOpacity>

          {/* name, date, rating */}
          <TouchableOpacity
            activeOpacity={0.5}
            className=" flex-col gap-y-[1px] w-[70%] justify-start"
          >
            {/* name of the profil  */}
            <View>
              <Text className=" font-interBold text-[12px]">Job Junior</Text>
            </View>

            {/* elapsed time of the post and profil rating */}
            <View className="flex-row gap-x-4  items-center">
              <Text className=" text-mainBlack text-[10px] font-interRegular">
                24 minutes
              </Text>

              {/* profil rating */}
              <View className="flex-row  justify-center items-center">
                <View className="flex-row justify-center items-center ">
                  <View className="w-[6px] h-[6px] mr-[2px] rounded-full bg-textGray"></View>
                  <Star
                    color={Colors.light.white}
                    stroke={Colors.light.textGray}
                    width={20}
                    height={20}
                  />
                  <Text className=" text-mainBlack ml-1 text-[10px] font-interRegular">
                    4/5
                  </Text>
                </View>
              </View>

              {/* //product or service  */}
              <View className="flex-row  justify-center items-center">
                <View className="flex-row justify-center items-center ">
                  <View className="w-[6px] h-[6px] mr-[2px] rounded-full bg-textGray"></View>
                  <Text className=" text-mainBlack ml-1 text-[10px] font-interRegular">
                    Produit
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* more options */}
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple(
            "rgba(0,0,0,0.1)",
            true,
            20
          )}
        >
          <Ellips
            style={{ marginRight: 10 }}
            width={20}
            height={20}
            fill={"rgba(21, 22, 22, 1)"}
          />
        </TouchableNativeFeedback>
      </View>
    </FontsLoader>
  );
}
