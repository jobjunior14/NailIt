import {
  View,
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MotiView, MotiText } from "moti";
import { nailit } from "@/constants/image";
import FontsLoader from "../FontLoader/fontLoader";
import { GoogleSvg } from "@/assets/svg/auth/authSvg";
import { useState } from "react";

export default function SignUpScreen() {
  const [email, setEmail] = useState<string>("");
  const [passWord, setPassword] = useState<string>("");
  const [confirmPassWord, setConfirmPassword] = useState<string>("");

  return (
    <FontsLoader>
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        className=" w-full bg-white flex-col "
      >
        {/* //image */}
        <View className="w-full items-center flex-col mt-10">
          <Image className="w-20 h-20" source={nailit} />
          <Text className="font-interBold text-[20px] text-mainBlack mt-2">
            Nailit
          </Text>
        </View>

        {/* //separated line and google svg  */}

        <View className="w-full flex-col items-center">
          {/* //separated line  */}
          <View className="w-full flex-row justify-between items-center mt-10">
            <View className="w-[30%] h-[0.5px]  bg-textGray"></View>
            <Text className="text-[14px] font-interRegular text-mainBlack">
              Continuer avec:
            </Text>
            <View className="w-[30%] h-[0.5px]  bg-textGray"></View>
          </View>

          <GoogleSvg className="w-8 h-8 text-mainBlack mt-6" />

          <Text className="text-[14px] font-interRegular text-mainBlack mt-6">
            Ou
          </Text>
        </View>

        {/* //login form  */}
        <View className=" w-[90%] bg-transpGray rounded-lg flex-col py-10 px-3 mt-10">
          {/* email  */}
          <View>
            <MotiText
              from={{ transform: [{ translateY: 0 }], opacity: 1 }}
              animate={{
                transform: [{ translateY: email !== "" ? -20 : 0 }],
              }}
              className="absolute text-textGray bottom-[5px]"
            >
              Email
            </MotiText>
            <TextInput
              onChangeText={setEmail}
              className="w-full border-b-[2px] border-textGray font-interRegular"
            ></TextInput>
          </View>

          {/* passWord  */}
          <View className="mt-10">
            <MotiText
              from={{ transform: [{ translateY: 0 }], opacity: 1 }}
              animate={{
                transform: [{ translateY: passWord !== "" ? -20 : 0 }],
              }}
              className="absolute text-textGray bottom-[5px]"
            >
              Mot de Passe
            </MotiText>
            <TextInput
              secureTextEntry
              onChangeText={setPassword}
              className="w-full border-b-[2px] border-textGray font-interRegular"
            ></TextInput>
          </View>

          {/* Confirm passWord  */}
          <View className="mt-10">
            <MotiText
              from={{ transform: [{ translateY: 0 }], opacity: 1 }}
              animate={{
                transform: [{ translateY: confirmPassWord !== "" ? -20 : 0 }],
              }}
              className="absolute text-textGray bottom-[5px]"
            >
              Confirmer le mot de passe
            </MotiText>
            <TextInput
              secureTextEntry
              onChangeText={setConfirmPassword}
              className="w-full border-b-[2px] border-textGray font-interRegular"
            ></TextInput>
          </View>

          {/* //se connecter btn */}
          <TouchableOpacity activeOpacity={0.7}>
            <View className="w-full bg-mainBlack py-2 mt-10 rounded-lg flex justify-center items-center">
              <Text className="font-InterMedium text-white">
                Créer un compte
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </FontsLoader>
  );
}
