import { ScrollView, View, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";

export default function MessageQR() {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const generateQR = () => {
    const qrData = `sms:${phone}?body=${encodeURIComponent(message)}`;

    console.log(qrData);
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-6">

        {/* Header */}
        <Text className="text-2xl font-bold text-slate-900">
          Create Message QR
        </Text>

        <Text className="text-slate-500 mt-2 mb-6">
          Create a QR code that opens an SMS with a pre-filled message.
        </Text>

        {/* Phone Number */}
        <Text className="text-base font-semibold text-slate-800 mb-2">
          Phone Number *
        </Text>

        <TextInput
          value={phone}
          onChangeText={setPhone}
          placeholder="+94 77 123 4567"
          keyboardType="phone-pad"
          className="border border-slate-300 rounded-lg p-3 mb-5"
        />

        {/* Message */}
        <Text className="text-base font-semibold text-slate-800 mb-2">
          Message *
        </Text>

        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Write your message..."
          multiline
          textAlignVertical="top"
          className="border border-slate-300 rounded-lg p-3 h-32 mb-6"
        />

        {/* Generate Button */}
        <Pressable
          onPress={generateQR}
          disabled={!phone.trim() || !message.trim()}
          className={`rounded-lg p-4 items-center ${
            phone.trim() && message.trim()
              ? "bg-[#00777B]"
              : "bg-slate-300"
          }`}
        >
          <Text className="text-white font-bold text-base">
            Generate QR Code
          </Text>
        </Pressable>

      </View>
    </ScrollView>
  );
}