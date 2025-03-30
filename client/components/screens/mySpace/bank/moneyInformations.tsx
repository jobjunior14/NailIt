import { View, Text, TouchableOpacity, Pressable } from "react-native";
import MySpaceProfilPresentation from "./mySpaceProfilPresentation";
import { useEffect } from "react";
import FontsLoader from "@/components/fontLoader/fontLoader";
import {
  BanqueNoteSvg,
  EyeSlahSvg,
  QRCodeSvg,
  ArrowPathSvg,
  ArrowUpInSquareSvg,
  ArrowDownInSquareSvg,
  EllipsHorizontalSvg,
} from "@/assets/svg/mySpace/mySpaceSvg";
import { Colors } from "@/constants/Colors";

export default function MoneyInformation() {
  return (
    <FontsLoader>
      <View className="flex-col bg-banqueSpaceBg rounded-lg">
        {/* profil presentation  */}
        <MySpaceProfilPresentation />

        {/* balance and QR code  */}
        <View className="w-full flex-row justify-between items-center mt-8 px-3 py-2">
          {/* balance  */}
          <View className=" flex-row justify-start gap-x-2">
            <BanqueNoteSvg
              width={24}
              height={24}
              fill={Colors.light.mainGray}
            />

            <View className="flex-col items-start justify-start">
              <Text className=" font-interRegular">Balance:</Text>
              <View className="flex-row items-center gap-x-4">
                <Text className="font-black text-[20px]">22.5 $</Text>
                <TouchableOpacity activeOpacity={0.6}>
                  <EyeSlahSvg
                    width={20}
                    height={20}
                    fill={Colors.light.textGray}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <TouchableOpacity activeOpacity={0.7}>
            <QRCodeSvg height={36} width={36} fill={Colors.light.mainBlack} />
          </TouchableOpacity>
        </View>

        {/* serapted line  */}
        <View
          style={{ opacity: 0.4 }}
          className="w-full bg-textGray h-[0.5px] mt-4"
        ></View>

        {/* banque's options  */}
        <View className="w-full flex-row justify-between items-center px-3 py-2 mt-4">
          <TouchableOpacity
            activeOpacity={0.7}
            accessibilityLabel="Transférer"
            className="flex-col items-center justify-center"
          >
            <View className="w-10 h-10 bg-mainBlack rounded-full flex justify-center items-center">
              <ArrowPathSvg
                height={24}
                width={24}
                fill={"none"}
                stroke={Colors.light.white}
                strokeWidth={1.5}
              />
            </View>

            <Text className=" text-[12px] font-interRegular text-mainBlack">
              Transférer
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            className="flex-col items-center justify-center"
          >
            <View className="w-10 h-10 bg-mainBlack rounded-full flex justify-center items-center">
              <ArrowUpInSquareSvg
                height={24}
                width={24}
                fill={"none"}
                stroke={Colors.light.white}
                strokeWidth={1.5}
              />
            </View>

            <Text className=" text-[12px] font-interRegular text-mainBlack">
              Rétier
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            className="flex-col items-center justify-center"
          >
            <View className="w-10 h-10 bg-mainBlack rounded-full flex justify-center items-center">
              <ArrowDownInSquareSvg
                height={24}
                width={24}
                fill={"none"}
                stroke={Colors.light.white}
                strokeWidth={1.5}
              />
            </View>

            <Text className=" text-[12px] font-interRegular text-mainBlack">
              Déposer
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            className="flex-col items-center justify-center"
          >
            <View className="w-10 h-10 bg-mainBlack rounded-full flex justify-center items-center">
              <EllipsHorizontalSvg
                height={24}
                width={24}
                fill={"none"}
                stroke={Colors.light.white}
                strokeWidth={1.5}
              />
            </View>

            <Text className=" text-[12px] font-interRegular text-mainBlack">
              Utiles
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </FontsLoader>
  );
}
