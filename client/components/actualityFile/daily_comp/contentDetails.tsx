import {
  Animated,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { useRef, useState, useEffect } from "react";
import { ArrowUp } from "@/assets/svg/home/mySvg";
import FontsLoader from "@/components/FontLoader/fontLoader";
interface ContentDetailsProps {
  maxHeight: number;
}
export default function ContentDetails({ maxHeight }: ContentDetailsProps) {
  const [detailheight, setDetailHeight] = useState<number>(40);
  const detailHeightAnim = useRef(new Animated.Value(40)).current; // Initial height is 100
  const [showDetails, setShowDetails] = useState<boolean>(false);

  //handle the show or hide details text
  const handleShowDetails = (): any => {
    setShowDetails((prev) => !prev);
  };

  //height animation
  //fucntion to show the suggestions
  const showDetailAnim = () => {
    Animated.timing(detailHeightAnim, {
      toValue: maxHeight, // Target height
      duration: 200, // Duration of the animation
      useNativeDriver: false, // `false` because we're animating layout properties
    }).start();
  };

  //function to hide the seggestion
  const hideDetailAnim = () => {
    Animated.timing(detailHeightAnim, {
      toValue: 40, // Target height
      duration: 200, // Duration of the animation
      useNativeDriver: false, // `false` because we're animating layout properties
    }).start();
  };
  return (
    <FontsLoader>
      <Animated.View
        style={{
          justifyContent: "space-between",
          width: "100%",
          height: detailHeightAnim,
        }}
        className="flex-row pt-2 px-2 absolute  bottom-0  bg-transparentBlack"
      >
        {/* the price, the advantage and the details  */}
        <View className="w-full h-full px-2">
          <ScrollView nestedScrollEnabled className="w-full h-full flex-col">
            {/* price and */}
            <View className="flex-row items-center w-[90%]">
              <View className="flex-row items-end pb-0 gap-x-2">
                <Text className="font-bold text-white text-xl">9.99 $</Text>
                <Text className="font-light mb-[3px] text-white line-through">
                  15.9$
                </Text>
              </View>

              <Text className="font-interRegular text-white text-xs pl-4 text-ellipsis">
                + livraison gratuite
              </Text>
            </View>

            <View className={` pb-6 mt-3`}>
              <Text className=" font-interRegular  text-white leading-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
                excepturi vero placeat quibusdam. Ad asperiores corporis, eaque
                amet fuga, eius repellat incidunt vel et nihil vero,
                necessitatibus suscipit consequuntur optio! Lorem ipsum dolor,
                sit amet consectetur adipisicing elit. Officia delectus sint nam
                veniam eaque. Atque, illo! Eum delectus voluptatibus officiis
                magnam aliquid rem, suscipit quas corporis accusamus placeat,
                possimus ut. Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Dolorem tempore nesciunt molestias soluta deleniti dolore
                corporis quisquam, cumque nulla, nam tempora ducimus mollitia
                eveniet labore aliquid, corrupti eius quasi commodi. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Veniam quae esse
                porro quidem magni autem, debitis tempora error assumenda
                aperiam eligendi aliquam nam adipisci unde, qui corporis alias
                enim voluptatem. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Vitae mollitia inventore exercitationem labore
                voluptatibus, distinctio, velit tenetur consequuntur quasi quia
                ex eveniet minus? Veniam tempore quasi ipsa suscipit aut
                explicabo!
              </Text>
            </View>
          </ScrollView>
        </View>

        {/* button to show more or less details  */}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            handleShowDetails();

            !showDetails ? showDetailAnim() : hideDetailAnim();
          }}
          className=" absolute right-4 h-6 w-6 rounded-full bg-white bottom-2 flex-row justify-center items-center"
        >
          <ArrowUp
            className={`${
              showDetails ? "rotate-180" : ""
            } text-mainBlack w-5 h-5`}
          />
        </TouchableOpacity>
      </Animated.View>
    </FontsLoader>
  );
}
