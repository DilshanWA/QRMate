import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import '../global.css';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          animation: 'slide_from_right',
          headerTintColor: '#ffffff',
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="generate"
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="scanresults"
          options={{
            headerShown: true,
            title: 'Scan Results',
            headerStyle: {
              backgroundColor: '#00777B',
            },
            headerTitleAlign: 'center',
            headerShadowVisible: false,
          }}
        />

        <Stack.Screen
          name="preview"
          options={{
            headerShown: true,
            title: 'Your QR Code',
            headerStyle: {
              backgroundColor: '#00777B',
            },
            headerTitleAlign: 'center',
            headerShadowVisible: false,
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}