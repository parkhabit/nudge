import { Text } from "react-native";
import { Redirect, Stack } from "expo-router";

import { useSession } from "../../lib/authProvider";

export default function AppLayout() {
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href="/(auth)" />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="tracking"
        options={{ headerShown: false, animation: "slide_from_bottom" }}
      />
      <Stack.Screen name="success" options={{ headerShown: false }} />
    </Stack>
  );
}
