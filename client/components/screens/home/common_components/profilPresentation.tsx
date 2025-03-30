import { View, Image, Text, Pressable, TouchableOpacity } from "react-native";
import { rango } from "@/constants/image";
import { Star, World, Plus } from "@/assets/svg/home/mySvg";
import { useState, useEffect } from "react";
// import FontsLoader from "@/components/FontLoader/fontLoader";

interface ProfilPresentationPorps {
  screen: "service" | "product" | "daily";
}
export default function ProfilPresentation({
  screen,
}: ProfilPresentationPorps) {
  const [linkBtn, setLinkBtn] = useState<boolean>(false);

  //normaly have an id of the person
  const handleLinkBtn = (): any => {
    setLinkBtn((prev: boolean) => !prev);
  };
  return (
    // <FontsLoader>
    <View className={"flex-row justify-between items-center w-full mx-2 mt-2"}>
      {/* profil and publication info */}
      <View className="flex-row justify-start items-center w-[75%] gap-x-2 ">
        {/* profil image  */}
        <TouchableOpacity onPress={() => console.log("hey")}>
          <Image
            className="w-14 h-14 rounded-full"
            resizeMode="cover"
            source={rango}
          />
        </TouchableOpacity>

        {/* name, date, categorie */}
        <View className=" flex-col gap-y-[1px] w-[70%]">
          <TouchableOpacity>
            <Text className=" font-interBold ">Job Junior</Text>
          </TouchableOpacity>

          <Text className="font-interRegular text-[12px]">
            Make-up & Beauté & Tendance
          </Text>

          <View className="flex-row gap-x-4  items-center">
            <Text className=" text-mainBlack text-[12px] font-interRegular">
              24 minutes
            </Text>

            <View className="flex-row  justify-center items-center">
              <View className="flex-row justify-center items-center ">
                <View className="w-2 h-2 mr-[2px] rounded-full bg-textGray"></View>
                <Star width={16} height={16} color={"none"} />
                <Text className=" text-mainBlack ml-1 text-[12px] font-interRegular">
                  4/5
                </Text>
              </View>
            </View>

            <World width={20} height={20} color={"none"} />
          </View>
        </View>
      </View>

      {/* link or unlink button  */}
      {screen === "product" || screen === "service" ? (
        <TouchableOpacity
          onPress={handleLinkBtn}
          className="w-[25%] flex justify-center items-center pr-3"
        >
          <View className="h-[2.6vh] w-[18vw] flex justify-center items-center border border-mainBlack rounded-full">
            <View className=" flex-row items-center justify-stretch">
              <Plus
                width={20}
                height={20}
                color={"none"}
                style={{
                  transform: [{ rotate: linkBtn ? "0deg" : "45deg" }],
                }}
                // className={`w-5 h-5 ${
                //   linkBtn ? "" : "rotate-45"
                // }  text-mainBlack`}
              />
              <Text className=" text-mainBlack text-[12px]">
                {linkBtn ? "Lier" : "Délier"}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ) : (
        <View className="w-[25%] flex justify-center items-center pr-3">
          <View className="flex-col justify-evenly h-fit py-2 gap-y-[20%]">
            <View className="flex-row gap-x-1 items-center">
              <View className="w-[5px] h-[5px] rounded-full bg-mainBlack "></View>
              <Text className="text-[12px] text-textGray">Produit</Text>
            </View>

            <TouchableOpacity
              onPress={handleLinkBtn}
              activeOpacity={0.5}
              className="h-[3vh] w-[20vw] flex justify-center items-center border border-mainBlack rounded-full"
            >
              <View className=" flex-row items-center justify-stretch">
                <Plus
                  width={20}
                  height={20}
                  color={"rgba(21,22,22,1)"}
                  style={{ transform: [{ rotate: linkBtn ? "" : "45deg" }] }}
                  className={`w-5 h-5 ${
                    linkBtn ? "" : "rotate-45"
                  }  text-mainBlack`}
                />
                <Text className=" text-mainBlack">
                  {linkBtn ? "Lier" : "Délier"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
    // </FontsLoader>
  );
}
