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
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";

interface FieldsErrors {
  email: boolean;
  password: boolean;
}

type RouteNavigationProps = {
  SignUp: { name: string | undefined };
};

export default function LoginScreen() {
  const [email, setEmail] = useState<string>("");
  const [passWord, setPassword] = useState<string>("");
  const [error, setError] = useState<FieldsErrors>({
    email: false,
    password: false,
  });

  //check if the email is valid or not
  function isValidEmail(email: string): boolean {
    return /\S+@\S+\.\S+/.test(email);

    //chechk if all the field all fill
  }

  const navigation =
    useNavigation<DrawerNavigationProp<RouteNavigationProps>>();

  return (
    <FontsLoader>
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        className=" w-full bg-white flex-col "
      >
        {/* //image */}
        <View className="w-full items-center flex-col mt-10">
          <Image className="w-20 h-20" source={nailit} />
          <View className="flex flex-row mt-2">
            <Text className="font-interBold text-[20px] text-mainBlack">
              Nail
            </Text>
            <Text className="font-interBold text-[20px] text-mainRed">IT</Text>
          </View>
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

          {/* //se connecter btn */}
          <TouchableOpacity activeOpacity={0.7}>
            <View className="w-full bg-mainBlack py-2 mt-10 rounded-lg flex justify-center items-center">
              <Text className="font-InterMedium text-white">Se connecter</Text>
            </View>
          </TouchableOpacity>

          <View className="w-full flex-row justify-between mt-5">
            <TouchableOpacity activeOpacity={0.7}>
              <Text className=" font-interRegular text-textGray">
                Mot de passe oublié ?
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("SignUp", { name: undefined })}
              activeOpacity={0.7}
            >
              <Text className="font-InterSemiBold text-mainRed">
                Créer un compte
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </FontsLoader>
  );
}
