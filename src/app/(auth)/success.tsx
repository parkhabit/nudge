import React from "react";
import LottieView from "lottie-react-native";
import { View, Text } from "react-native";
import { router } from "expo-router";

const success = () => {
  return (
    <View className="flex items-center justify-center flex-1">
      <LottieView
        style={{ height: 260, width: 260 }}
        source={require("../../../assets/success.json")}
        autoPlay={true}
        loop={false}
        speed={0.5}
        onAnimationFinish={() => router.navigate("/(tabs)/")}
      />

      <Text className="font-semibold text-lg">Welcome to Nudge</Text>
    </View>
  );
};

export default success;
