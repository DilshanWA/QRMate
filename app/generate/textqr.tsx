import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
} from 'react';

import {
  Text,
  View,
  TextInput,
  Pressable,
} from 'react-native';

import { buildTextQR } from '../../lib/qr/formatter';
import { router, useFocusEffect } from 'expo-router';
import LoadingScreen from '../../components/ui/loadingscreen';
import { Button } from '../../components/ui/Button';

export default function TextQR() {
  const [text, setText] = useState('');
  const [isLoading, setLoading] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useFocusEffect(
    useCallback(() => {
      setLoading(false);
      setText('');

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      };
    }, [])
  );

  const handleGenerateQR = () => {
    if (!text.trim() || isLoading) return;
    const qrValue = buildTextQR(text);
    setLoading(true);

    timeoutRef.current = setTimeout(() => {
      router.push({
        pathname: '/preview',
        params: {
          qrValue,
          type: 'text',
        },
      });

      timeoutRef.current = null;
    }, 1000);
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <View className="flex-1 bg-white p-6">
      <View className="flex-row justify-between">
        <Text className="mb-4 text-lg font-semibold">
          Enter Text
        </Text>

        <Text>{text.length}/1000</Text>
      </View>

      <View className="mb-6 mt-1">
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

      <View className="w-full flex-row justify-center items-center">
        <Button
          label="Generate QR Code"
          onPress={handleGenerateQR}
          disabled={isLoading}
          className=" w-full rounded-xl bg-[#00777B] px-6 py-3"
        />
      </View>
    </View>
  );
}