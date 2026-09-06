import React from 'react'
import {Text, View} from 'react-native'
import { useLocalSearchParams } from 'expo-router';


export default function Results() {
  const { qrType, data } = useLocalSearchParams<{ qrType: string; data: string }>();
  return (
    <View className="flex-1 p-6 bg-white">
        <Text className="text-2xl font-bold text-gray-900">Scan Results</Text>
        <Text className="text-gray-500">Data: {data}</Text>
        <Text className="text-gray-500">QR Type: {qrType}</Text>
    </View>
  )
}