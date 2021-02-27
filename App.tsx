import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";

import { AtomButton } from "./component/Atoms/AtomButton/index";
import { AtomTextInput } from "./component/Atoms/AtomTextInput/index";
import { AtomSelectbox } from "./component/Atoms/AtomSelectbox/index";
import { AtomDatePicker } from "./component/Atoms/AtomDatePicker/index";
import { AtomAvater } from "./component/Atoms/AtomAvater/index";
import { AtomTextarea } from "./component/Atoms/AtomTextarea/index";

import { IconFacebook } from "./component/icons/IconFacebook/index";

type Props = {};

export const App: React.FC<Props> = ({}) => {
  const [value, onChangeText] = useState("");
  const [selectvalue, setSelectValue] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <Text>HomeScreen</Text>
      <AtomButton
        title={"クリック"}
        colorCode={"#DDDDDD"}
        size={"md"}
        onPress={() => console.log("OK")}
      />
      <AtomTextInput
        value={value}
        onChangeText={onChangeText}
        label={"label"}
        placeholder={"placeholder"}
      />
      <IconFacebook />
      <AtomAvater />
      <AtomSelectbox
        value={selectvalue}
        label={"駐車場"}
        onValueChange={setSelectValue}
      />
      <AtomDatePicker pickerMode={"date"} />
      <AtomTextarea
        value={value}
        onChangeText={onChangeText}
        label={"label"}
        placeholder={"placeholder"}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
