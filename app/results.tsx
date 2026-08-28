import React from 'react'
import {Text, View} from 'react-native'
import { useLocalSearchParams } from 'expo-router';

export default function Results() {
  const { type, data } = useLocalSearchParams<{ type: string; data: string }>();
  return (
    <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-2xl font-bold text-gray-900">Scan Results</Text>
        <Text className="text-gray-500">Type: {type}</Text>
        <Text className="text-gray-500">Data: {data}</Text>
    </View>
  )
}