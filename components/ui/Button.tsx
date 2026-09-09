import { Pressable,Text, View, PressableProps } from "react-native";

type ButtonProps = PressableProps & {
    label: string;
    variant?: "primary" | "outline";
}

export function Button({label, variant = "primary", ...rest}: ButtonProps){
    const isPrimary = variant === "primary";
    return(
        <Pressable
         {...rest}
         className={isPrimary ? "w-full bg-primary rounded-xl px-5 py-5 items-center active:opacity-80" 
            : "border border-primary rounded-xl px-5 py-3 items-center active:opacity-70"
         }
        >
            <Text className={isPrimary ? "text-white font-medium" : "text-primary font-medium"}>
                {label}
            </Text>
        </Pressable>
    )
}