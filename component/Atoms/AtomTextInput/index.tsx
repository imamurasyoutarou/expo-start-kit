import React from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";

type Props = {
  label: string;
  value: string;
  onChangeText: Function;
  placeholder: string;
};

export const AtomTextInput: React.FC<Props> = ({
  label,
  value,
  onChangeText,
  placeholder,
}) => {
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
      <TextInput
        style={{
          height: 40,
          width: 300,
          borderColor: "#CCCCCC",
          borderWidth: 1,
        }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        placeholder={placeholder}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});
