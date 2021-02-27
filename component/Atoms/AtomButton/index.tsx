import React from "react";
import { TouchableOpacity, Text, ColorValue, StyleProp } from "react-native";

type Props = {
  title: string;
  colorCode: ColorValue;
  size?: "sm" | "md" | "lg" | null;
  onPress: () => void;
};

export const AtomButton: React.FC<Props> = ({
  title,
  colorCode,
  size,
  onPress,
}) => {
  const buttonSize = () => {
    switch (size) {
      case "sm":
        return { height: 50, width: 150 };
      case "md":
        return { height: 50, width: 250 };
      case "lg":
        return { height: 50, width: 300 };
      default:
        return { height: 50, width: 200 };
    }
  };

  const buttonStyle: any = {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colorCode,
    ...buttonSize(),
  };

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
