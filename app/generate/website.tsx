import React,{useState} from 'react'
import {
  Text, 
  View,
  TextInput,
  Pressable,

} from 'react-native';

export default function Website() {
  const [url, setUrl] = useState('');

  const handleGenerateQR = () => {
    const qrData = url;
    console.log(qrData);
  }

  return (
    <View className="flex-1 bg-white p-6">
      <Text className="text-lg font-semibold">Enter Valid URL</Text>
      <View className="mt-3">
        <TextInput
          value={url}
          onChangeText={setUrl}
          placeholder="Enter website URL"
          textAlignVertical="top"
          url-keyboard-type="true"
          className="border border-slate-300 rounded-xl bg-slate-50 p-2 py-4 text-base text-slate-900"
        />
      </View>
      <View className="mt-auto">
          <Pressable
              onPress={handleGenerateQR}
              className={`items-center justify-center rounded-xl py-4 ${url ? 'bg-[#00777B]' : 'bg-slate-300'}`}
          >
            <Text className={`text-base font-semibold ${url ? 'text-white' : 'text-slate-500'}`}>Generate QR</Text>
          </Pressable>
      </View>
    </View>
  )
}
