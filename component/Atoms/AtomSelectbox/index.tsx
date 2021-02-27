import React from "react";
import { StyleSheet, Text } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { AntDesign } from "@expo/vector-icons";

type Props = {
  label: string;
  onValueChange: Function;
  value: string;
  placeholder?: string | null;
};

export const AtomSelectbox: React.FC<Props> = ({
  label,
  onValueChange,
  value,
  placeholder,
}) => {
  const typeParkingItems = [
    { label: "あり", value: "あり", key: "あり" },
    { label: "なし", value: "なし", key: "なし" },
    { label: "不明", value: "不明", key: "不明" },
  ];

  return (
    <>
      <Text
        style={{
          paddingBottom: 8,
          fontSize: 15,
        }}
      >
        {label}
      </Text>
      <RNPickerSelect
        placeholder={{
          label: placeholder ? placeholder : "選択して下さい",
          color: "gray",
        }}
        value={value}
        style={selectboxStyles}
        onValueChange={(value) => onValueChange(value)}
        items={typeParkingItems}
        Icon={() => {
          return <AntDesign name="down" size={20} color="gray" />;
        }}
        // itemKey={}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

const selectboxStyles = StyleSheet.create({
  inputIOS: { height: 40, width: 300, borderColor: "#CCCCCC", borderWidth: 1 },
  inputAndroid: {
    height: 40,
    width: 300,
    borderColor: "#CCCCCC",
    borderWidth: 1,
    color: "black",
  },
  iconContainer: {
    top: 10,
    right: 90,
    color: "black",
  },
});
