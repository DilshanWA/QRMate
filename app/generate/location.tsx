import {
  ScrollView,
  View,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import MapView, { Marker, MapPressEvent } from "react-native-maps";
import { useState } from "react";

export default function LocationQR() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const [location, setLocation] = useState({
     latitude: 6.9271,
    longitude: 79.8612,
  });

  const handleMapPress = (event: MapPressEvent) => {
    setLocation(event.nativeEvent.coordinate);
  };

  const generateQR = () => {
    const { latitude, longitude } = location;

    const qrData = `geo:${latitude},${longitude}`;

    console.log(qrData);
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-6">

        {/* Header */}
        <Text className="text-2xl font-bold text-slate-900">
          Create Location QR
        </Text>

        <Text className="text-slate-500 mt-2 mb-6">
          Select a location on the map and create a QR code.
        </Text>

        {/* Location Name */}
        <Text className="text-base font-semibold text-slate-800 mb-2">
          Location Name
        </Text>

        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="e.g. My Home"
          className="border border-slate-300 rounded-lg p-3 mb-5"
        />

        {/* Address */}
        <Text className="text-base font-semibold text-slate-800 mb-2">
          Address
        </Text>

        <TextInput
          value={address}
          onChangeText={setAddress}
          placeholder="Enter address"
          multiline
          className="border border-slate-300 rounded-lg p-3 mb-5"
        />

        <Text className="text-base font-semibold text-slate-800 mb-2">
          Select Location
        </Text>

        <View className="h-72 rounded-xl overflow-hidden mb-4">
          <MapView
            className="flex-1"
            initialRegion={{
              latitude: 6.9271,
              longitude: 79.8612,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
            onPress={handleMapPress}
          >
          <Marker coordinate={location} />
        </MapView>
        </View>

        <View className="flex-row gap-3 mb-6">
          <View className="flex-1">
            <Text className="text-sm text-slate-500 mb-1">
              Latitude
            </Text>

            <TextInput
              value={location.latitude.toFixed(6)}
              editable={true}
              className="border border-slate-300 rounded-lg p-3"
            />
          </View>

          <View className="flex-1">
            <Text className="text-sm text-slate-500 mb-1">
              Longitude
            </Text>

            <TextInput
              value={location.longitude.toFixed(6)}
              editable={true}
              className="border border-slate-300 rounded-lg p-3"
            />
          </View>
        </View>

        <Pressable
          onPress={generateQR}
          className="bg-[#00777B] rounded-lg p-4 items-center"
        >
          <Text className="text-white font-bold text-base">
            Generate QR Code
          </Text>
        </Pressable>

      </View>
    </ScrollView>
  );
}