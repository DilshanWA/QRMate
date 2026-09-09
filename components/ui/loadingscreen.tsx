import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';

export default function LoadingScreen() {
  return (
    <View className="absolute inset-0 items-center justify-center bg-black/20">
      <ActivityIndicator size="large" color="[#00777B]" />

      <Text className="mt-4 text-lg font-semibold text-black">
        Generating QR Code...
      </Text>
    </View>
  );
}