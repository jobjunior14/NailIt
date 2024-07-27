import { View, Text } from "react-native";

interface categorieProps {
  route: object;
}
const ServiceScreen: any = ({ route }: categorieProps) => {
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Text>Service Screen</Text>
    </View>
  );
};

export default ServiceScreen;
