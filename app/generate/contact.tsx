import { ScrollView, Text, TextInput, View } from "react-native";

export default function ContactScreen() {
  return (
   <View className="flex-1 bg-white ">
    <ScrollView className="flex-1 bg-white">
      <View className="p-6">
        <Text className="text-2xl font-bold mb-6">
          Create Contact
        </Text>

        <Text className="font-semibold mb-2">First Name</Text>
        <TextInput
          placeholder="Enter first name"
          className="border border-gray-300 rounded-lg p-3 mb-4"
        />

        <Text className="font-semibold mb-2">Last Name</Text>
        <TextInput
          placeholder="Enter last name"
          className="border border-gray-300 rounded-lg p-3 mb-4"
        />

        <Text className="font-semibold mb-2">Phone</Text>
        <TextInput
          placeholder="Enter phone number"
          keyboardType="phone-pad"
          className="border border-gray-300 rounded-lg p-3 mb-4"
        />

        <Text className="font-semibold mb-2">Email</Text>
        <TextInput
          placeholder="Enter email"
          keyboardType="email-address"
          className="border border-gray-300 rounded-lg p-3 mb-4"
        />

        <Text className="font-semibold mb-2">Company</Text>
        <TextInput
          placeholder="Enter company"
          className="border border-gray-300 rounded-lg p-3 mb-4"
        />

        <Text className="font-semibold mb-2">Job Title</Text>
        <TextInput
          placeholder="Enter job title"
          className="border border-gray-300 rounded-lg p-3 mb-4"
        />

        <Text className="font-semibold mb-2">Website</Text>
        <TextInput
          placeholder="https://example.com"
          className="border border-gray-300 rounded-lg p-3 mb-4"
        />

        <Text className="font-semibold mb-2">Notes</Text>
        <TextInput
          placeholder="Add notes..."
          multiline
          className="border border-gray-300 rounded-lg p-3 h-24 mb-6"
        />

        <View className="h-20" />
      </View>
    </ScrollView>
  </View> 
  );
}