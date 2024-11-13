import { Text, View } from "react-native";

const Greeting = ({ name }: { name: string }) => {
  const timeofDay = new Date().getHours();
  let greeting = "Good morning";
  if (timeofDay >= 12 && timeofDay < 18) {
    greeting = "Good afternoon";
  } else if (timeofDay >= 18 && timeofDay < 24) {
    greeting = "Good evening";
  }

  return (
    <View className="pl-3 pt-16 pb-6">
      <Text className="font-semibold text-3xl">{greeting},</Text>
      <Text className="font-semibold text-3xl">{name}</Text>
    </View>
  );
};

export default Greeting;
