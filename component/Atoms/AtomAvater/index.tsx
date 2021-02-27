import React from "react";
import { StyleSheet, Image } from "react-native";

type Props = {
  size?: "sm" | "lg" | null;
  url?: string;
};

export const AtomAvater: React.FC<Props> = ({ size, url }) => {
  const avaterSize = () => {
    switch (size) {
      case "sm":
        return { height: 32, width: 32 };
      case "lg":
        return { height: 70, width: 70 };
      default:
        return { height: 50, width: 50 };
    }
  };

  return (
    <Image
      style={[avaterSize(), { borderRadius: 100 }]}
      source={{
        uri: url ? url : "https://reactnative.dev/img/tiny_logo.png",
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
});
