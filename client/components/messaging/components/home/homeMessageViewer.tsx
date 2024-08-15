import { View, Text, TouchableNativeFeedback, Image } from "react-native";
import { rango } from "@/constants/image";
import { useNavigation } from "expo-router";
import { DrawerNavigationProp } from "@react-navigation/drawer";
type RootDrawerParamList = {
  inBox: { categorie: string | undefined };
};

export default function HomeMessageViewer() {
  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>();
  return (
    <View className="w-full mt-4">
      <View className="flex-row w-full">
        <View className=" aspect-square w-12 rounded-full p-[2px] mr-1">
          <Image
            source={rango}
            resizeMode="cover"
            className="h-full w-full rounded-full"
          />
        </View>

        <TouchableNativeFeedback
          onPress={() => navigation.navigate("inBox", { categorie: undefined })}
        >
          <View className="pt-1 justify-between flex-col">
            {/* // name and status */}
            <View className="w-full justify-between flex-row">
              <Text className="w-[70%] overflow-hidden text-[12px] font-interBold text-mainBlack">
                Rango Delray
              </Text>

              <Text className="w-[20%] text-[12px] font-interRegular text-mainBlack mr-10 ">
                En ligne
              </Text>
            </View>
            {/* //last message and number of recieved messages */}
            <View className="w-full flex-row mt-2">
              <Text
                numberOfLines={1}
                className="w-[75%]  text-[12px] font-interRegular text-textGray "
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                sunt voluptas hic sapiente! Cupiditate, at eligendi? Explicabo,
                reiciendis rem ad recusandae fugit magni tempore enim mollitia,
                soluta voluptatibus distinctio repudiandae!
              </Text>

              <View className="w-4 h-4 flex justify-center items-center bg-mainRed rounded-full">
                <Text className="text-[8px] font-interRegular text-white">
                  2
                </Text>
              </View>
            </View>
            {/* // separated line  */}
            <View className="w-[80%] flex justify-items-end items-end  opacity-50 mt-4 ">
              <View className="h-[0.4px] bg-mainGray w-full"></View>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}
