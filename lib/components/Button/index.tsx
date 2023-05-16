import {
  Pressable,
  PressableProps,
  Text,
  TextProps,
  View,
  ViewProps,
} from "react-native";
import clsx from "clsx";
import Validations, { ValidationsProps } from "../Validations";

export type ButtonProps = {
  variant?: "contained" | "outlined" | "text";
  size?: "lg" | "md" | "sm";
  _Text?: TextProps;
  _Pressable?: PressableProps;
  _Validations?: ValidationsProps;
} & ViewProps &
  Pick<PressableProps, "onPress">;

export default function Button(props: ButtonProps) {
  const {
    variant = "contained",
    size = "md",
    children,
    className,
    _Text,
    _Pressable,
    _Validations,
    onPress,
    ...rest
  } = props;

  return (
    <View {...rest}>
      <Pressable
        onPress={onPress}
        {..._Pressable}
        className={clsx(
          "rounded-full px-2 h-14 items-center justify-center",
          {
            //variants
            "bg-primary-main active:bg-primary-main-active":
              variant === "contained",
            "border-[2px] border-solid border-primary-main active:border-primary-main-active active:bg-primary-empty-active":
              variant === "outlined",
            "bg-primary-empty active:bg-primary-empty-active":
              variant === "text",
            //sizes
            "h-8 rounded-full": size === "sm",
          },
          _Pressable?.className
        )}
      >
        {typeof children === "string" ? (
          <Text
            {..._Text}
            className={clsx(
              "color-white font-bold",
              {
                "color-primary-text font-normal": variant === "text",
                "text-sm": size === "sm",
              },
              _Text?.className
            )}
          >
            {children}
          </Text>
        ) : (
          children
        )}
      </Pressable>
      <Validations {..._Validations} />
    </View>
  );
}
