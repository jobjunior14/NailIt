import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { MotiText } from "moti";
import { nailit } from "@/constants/image";
import FontsLoader from "../FontLoader/fontLoader";
import { useState } from "react";
import { isValidEmail } from "./component/check.validefields";
import axiosUrl from "../axios.config";
// import axios from "axios";

type errorType = {
  email: boolean;
  password: boolean;
  password_confirm: boolean;
};
export default function SignUpScreen() {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password_confirm, setPassword_confirm] = useState<string>("");
  const [secret_question, setSecret_question] = useState<string>("");
  const [secret_answer, setSecret_answer] = useState<string>("");
  const [phone_number, setPhone_number] = useState<string>("");
  const [user_name, setUser_name] = useState<string>("");
  let error: errorType = {
    email: false,
    password: false,
    password_confirm: false,
  };

  //handle field's error
  error.email = email === "" ? false : !isValidEmail(email);
  error.password =
    password === ""
      ? false
      : password_confirm === ""
      ? false
      : !(password === password_confirm);
  error.password_confirm =
    password_confirm === ""
      ? false
      : password === ""
      ? false
      : !(password === password_confirm);

  let createAccountBtn: boolean =
    error.password && error.password_confirm && error.email;

  function signUp(event: any) {
    const sendData = async () => {
      try {
        const userData = {
          name,
          surname,
          user_name,
          email,
          password,
          password_confirm,
          secret_question,
          secret_answer,
          phone_number,
        };

        const response = await axiosUrl.post("/auth/signUp", userData);

        // Logging the successful response data
        console.log(response.data);

        if (response) {
          console.log("UserEntity signed up successfully", response.data);
        }
      } catch (error: any) {
        // Handle the error response from the server
        if (error.response) {
          // Server responded with a status code outside the range of 2xx
          console.log("Server Error:", error.response.data); // Your JSON error
          console.log("Status Code:", error.response.status);
        } else if (error.request) {
          // The request was made but no response was received
          console.log("No response received:", error.request);
        } else {
          // Something else happened in setting up the request
          console.log("Error", error.message);
        }
      }
    };
    sendData();
    // event.preventDefault(); // You can uncomment this if necessary
  }

  return (
    <FontsLoader>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjust for iOS or Android
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0} // Adjust based on the height of the keyboard
      >
        <ScrollView
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
            // height: "100%",
          }}
          className=" w-full bg-white flex-col"
        >
          {/* //image */}
          {/* <View className="w-full items-center flex-col mt-10">
            <Image className="w-14 h-14" source={nailit} />
            <View className="mt-2 flex flex-row">
              <Text className="font-interRegular text-[20px] text-mainBlack">
                Nail
              </Text>
              <Text className="text-mainRed text-[20px] font-bold">IT</Text>
            </View>
          </View> */}

          {/* //login form  */}
          <View className=" w-[90%] bg-transpGray mb-10 rounded-lg flex-col px-3">
            {/* name  */}
            <View className="mt-10">
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

            {/* user_name  */}
            <View className="mt-10">
              <MotiText
                from={{ transform: [{ translateY: 0 }], opacity: 1 }}
                animate={{
                  transform: [{ translateY: user_name !== "" ? -20 : 0 }],
                }}
                className="absolute text-textGray bottom-[5px]"
              >
                Nom d'utilisateur ex:johndoe123
              </MotiText>
              <TextInput
                onChangeText={setUser_name}
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

            {/* password  */}
            <View className="mt-10">
              <MotiText
                from={{ transform: [{ translateY: 0 }], opacity: 1 }}
                animate={{
                  transform: [{ translateY: password !== "" ? -20 : 0 }],
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

            {/* Confirm password  */}
            <View className="mt-10">
              <MotiText
                from={{ transform: [{ translateY: 0 }], opacity: 1 }}
                animate={{
                  transform: [
                    { translateY: password_confirm !== "" ? -20 : 0 },
                  ],
                }}
                className={`absolute ${
                  !error.password_confirm ? "text-textGray" : "text-textRed"
                } bottom-[5px]`}
              >
                Confirmer le mot de passe
              </MotiText>
              <TextInput
                secureTextEntry
                onChangeText={setPassword_confirm}
                className={`w-full border-b-[2px] ${
                  !error.password_confirm ? "border-textGray" : "border-textRed"
                } font-interRegular`}
              ></TextInput>
            </View>

            {/* Secrete question  */}
            <View className="mt-10">
              <MotiText
                from={{ transform: [{ translateY: 0 }], opacity: 1 }}
                animate={{
                  transform: [{ translateY: secret_question !== "" ? -20 : 0 }],
                }}
                className={`absolute text-textGray bottom-[5px]`}
              >
                Question secrète
              </MotiText>
              <TextInput
                onChangeText={setSecret_question}
                className={`w-full border-b-[2px] border-textGray font-interRegular`}
              ></TextInput>
            </View>

            {/* Secrete response  */}
            <View className="mt-10">
              <MotiText
                from={{ transform: [{ translateY: 0 }], opacity: 1 }}
                animate={{
                  transform: [{ translateY: secret_answer !== "" ? -20 : 0 }],
                }}
                className={`absolute text-textGray bottom-[5px]`}
              >
                Réponse secrète
              </MotiText>
              <TextInput
                onChangeText={setSecret_answer}
                className={`w-full border-b-[2px] border-textGray font-interRegular`}
              ></TextInput>
            </View>

            {/* Secrete response  */}
            <View className="mt-10">
              <MotiText
                from={{ transform: [{ translateY: 0 }], opacity: 1 }}
                animate={{
                  transform: [{ translateY: phone_number !== "" ? -20 : 0 }],
                }}
                className={`absolute text-textGray bottom-[5px]`}
              >
                ex: +243993789439
              </MotiText>
              <TextInput
                onChangeText={setPhone_number}
                className={`w-full border-b-[2px] border-textGray font-interRegular`}
              ></TextInput>
            </View>

            {/* //se connecter btn */}
            <TouchableOpacity
              onPress={(event) => {
                if (!createAccountBtn) {
                  signUp(event);
                }

                console.log(createAccountBtn);
              }}
              activeOpacity={0.7}
            >
              <View className="w-full bg-mainBlack py-2 my-10 rounded-lg flex justify-center items-center">
                <Text className="font-InterMedium text-white">Continuer</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </FontsLoader>
  );
}
