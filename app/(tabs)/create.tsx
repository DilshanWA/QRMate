import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { useRouter } from 'expo-router'
import {
  Globe,
  ScanText,
  Wifi,
  UserRound,
  Mail,
  MessageSquare,
  MapPin,
  CalendarDays,
  MoreHorizontal,
} from "lucide-react-native";

export default function Create() {
  const router = useRouter();

  const qrCode = [
    {
      type: 'text',
      icon: ScanText,
      title: "Text",
      onPress: () => router.push('/QrScreens/textqr'),
    },
    {
      title: "Website",
      icon: Globe,
      onPress: () => console.log("Website"),
    },
    {
      title: "Wi-Fi",
      icon: Wifi,
      onPress: () => console.log("Wi-Fi"),
    },
    {
      title: "Contact",
      icon: UserRound,
      onPress: () => console.log("Contact"),
    },
    {
      title: "Email",
      icon: Mail,
      onPress: () => console.log("Email"),
    },
    {
      title: "Message",
      icon: MessageSquare,
      onPress: () => console.log("Message"),
    },
    {
      title: "Location",
      icon: MapPin,
      onPress: () => console.log("Location"),
    },
    {
      title: "Event",
      icon: CalendarDays,
      onPress: () => console.log("Event"),
    },
    {
      title: "More",
      icon: MoreHorizontal,
      onPress: () => console.log("More"),
    },
  ]

  return (
    <View className='flex-1 bg-white p-6'>
      <Text className='text-2xl font-bold text-gray-900'>Generate QR Code</Text>
      <Text className='text-gray-500'>Create your own QR code</Text>
      <View className='flex-row flex-wrap mt-10'> 
        <View className="flex-row flex-wrap justify-between">
          {qrCode.map((item, index) => {
            const Icon = item.icon;

            return (
              <Pressable
                key={index}
                onPress={item.onPress}
                className="w-[31%] aspect-square rounded-2xl p-2 bg-white border border-gray-200 items-center justify-center mb-6 active:opacity-70"
                style={{
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 0,
                  },
                  shadowOpacity: 0.08,
                  shadowRadius: 8,
                  elevation: 3,
                }}
              >
                <Icon
                  size={30}
                  color="#00777B"
                  strokeWidth={1.8}
                />

                <Text className="text-gray-900 font-semibold text-base mt-4">
                  {item.title}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  )
}
