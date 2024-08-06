import {
  View,
  Image,
  Text,
  Pressable,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import { rango } from "@/constants/image";
import { Star, World, Plus } from "@/assets/svg/home/mySvg";
import { useState, useEffect } from "react";
import { Ellips } from "@/assets/svg/home/mySvg";
import FontsLoader from "@/components/FontLoader/fontLoader";

export default function MySpaceProfilPresentation() {
  //Custom font, follow the link to see them

  return (
    <FontsLoader>
      <View
        className={"flex-row justify-between items-center w-full px-3 py-2"}
      >
        {/* profil and publication info */}
        <View className="flex-row justify-start items-start w-[80%] gap-x-2 ">
          {/* profil image  */}
          <TouchableOpacity onPress={() => console.log("hey")}>
            <Image
              className="w-14 h-14 rounded-full"
              resizeMode="cover"
              source={rango}
            />
          </TouchableOpacity>

          {/* name, who you are , subscription */}
          <View className=" flex-col gap-y-[1px] w-[80%]">
            <TouchableOpacity>
              <Text className=" font-interBold text-[14dp] ">Rango Delray</Text>
            </TouchableOpacity>

            <Text className="font-interRegular text-[12px]">
              Dessinateur | Décorateur | Maquillage
            </Text>

            <View className="flex-row gap-x-1  items-center">
              <Text className=" text-textGray text-[12px] font-interRegular">
                Abonnement:
              </Text>

              <Text className=" text-mainBlack text-[12px] font-interRegular">
                - 1 mois et 12 jours
              </Text>
            </View>
          </View>
        </View>

        {/* more option  */}
        <TouchableNativeFeedback className=" bg-mainGray w-[20%]">
          <Ellips className="w-6 h-6 text-mainBlack" />
        </TouchableNativeFeedback>
      </View>
    </FontsLoader>
  );
}
