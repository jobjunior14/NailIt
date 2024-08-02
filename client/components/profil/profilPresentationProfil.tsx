import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import { rango } from "@/constants/image";
import { useState } from "react";
import { ShieldCheckSvg, UsersSvg } from "@/assets/svg/profil/profil";
import { Star, MapPin, ChatBubbleSvg, Plus } from "@/assets/svg/home/mySvg";
import { EllipsHorizontalSvg } from "@/assets/svg/mySpace/mySpaceSvg";
import FontsLoader from "@/components/FontLoader/fontLoader";

export default function MySpaceProfilPresentation() {
  const [linkBtn, setLinkBtn] = useState<boolean>(false);

  //normaly have an id of the person
  const handleLinkBtn = (): any => {
    setLinkBtn((prev: boolean) => !prev);
  };
  return (
    <FontsLoader>
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
              <Text className="text-textGray">Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.6}
              className="flex-row items-center gap-x-1"
            >
              <View className="w-1 h-1 rounded-full bg-mainBlack"></View>
              <Text className="text-textGray">TikTok</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.6}
              className="flex-row items-center gap-x-1"
            >
              <View className="w-1 h-1 rounded-full bg-mainBlack"></View>
              <Text className="text-textGray">Portfolio</Text>
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

          <Text className=" text-xl text-textGray opacity-70"> | </Text>

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
          <Text className=" font-InterMedium ">RDC Nord-Kivu Goma</Text>
        </TouchableOpacity>

        {/* send message, more option, link or unlink someone profil (depending on who watching the profil) */}
        <View className="w-full flex-row justify-between pt-4">
          {/* send message  */}
          <TouchableOpacity
            activeOpacity={0.6}
            className="flex-row items-center gap-x-1 w-[55%] bg-mainBlack border border-mainBlack justify-center py-1 rounded-lg"
          >
            <ChatBubbleSvg className="w-6 h-6 text-white" />
            <Text className=" font-InterMedium text-white">
              Envoyer un message
            </Text>
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
    </FontsLoader>
  );
}
