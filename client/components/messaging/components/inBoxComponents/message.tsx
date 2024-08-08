import { View, Text } from "react-native";

interface MessageProps {
  from_you: boolean;
  priceDiscussion: boolean;
}
export default function Message({ from_you, priceDiscussion }: MessageProps) {
  if (from_you) {
    return (
      <View className="w-full flex-row justify-end">
        <View className="max-w-[80%] border-mainBlack border flex-col px-2 py-1 rounded-t-xl rounded-l-xl">
          {priceDiscussion && (
            <View className="w-full flex-col">
              <View className="flex-row">
                <Text>Prix:</Text>
                <Text className=" text-mainRed">38 $</Text>
              </View>

              {/* //separeted line  */}
              <View className="w-full h-[0.5px] opacity-50 bg-textGray"></View>
            </View>
          )}
          <Text className="font-interRegular text-[14px] text-mainBlack leading-5  ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
            nobis, ducimus rem maxime, facilis laudantium officia consectetur
            quasi tenetur veniam ullam ipsum nesciunt deleniti voluptatum sequi
            libero recusandae! At, recusandae?
          </Text>
          <View className="w-full flex-row justify-end">
            <Text className="text-[10px] text-mainBlack font-interRegular">
              4:12 PM
            </Text>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View className="max-w-[80%] bg-transpGray flex-col px-2 py-1 rounded-t-xl rounded-r-xl">
        {priceDiscussion && (
          <View className="w-full flex-col">
            <View className="flex-row">
              <Text>Prix:</Text>
              <Text className=" text-mainRed">38 $</Text>
            </View>

            {/* //separeted line  */}
            <View className="w-full h-[0.5px] opacity-50 bg-textGray"></View>
          </View>
        )}
        <Text className="font-interRegular text-[14px] text-mainBlack leading-5  ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim nobis,
          ducimus rem maxime, facilis laudantium officia consectetur quasi
          tenetur veniam ullam ipsum nesciunt deleniti voluptatum sequi libero
          recusandae! At, recusandae?
        </Text>
        <View className="w-full flex-row justify-end">
          <Text className="text-[10px] text-mainBlack font-interRegular">
            4:12 PM
          </Text>
          <Text className="text-[10px] text-mainBlack font-interRegular">
            Lu
          </Text>
        </View>
      </View>
    );
  }
}
