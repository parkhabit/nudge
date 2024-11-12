import { Text, View } from "react-native";

const Habit = ({ title }: { title: string }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default Habit;
