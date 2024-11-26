import { Stack } from "expo-router";
import { SessionProvider } from "../lib/authProvider";

import "../../global.css";

export default function RootLayout() {
  return (
    <SessionProvider>
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="tracking"
          options={{ headerShown: false, animation: "slide_from_bottom" }}
        />
        <Stack.Screen name="success" options={{ headerShown: false }} /> */}
      </Stack>
    </SessionProvider>
  );
}
