import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import '../global.css';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{
        animation: 'fade',
      }}>
        <Stack.Screen name="(tabs)" 
           options={{ headerShown: false, }}
        />
        <Stack.Screen name="generate"
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen name="scanresults"
          options={{
            headerShown: true,
            title: 'Scan Results',
            headerStyle: {
              backgroundColor: "#00777B",
            },
            headerTitleAlign: 'center',
            headerShadowVisible: false,
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

