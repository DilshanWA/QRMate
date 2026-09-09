import { View, ViewProps } from "react-native";

export function Card({ className, ...rest }: ViewProps & { className?: string }) {
  return <View {...rest} className={`bg-white rounded-2xl p-5 shadow-sm ${className ?? ""}`} />;
}