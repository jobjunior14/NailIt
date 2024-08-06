import { View, Text, ScrollView } from "react-native";
import {
  BanqueNoteSvg,
  ArrowTrendingDown,
  ArrowTrendingUp,
} from "@/assets/svg/mySpace/mySpaceSvg";
import InfoBanqueHeader from "./InfoBanqueHeader";
import BanqueHistoriesDetails from "./historiesDetails";
import FontsLoader from "@/components/FontLoader/fontLoader";

export default function MainInfo() {
  return (
    <ScrollView>
      <FontsLoader>
        <View className="w-full flex-col">
          {/* banque information  */}
          <View className="w-full justify-center items-center gap-y-4 ">
            {/* balance  */}
            <View className="flex-col w-full justify-center gap-y-4">
              <View className="flex-row items-center gap-y-1 w-full justify-center">
                <BanqueNoteSvg className=" text-textGray w-6 h-6" />
                <Text className="font-interRegular text-mainBlack ml-1">
                  Balance:
                </Text>
              </View>

              <Text className="font-interBold text-mainBlack text-xl text-center">
                44.04$
              </Text>
            </View>

            {/* //gain and loose (spending)  */}
            <View className="w-[70%] justify-between flex-row ">
              {/* //spending  */}
              <View className=" flex-row gap-x-2">
                <ArrowTrendingDown className="w-4 h-4 text-mainRed" />
                <View className="flex-col gap-y-1">
                  <Text className="font-interRegular text-mainBlack">
                    Depense:
                  </Text>
                  <Text className=" text-mainRed  font-InterSemiBold">
                    112.4$
                  </Text>
                </View>
              </View>
              {/* //gains */}
              <View className=" flex-row gap-x-2">
                <ArrowTrendingUp className="w-4 h-4 text-green" />
                <View className="flex-col gap-y-1">
                  <Text className="font-interRegular text-mainBlack">
                    Gains:
                  </Text>
                  <Text className=" text-green  font-InterSemiBold">
                    203.55$
                  </Text>
                </View>
              </View>
            </View>

            {/* header, histories  */}
            <View className="flex-col w-full">
              <InfoBanqueHeader />
              <BanqueHistoriesDetails />
              <BanqueHistoriesDetails />
              <BanqueHistoriesDetails />
            </View>
          </View>
        </View>
      </FontsLoader>
    </ScrollView>
  );
}
