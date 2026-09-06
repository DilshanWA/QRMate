import React, { useState } from 'react'
import { 
  Text, 
  View,
  TextInput,
} from 'react-native';;

export default function TextQR() {
  const [text, setText] = useState('');

  const handleGenerateQR = () => {
    const qrData = text;
    console.log(qrData);
    // Pass qrData to your QR preview/generator screen
  }

  return (
    <View className="flex-1 bg-white p-6">
      <View className='flex flex-row justify-between'>
        <Text className='text-lg font-semibold mb-4'>Enter Text</Text>
        <Text>{text.length}/1000</Text>
      </View>
      <View className="mt-1 mb-6">
        <TextInput
           value={text}
           onChangeText={setText}
           placeholder="Enter text here"
           multiline
           maxLength={1000}
           textAlignVertical="top"
           className="h-[160px] rounded-xl border border-slate-300 bg-slate-50 p-2 text-base text-slate-900"
        />
      </View>
    </View>
    )
  }
