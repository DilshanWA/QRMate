import { 
  View, 
  Text, 
  TextInput,
  Switch,
  Pressable
} from 'react-native'
import React from 'react';

export default function Wifi() {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  return (
    <View className="flex-1 bg-white p-6">
      <View className="mt-3">
        <Text className="text-base font-medium text-slate-900 mb-3">SSID (Wi-Fi Network Name)</Text>
        <TextInput
          placeholder="Enter Wi-Fi SSID"
          textAlignVertical="top"
          className="border border-slate-300 rounded-xl bg-slate-50 p-2 py-4 text-base text-slate-900"
        />
      </View>
      <View className="mt-3 flex-row items-center justify-between">
        <Text className="text-base font-medium text-gray-00 ">Password?</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={setIsEnabled}
          value={isEnabled}
        />
      </View>
      {isEnabled && (
        <View className="mt-3">
          <Text className="text-base font-medium text-slate-900 mb-3">Password</Text>
          <TextInput
            placeholder="Enter Wi-Fi Password"
            textAlignVertical="top"
            secureTextEntry={!passwordVisible}
            className="border border-slate-300 rounded-xl bg-slate-50 p-2 py-4 text-base text-slate-900"
          />
          <Pressable>
            <Text className="text-blue-500 mt-2" onPress={() => setPasswordVisible(!passwordVisible)}>
              {passwordVisible ? 'Hide Password' : 'Show Password'}
            </Text>
          </Pressable>
        </View>

      )}
    </View>
  )
}