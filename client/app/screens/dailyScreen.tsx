import { View, Text } from "react-native";

interface categorieProps {
  route: object;
}
const DailyScreen: any = ({ route }: categorieProps) => {
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Text>Service Screen</Text>
    </View>
  );
};

export default DailyScreen;
