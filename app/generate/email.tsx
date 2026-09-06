import { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";

export default function EmailQR() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const generateQR = () => {
    const qrData = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;

    console.log(qrData);

    // Pass qrData to your QR preview/generator screen
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-6">

        {/* Header */}
        <Text className="text-2xl font-bold text-slate-900">
          Create Email QR
        </Text>

        <Text className="text-slate-500 mt-2 mb-6">
          Create a QR code that opens an email with pre-filled details.
        </Text>

        {/* Email */}
        <Text className="text-base font-semibold text-slate-800 mb-2">
          Email Address *
        </Text>

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="example@email.com"
          keyboardType="email-address"
          autoCapitalize="none"
          className="border border-slate-300 rounded-lg p-3 mb-5"
        />

        {/* Subject */}
        <Text className="text-base font-semibold text-slate-800 mb-2">
          Subject
        </Text>

        <TextInput
          value={subject}
          onChangeText={setSubject}
          placeholder="Email subject"
          className="border border-slate-300 rounded-lg p-3 mb-5"
        />

        {/* Message */}
        <Text className="text-base font-semibold text-slate-800 mb-2">
          Message
        </Text>

        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Write your message..."
          multiline
          textAlignVertical="top"
          className="border border-slate-300 rounded-lg p-3 h-32 mb-6"
        />
      </View>
    </ScrollView>
  );
}