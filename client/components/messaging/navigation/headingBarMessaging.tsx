import { View, TextInput, Text, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";

import { Ellips, SearchSvg } from "@/assets/svg/home/mySvg";
import { ArrowLeftSvg } from "@/assets/svg/messaging/messagingSvg";

export default function SearchBarMessaging() {
  return (
    <View className=" flex-row justify-between items-center  px-3 mb-3">
      <TouchableOpacity activeOpacity={0.7} className=" w-fit">
        <ArrowLeftSvg className=" text-mainGray w-[20px] h-[20px] " />
      </TouchableOpacity>

      <View className="w-[80%] items-center flex ">
        <SearchSvg className=" text-mainGray w-[25px] h-[25px] absolute right-3 z-50 opacity-70 top-[3px]" />
        <TextInput
          keyboardType="web-search"
          placeholder="faites une recherche"
          className="pl-3 h-[30px] font-interRegular w-full text-[14px]   outline-none  rounded-[10px] bg-secondGray appearance-none "
        />
      </View>

      <TouchableOpacity activeOpacity={0.7} className=" w-fit  ">
        <Ellips className=" text-mainBlack w-[20px] h-[20px] " />
      </TouchableOpacity>
    </View>
  );
}
