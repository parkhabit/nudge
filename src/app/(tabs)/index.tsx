import { useState } from "react";
import { FlatList, Text, SafeAreaView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Greeting from "../../components/Greeting";
import HabitCard from "../../components/HabitCard";
import { dataTracking, dataHabits } from "../../data";
import { Habit, TrackedDay, TrackedHabit } from "../../types";

const Home = () => {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const user = { name: "Kitty" };

  const currentDateHabitIds = dataTracking.filter(
    (tracking: TrackedDay) => tracking.date === date
  )[0].habits;

  let renderHabits: Habit[] = [];
  dataHabits.filter((habit) => {
    currentDateHabitIds.map((trackableHabit) => {
      if (habit.id === trackableHabit.habitId) {
        renderHabits.push(habit);
      }
    });
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView>
        <Greeting name={user.name} />
        {/* <DatePicker /> */}
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
