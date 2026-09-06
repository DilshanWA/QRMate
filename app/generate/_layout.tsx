import { Stack } from "expo-router";

export default function GenerateLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#00777B",
        },
        headerTintColor: "#FFFFFF",
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="textqr"
        options={{
          title: "Text QR",
        }}
      />

      <Stack.Screen
        name="website"
        options={{
          title: "Website QR",
        }}
      />

      <Stack.Screen
        name="wifi"
        options={{
          title: "Wi-Fi QR",
        }}
      />

      <Stack.Screen
        name="contact"
        options={{
          title: "Contact QR",
        }}
      />

      <Stack.Screen
        name="email"
        options={{
          title: "Email QR",
        }}
      />
    </Stack>
  );
}