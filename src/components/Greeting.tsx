"use client";
import { Text, View, Button } from "react-native";
import { useSession } from "../lib/authProvider";

const Greeting = ({ name }: { name?: string }) => {
  const { signOut } = useSession();
  const timeofDay = new Date().getHours();
  let greeting = "Good morning";
  if (timeofDay >= 12 && timeofDay < 18) {
    greeting = "Good afternoon";
  } else if (timeofDay >= 18 && timeofDay < 24) {
    greeting = "Good evening";
  }

  return (
    <View className="flex flex-row justify-between items-center">
      <View className="pl-3 pt-16 pb-6 ">
        <Text className="font-semibold text-3xl">{greeting}</Text>
        {name && <Text className="font-semibold text-3xl">{name}</Text>}
      </View>
      <Button title="logout" onPress={signOut} />
    </View>
  );
};

export default Greeting;
