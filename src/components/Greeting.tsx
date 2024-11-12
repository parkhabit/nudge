import { Text, View } from "react-native";

const Greeting = ({ name }: { name: string }) => {
  // TODO: add greeting according to the time of day
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default Greeting;
