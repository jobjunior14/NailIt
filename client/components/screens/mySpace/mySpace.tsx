// import { Stack } from "expo-router";
import { View, Text, ScrollView } from "react-native";
import BanqueSpace from "@/components/screens/mySpace/bank/banqueSpace";
import Basket from "@/components/screens/mySpace/basket/basket";
import { ArrowLeftSvg } from "@/assets/svg/messaging/messagingSvg";
import FontsLoader from "../../fontLoader/fontLoader";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "@/constants/Colors";

export default function MySpaceView() {
  const navigation = useNavigation();

  return (
    <FontsLoader>
      <View className="w-full bg-white">
        <View className="h-fit w-full   px-3 pb-4 flex-row items-center ">
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <ArrowLeftSvg
              style={{ marginRight: 12 }}
              height={20}
              width={20}
              color={Colors.light.mainBlack}
            />
          </TouchableOpacity>
          <Text className="text-[20px] font-InterSemiBold">My space</Text>
        </View>

        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            flexDirection: "column",
            marginTop: 20,
            paddingBottom: 100,
          }}
        >
          {/* //information about your banque account  */}
          <View className="px-3">
            <BanqueSpace />
          </View>

          {/* //the items in your basket and all the historique */}
          <Basket />
        </ScrollView>
      </View>
    </FontsLoader>
  );
}
