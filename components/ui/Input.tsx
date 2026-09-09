import { TextInput, TextInputProps } from "react-native";

export function Input(props: TextInputProps) {
  return (
    <TextInput
      {...props}
      placeholderTextColor="#8A9797"
      className="bg-white border border-neutral-200 rounded-xl px-4 py-3 text-base text-neutral-900"
    />
  );
}