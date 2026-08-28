import React from 'react'
import { useState,  } from 'react'
import { View,Text, Pressable } from 'react-native'
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera'
import { ScanLine, Camera, Flashlight, Image } from 'lucide-react-native';
import { useRouter, useFocusEffect } from 'expo-router';

export default function Scan() {
  const router = useRouter();
  const[permission,requirePermission] = useCameraPermissions();
  const [scanned, setScaned] = useState(false);
  const [torch, setTorch] = useState(false);

  useFocusEffect (
    React.useCallback(() => {
      setScaned(false);

      return () => {
        setScaned(false);
      }
    }, [])
  );

    if(!permission){
      return(
        <View className="flex-1 items-center justify-center">
          <Text className="text-md font-Regular text-white">Loading camera...</Text>
        </View>
      )
    }


  if(!permission.granted){
     return (
      <View className="flex-1 bg-white items-center justify-center px-8">
        <View className="w-20 h-20 rounded-full bg-teal-50 items-center justify-center mb-5">
          <Camera size={40} color="#008B8B" />
        </View>

        <Text className="text-2xl font-bold text-gray-900 text-center">
          Camera Permission
        </Text>

        <Text className="text-gray-500 text-center mt-3 mb-7">
          We need access to your camera to {"\n"} scan QR codes.
        </Text>

        <Pressable
          onPress={requirePermission}
          className="bg-[#008B8B] rounded-2xl w-full py-4 items-center"
        >
          <Text className="text-white font-bold text-base">
            Allow Camera
          </Text>
        </Pressable>
      </View>
    )
  }

  const handleBarCodeScanned = ({
    type,
    data,
  }:{
    type: string;
    data:string;
  }) =>{
    if(scanned) return;
    setScaned(true);
    router.push({
      pathname: '/results',
      params: { 
        type: type.toString(), 
        data: data.toString(),
      },
    });
  }
  
  return(
    <View className="flex-1 bg-black">
      <CameraView
        style={{ flex: 1 }}
        facing='back'
        enableTorch={torch}
        barcodeScannerSettings={{
            barcodeTypes: [
            "qr",
            "ean13",
            "ean8",
            "upc_a",
            "upc_e",
            "code39",
            "code93",
            "code128",
            "codabar",
            "itf14",
                ],
        }}
        onBarcodeScanned = {
          scanned ? undefined : handleBarCodeScanned
        }
      />

      <View
        pointerEvents="box-none"
        className="absolute inset-0 bg-black/35 "
      />
      <View className="absolute inset-0 items-center justify-center">
            <View className="top-0 right-0 absolute p-2 bg-white/20 rounded-md border border-white/30 m-5">
              <Image size={24} color="#ffffff"/>
            </View>
          <View className="flex-1 items-center justify-center">
            <View className="w-[280px] h-[280px] relative">
              <View className="absolute top-0 left-0 w-12 h-12 border-l-4 border-t-4 border-white rounded-tl-xl" />
              <View className="absolute top-0 right-0 w-12 h-12 border-r-4 border-t-4 border-white rounded-tr-xl" />
              <View className="absolute bottom-0 left-0 w-12 h-12 border-l-4 border-b-4 border-white rounded-bl-xl" />
              <View className="absolute bottom-0 right-0 w-12 h-12 border-r-4 border-b-4 border-white rounded-br-xl" />
            </View>

            <Text className="text-white text-base font-medium mt-8">
              Align the QR code inside the frame
            </Text>

            <Text className="text-white/70 text-sm mt-2">
              Scanning will happen automatically
            </Text>
        </View>

        <Pressable
          onPress={() => setTorch(!torch)}
          className="absolute bottom-20 bg-white/20 p-4 rounded-full"
        >
          <Flashlight size={24} color={torch ? "#ffc401" : "#ffffff"} />
        </Pressable>
      </View>

    </View>
  )
}  
