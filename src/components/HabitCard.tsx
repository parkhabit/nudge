import { Text, View, TouchableOpacity, Animated } from "react-native";
import { Habit, ValueType } from "../types";
import FeatherIcon from "@expo/vector-icons/Feather";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { router } from "expo-router";

const HabitCard = ({
  habit: { id, name, description, icon, valueType, frequency, reminders },
}: {
  habit: Habit;
}) => {
  const onPressSkip = () => {
    // skip habit for this day
    // update the tracking table, need trackingId habitId and set the habitComplete to false
  };

  const onPressTracked = () => {
    if (valueType === ValueType.NUMBER) {
      router.push(`/tracking/${id}`);
    } else {
      // update the tracking table, need trackingId habitId and set the habitValue and habitComplete to true
    }
  };

  const renderRightActions = (
    dragX: Animated.AnimatedInterpolation<string | number>,
    onPressSkip: () => void
  ) => {
    const scale = dragX.interpolate({
      inputRange: [-100, -50, 0],
      outputRange: [2, 1, 0],
      extrapolate: "clamp",
    });

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onPressSkip()}
        className="flex flex-[0.3] items-center justify-center bg-blue-300"
      >
        <Text>Skip</Text>
      </TouchableOpacity>
    );
  };

  const renderLeftActions = (
    dragX: Animated.AnimatedInterpolation<string | number>,
    onPressTracked: () => void
  ) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => onPressTracked()}
        className="flex flex-[0.3] items-center justify-center bg-green-300"
      >
        <Text>Track habit</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Swipeable
        overshootRight={true}
        overshootLeft={true}
        renderRightActions={(dragX) => renderRightActions(dragX, onPressSkip)}
        renderLeftActions={(dragX) => renderLeftActions(dragX, onPressTracked)}
      >
        <View
          key={id}
          className="bg-gray-200 rounded-lg p-3 flex flex-row items-center gap-2"
        >
          <View className="rounded-full bg-black p-2">
            <FeatherIcon size={28} name={icon} color={"white"} />
          </View>
          <View>
            <Text className="font-semibold">{name}</Text>
            <Text>{description}</Text>
          </View>
        </View>
      </Swipeable>
    </>
  );
};

export default HabitCard;
