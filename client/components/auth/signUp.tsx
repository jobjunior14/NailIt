import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MotiText } from "moti";
import { nailit } from "@/constants/image";
import FontsLoader from "../FontLoader/fontLoader";
import { GoogleSvg } from "@/assets/svg/auth/authSvg";
import { useState } from "react";
import { isValidEmail } from "./component/check.validefields";
import axiosUrl from "../axiosURL";

type errorType = {
  email: boolean;
  password: boolean;
  confirmPassWord: boolean;
};
export default function SignUpScreen() {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [passWord, setPassword] = useState<string>("");
  const [confirmPassWord, setConfirmPassword] = useState<string>("");
  let error: errorType = {
    email: false,
    password: false,
    confirmPassWord: false,
  };
  let createAccountBtn: boolean = false;

  //handle field's error
  //handle the error's field
  error.email = email === "" ? false : !isValidEmail(email);
  error.password =
    passWord === ""
      ? false
      : confirmPassWord === ""
      ? false
      : !(passWord === confirmPassWord);
  error.confirmPassWord =
    confirmPassWord === ""
      ? false
      : passWord === ""
      ? false
      : !(passWord === confirmPassWord);

  // if (!error.password || !error.confirmPassWord || !error.email) {
  // }

  return (
    <FontsLoader>
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        className=" w-full bg-white flex-col "
      >
        {/* //image */}
        <View className="w-full items-center flex-col mt-10">
          <Image className="w-14 h-14" source={nailit} />
          <View className="mt-2 flex flex-row">
            <Text className="font-interRegular text-[20px] text-mainBlack">
              Nail
            </Text>
            <Text className="text-mainRed text-[20px] font-bold">IT</Text>
          </View>
        </View>

        {/* //login form  */}
        <View className=" w-[90%] bg-transpGray rounded-lg flex-col py-10 px-3 mt-10">
          {/* name  */}
          <View>
            <MotiText
              from={{ transform: [{ translateY: 0 }], opacity: 1 }}
              animate={{
                transform: [{ translateY: name !== "" ? -20 : 0 }],
              }}
              className="absolute text-textGray bottom-[5px]"
            >
              Nom
            </MotiText>
            <TextInput
              onChangeText={setName}
              className="w-full border-b-[2px] border-textGray font-interRegular"
            ></TextInput>
          </View>

          {/* prename  */}
          <View className="mt-10">
            <MotiText
              from={{ transform: [{ translateY: 0 }], opacity: 1 }}
              animate={{
                transform: [{ translateY: surname !== "" ? -20 : 0 }],
              }}
              className="absolute text-textGray bottom-[5px]"
            >
              Prenom
            </MotiText>
            <TextInput
              onChangeText={setSurname}
              className="w-full border-b-[2px] border-textGray font-interRegular"
            ></TextInput>
          </View>

          {/* email  */}
          <View className="mt-10">
            <MotiText
              from={{ transform: [{ translateY: 0 }], opacity: 1 }}
              animate={{
                transform: [{ translateY: email !== "" ? -20 : 0 }],
              }}
              className={`absolute ${
                !error.email ? "text-textGray" : "text-textRed"
              } bottom-[5px]`}
            >
              Email
            </MotiText>
            <TextInput
              onChangeText={setEmail}
              className={`w-full border-b-[2px] ${
                !error.email ? "border-textGray" : "border-textRed"
              } font-interRegular`}
            ></TextInput>
          </View>

          {/* passWord  */}
          <View className="mt-10">
            <MotiText
              from={{ transform: [{ translateY: 0 }], opacity: 1 }}
              animate={{
                transform: [{ translateY: passWord !== "" ? -20 : 0 }],
              }}
              className={`absolute ${
                !error.password ? "text-textGray" : "text-textRed"
              } bottom-[5px]`}
            >
              Mot de Passe
            </MotiText>
            <TextInput
              secureTextEntry
              onChangeText={setPassword}
              className={`w-full border-b-[2px] ${
                !error.password ? "border-textGray" : "border-textRed"
              } font-interRegular`}
            ></TextInput>
          </View>

          {/* Confirm passWord  */}
          <View className="mt-10">
            <MotiText
              from={{ transform: [{ translateY: 0 }], opacity: 1 }}
              animate={{
                transform: [{ translateY: confirmPassWord !== "" ? -20 : 0 }],
              }}
              className={`absolute ${
                !error.confirmPassWord ? "text-textGray" : "text-textRed"
              } bottom-[5px]`}
            >
              Confirmer le mot de passe
            </MotiText>
            <TextInput
              secureTextEntry
              onChangeText={setConfirmPassword}
              className={`w-full border-b-[2px] ${
                !error.confirmPassWord ? "border-textGray" : "border-textRed"
              } font-interRegular`}
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
