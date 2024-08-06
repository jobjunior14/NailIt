import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  ScrollView,
} from "react-native";
import { rango } from "@/constants/image";
import { useState } from "react";
import { ShieldCheckSvg, UsersSvg } from "@/assets/svg/profil/profil";
import { Star, MapPin, ChatBubbleSvg, Plus } from "@/assets/svg/home/mySvg";
import {
  EllipsHorizontalSvg,
  AdjustmentHorizontalSvg,
} from "@/assets/svg/mySpace/mySpaceSvg";
import FontsLoader from "@/components/FontLoader/fontLoader";
import Publication from "../mainScreens/actualityFile/product_and_service_comp/publication";

export default function MySpaceProfilPresentation() {
  const [linkBtn, setLinkBtn] = useState<boolean>(false);

  //normaly have an id of the person
  const handleLinkBtn = (): any => {
    setLinkBtn((prev: boolean) => !prev);
  };
  return (
    <FontsLoader>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View className={"flex-col items-start w-full px-3 py-2"}>
          {/* profil info */}
          <View className="flex-row h-20 justify-start items-center w-[80%] gap-x-2 ">
            {/* profil image  */}
            <View>
              <Image
                className="w-16 h-16 rounded-full"
                resizeMode="cover"
                source={rango}
              />

              <View className=" flex justify-center items-center absolute bottom-0 right-0 border-4 border-white rounded-full">
                <ShieldCheckSvg className="w-4 h-4 text-mainBlack" />
              </View>
            </View>

            {/* name, who you are , subscription */}
            <View className=" flex-col h-[65%] justify-between w-full">
              <Text className=" font-interBold">Rango Delray</Text>

              <Text className="font-interRegular">
                Dessinateur | Décorateur | Maquillage
              </Text>
            </View>
          </View>

          {/* profil description  and social media links*/}
          <View className=" w-full flex-col mt-4">
            {/* description  */}
            <Text className=" font-interRegular text-mainBlack leading-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              architecto rem in, dolore quisquam dolorum, perspiciatis cumque
              eligendi.
            </Text>

            {/* social's link  */}
            <View className="w-full  flex-row gap-x-4 mt-3">
              <TouchableOpacity
                activeOpacity={0.6}
                className="flex-row items-center gap-x-1"
              >
                <View className="w-1 h-1 rounded-full bg-mainBlack"></View>
                <Text className="text-textGray font-interRegular">
                  Facebook
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.6}
                className="flex-row items-center gap-x-1"
              >
                <View className="w-1 h-1 rounded-full bg-mainBlack"></View>
                <Text className="text-textGray font-interRegular">TikTok</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.6}
                className="flex-row items-center gap-x-1"
              >
                <View className="w-1 h-1 rounded-full bg-mainBlack"></View>
                <Text className="text-textGray font-interRegular">
                  Portfolio
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* separeted line  */}
        <View className="w-full h-[0.5px] bg-textGray mt-2"></View>

        {/* linked profil and other stuf like follow depending on how whatching the profil  */}
        <View className=" w-full flex-col items-center gap-y-4 justify-center mt-2 px-3 py-2">
          {/* linked profil and rating  */}
          <View className="w-[65%] justify-between flex-row ">
            {/* linked profil  */}
            <View className="flex-row items-center gap-x-1">
              <UsersSvg className="w-6 h-6 text-textGray" />
              <Text className=" font-InterMedium ">23k</Text>
            </View>

            <Text className=" text-[12px]l text-textGray opacity-70"> | </Text>

            {/* rating  */}
            <View className="flex-row items-center gap-x-1">
              <Star className="w-6 h-6 text-textGray" />
              <Text className=" font-InterMedium ">3.5/5</Text>
            </View>
          </View>

          {/* localisation  */}
          <TouchableOpacity
            activeOpacity={0.5}
            className="flex-row justify-center items-center gap-x-1 w-full"
          >
            <MapPin className="w-6 h-6 text-textGray" />
            <Text className=" font-interRegular ">RDC Nord-Kivu Goma</Text>
          </TouchableOpacity>

          {/* send message, more option, link or unlink someone profil (depending on who watching the profil) */}
          <View className="w-full flex-row justify-between pt-4">
            {/* send message  */}
            <TouchableOpacity
              activeOpacity={0.6}
              className="flex-row items-center gap-x-1 w-[55%] bg-mainBlack border border-mainBlack justify-center py-1 rounded-lg"
            >
              <ChatBubbleSvg className="w-6 h-6 text-white" />
              <Text className=" font-interRegular text-white">Message</Text>
            </TouchableOpacity>

            {/* link or unlink someone depending on who watching the profil */}
            <TouchableOpacity
              onPress={handleLinkBtn}
              activeOpacity={1}
              className="flex-row items-center w-[30%] border border-mainBlack  justify-center py-1 rounded-lg"
            >
              <Plus
                className={`w-6 h-6 mr-1 ${
                  linkBtn ? "" : "rotate-45"
                }  text-mainBlack`}
              />
              <Text className=" text-mainBlack font-Regular">
                {linkBtn ? "Lier" : "Délier"}
              </Text>
            </TouchableOpacity>

            {/* more option  */}
            <TouchableOpacity
              activeOpacity={1}
              className="flex-row items-center w-[10%] border border-mainBlack justify-center py-1 rounded-lg"
            >
              <EllipsHorizontalSvg className={`w-6 h-6 text-mainBlack`} />
            </TouchableOpacity>
          </View>
        </View>

        {/* separeted line  */}
        <View className="w-full h-[3px] opacity-40 bg-textGray mt-2"></View>

        {/* profil's publications and disponible daily  */}
        <View className=" w-full flex-col mt-4">
          <View className="w-full flex-row justify-between items-center px-3 py-2">
            <Text className=" font-InterSemiBold text-[16px] text-mainBlack">
              Publications
            </Text>

            <View className=" flex-row justify-center items-center ">
              <Text className=" font-interRegular text-[12px] text-textGray">
                Trier par
              </Text>
              <TouchableNativeFeedback>
                <AdjustmentHorizontalSvg className=" w-5 h-5 text-mainGray ml-1" />
              </TouchableNativeFeedback>
            </View>
          </View>

          {/* separeted line */}
          <View
            style={{ opacity: 0.4 }}
            className="w-full h-[0.5px] bg-mainGray mt-1"
          ></View>
        </View>

        <View className="w-full mt-2">
          <View className="h-fit flex-1">
            <Publication screen="service" />
          </View>

          <View className="h-fit flex-1">
            <Publication screen="service" />
          </View>
          <View className="h-fit flex-1">
            <Publication screen="service" />
          </View>
          <View className="h-fit flex-1">
            <Publication screen="service" />
          </View>
          <View className="h-fit flex-1">
            <Publication screen="service" />
          </View>
          <View className="h-fit flex-1">
            <Publication screen="service" />
          </View>
        </View>
      </ScrollView>
    </FontsLoader>
  );
}
