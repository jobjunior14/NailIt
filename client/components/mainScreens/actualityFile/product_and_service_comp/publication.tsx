import { useState, useEffect } from "react";
import {
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import { Ellips, MapPin } from "@/assets/svg/home/mySvg";
import ContentDisplay from "./contentsDisplay";
import FontsLoader from "@/components/FontLoader/fontLoader";
import ProfilPresentation from "./profilPresentation";
interface PublicationProps {
  screen: "service" | "product";
}
export default function Publication({ screen }: PublicationProps) {
  //diplay or  details
  const [seeMore, setSeeMore] = useState<boolean>(false);

  //handle see more btn
  function handleSeeMore(): any {
    setSeeMore((prev) => !prev);
  }

  return (
    <View className="w-full flex-col gap-y-4 mt-4 ">
      <ProfilPresentation screen={screen} />

      <FontsLoader>
        <View className="flex-col justify-center mx-2 mt-8 ">
          {/* price and benefint and more option  */}
          <View className=" flex-row justify-between mb-2 items-center">
            {/* price and benefint */}
            <View className=" flex-row items-center  w-[90%]">
              <View className="flex-row items-end pb-0 gap-x-2">
                <Text className=" font-bold text-mainBlack text-xl">
                  9.99 $
                </Text>
                <Text className=" font-light mb-[3px] line-through">15.9$</Text>
              </View>

              <Text className=" font-interRegular text-xs pl-4 text-ellipsis">
                + livraison gratuite
              </Text>
            </View>

            {/* more option  */}
            <TouchableNativeFeedback className=" rounded-full">
              <Ellips className="w-5 h-5 text-mainBlack rounded-full" />
            </TouchableNativeFeedback>
          </View>

          {/* title and puplication detail  */}
          <View className=" flex-row justify-between items-center w-full">
            <View className="flex-row justify-between w-full ">
              <View className="w-[90%] text-clip">
                <Text className=" font-InterSemiBold text-base leading-5">
                  Découvrez Nos Pinceaux de Maquillage Professionnels ! 🌟
                </Text>

                {/* see more btn  */}
                {!seeMore && (
                  <TouchableOpacity onPress={handleSeeMore}>
                    <Text className=" text-mainGray font-interRegular">
                      Voir plus
                    </Text>
                  </TouchableOpacity>
                )}

                {/* details  */}
                <View
                  className={`w-full transition-all ${
                    seeMore ? "min-h-fit mt-1" : "h-0"
                  }`}
                >
                  <Text
                    className={`w-full transition-all font-interRegular leading-5`}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reprehenderit, voluptatem eaque tempora quod molestiae
                    repellendus libero rem at ratione fuga mollitia excepturi,
                    facilis ea saepe aliquam porro quia unde debitis.
                  </Text>
                </View>

                {/* see less btn  */}
                {seeMore && (
                  <TouchableOpacity onPress={handleSeeMore}>
                    <Text className=" text-mainGray font-interRegular">
                      Voir moins
                    </Text>
                  </TouchableOpacity>
                )}
              </View>

              <TouchableOpacity className=" w-[10%] justify-start pt-[4px] flex items-end">
                <MapPin className="w-5 h-5 text-mainBlack" />
              </TouchableOpacity>
            </View>
          </View>

          {/* image or video content  */}
          <ContentDisplay screen={screen} />

          {/* separeted line  */}
          <View className="w-fill h-[0.4px] opacity-40 bg-textGray mt-4"></View>
        </View>
      </FontsLoader>
    </View>
  );
}
