import {
  View,
  TextInput,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import {
  SmileEmojiSvg,
  InBoxSvg,
  PaperPlanSvg,
  MicrophoneSvg,
} from "@/assets/svg/home/mySvg";
import { useState } from "react";

interface InputMessagePros {
  nameComponent: "inBox" | "daily";
}
export default function InputMessage({ nameComponent }: InputMessagePros) {
  const [text, setText] = useState<string>("");

  return (
    <View className="w-full flex-row justify-between mt-5">
      <View className="w-[85%] min-h-10 max-h-14 relative flex-row">
        <TextInput
          onChangeText={setText}
          multiline
          keyboardType="default"
          className="font-interRegular w-full h-full border border-mainGray rounded-lg pl-3"
          placeholder="Envoyer un message"
        />
        <View className="absolute right-0 top-2 w-8 h-8 rounded-full">
          <TouchableNativeFeedback>
            <SmileEmojiSvg className="text-mainBlack w-6 h-6" />
          </TouchableNativeFeedback>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        className="h-10 w-10 bg-mainBlack rounded-full flex justify-center items-center"
      >
        {text === "" ? (
          nameComponent === "daily" ? (
            <InBoxSvg className="w-5 h-5 text-white" />
          ) : (
            <MicrophoneSvg />
          )
        ) : (
          <PaperPlanSvg strokeWidth={1} />
        )}
      </TouchableOpacity>
    </View>
  );
}
