import { useState } from "react";
import {
  Text,
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
  const [seeMore, setSeeMore] = useState<boolean>(false);

  const handleSeeMore = () => setSeeMore((prev) => !prev);

  return (
    <View className="w-full flex-col gap-y-4 mt-4">
      <ProfilPresentation screen={screen} />
      <FontsLoader>
        <View className="flex-col justify-center mx-2 mt-8">
          <View className="flex-row justify-between mb-2 items-center">
            <View className="flex-row items-center w-[90%]">
              <View className="flex-row items-end gap-x-2">
                <Text className="font-bold text-mainBlack text-xl">9.99 $</Text>
                <Text className="font-light line-through mb-1">15.9$</Text>
              </View>
              <Text className="font-interRegular text-[12px] pl-4">
                + livraison gratuite
              </Text>
            </View>
            <TouchableNativeFeedback
              background={TouchableNativeFeedback.Ripple(
                "rgba(0,0,0,0.1)",
                true,
                20
              )}
            >
              <Ellips className="w-5 h-5 text-mainBlack" />
            </TouchableNativeFeedback>
          </View>
          <View className="flex-row justify-between items-center w-full">
            <View className="flex-row justify-between w-full">
              <View className="w-[90%] text-clip">
                <Text className="font-InterSemiBold text-base leading-5">
                  Découvrez Nos Pinceaux de Maquillage Professionnels ! 🌟
                </Text>
                {!seeMore ? (
                  <TouchableOpacity onPress={handleSeeMore}>
                    <Text className="text-mainGray font-interRegular">
                      Voir plus
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <View>
                    <Text className="font-interRegular leading-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Reprehenderit, voluptatem eaque tempora quod molestiae
                      repellendus libero rem at ratione fuga mollitia excepturi,
                      facilis ea saepe aliquam porro quia unde debitis.
                    </Text>
                    <TouchableOpacity onPress={handleSeeMore}>
                      <Text className="text-mainGray font-interRegular">
                        Voir moins
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
              <TouchableOpacity className="w-[10%] justify-start pt-[4px] flex items-end">
                <MapPin className="w-5 h-5 text-mainBlack" />
              </TouchableOpacity>
            </View>
          </View>
          <ContentDisplay screen={screen} />
          <View className="w-full h-[0.4px] bg-textGray mt-4" />
        </View>
      </FontsLoader>
    </View>
  );
}
