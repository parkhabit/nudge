import { Tabs } from "expo-router";
import FeatherIcon from "@expo/vector-icons/Feather";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "black" }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Today",
          tabBarIcon: ({ color }) => (
            <FeatherIcon size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="data"
        options={{
          title: "Data",
          tabBarIcon: ({ color }) => (
            <FeatherIcon size={28} name="grid" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: "Add",
          tabBarIcon: ({ color }) => (
            <FeatherIcon size={28} name="plus" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
