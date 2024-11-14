import { useState } from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Greeting from "../../components/Greeting";
import HabitCard from "../../components/HabitCard";
import { dataTracking, dataHabits } from "../../data";
import { Habit, TrackedDay } from "../../types";
import DatePicker from "../../components/DatePicker";

const Home = () => {
  const [date, setDate] = useState(new Date());
  const user = { name: "Kitty" };

  const currentDateHabitIds = dataTracking.filter((tracking: TrackedDay) => {
    return (
      tracking.date.toISOString().split("T")[0] ===
      date.toISOString().split("T")[0]
    );
  })?.[0]?.habits;

  let renderHabits: Habit[] = [];
  dataHabits.filter((habit) => {
    currentDateHabitIds?.map((trackableHabit) => {
      if (habit.id === trackableHabit.habitId) {
        renderHabits.push(habit);
      }
    });
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView className="flex-1">
        <Greeting name={user.name} />
        <DatePicker currentDate={date} onDateChange={setDate} />
        <FlatList
          contentContainerClassName="gap-4 p-2"
          data={renderHabits}
          renderItem={({ item }) => <HabitCard habit={item} />}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Home;
