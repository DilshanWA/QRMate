import { View, Text } from "react-native";
import QRCode from "react-native-qrcode-svg";
import { useLocalSearchParams } from 'expo-router';

export default function QRResultScreen() {
  const { qrValue } = useLocalSearchParams<{ qrValue: string }>();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>QR CODE</Text>
      <QRCode
        value={qrValue}
        size={250}
      />
    </View>
  );
}