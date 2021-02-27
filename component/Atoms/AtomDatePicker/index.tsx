import React, { useState } from "react";
import {
  View,
  Platform,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { AtomButton } from "../AtomButton";
import { AtomModal } from "../AtomModal";

type Props = {
  pickerMode: "date" | "time";
};

export const AtomDatePicker: React.FC<Props> = ({ pickerMode }) => {
  const [date, setDate] = useState(new Date());
  const [showText, setShowText] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const onChange = (_: any, selectedDate: any) => {
    setShowText(true);
    setDate(selectedDate);
  };

  const showModal = () => {
    modalVisible
      ? setModalVisible(false)
      : setModalVisible(Platform.OS === "ios");
  };

  const getDateWithString = () => {
    var y = date.getFullYear();
    var m = ("00" + (date.getMonth() + 1)).slice(-2);
    var d = ("00" + date.getDate()).slice(-2);
    var result = y + "/" + m + "/" + d;
    return result;
  };

  const datePickerContents = () => {
    return (
      <>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={pickerMode}
          display="spinner"
          onChange={onChange}
        />

        <AtomButton
          title={"設定"}
          colorCode={"#DDDDDD"}
          size={"md"}
          onPress={() => showModal()}
        />
        <AtomButton
          title={"戻る"}
          colorCode={"#DDDDDD"}
          size={"md"}
          onPress={() => showModal()}
        />
      </>
    );
  };

  return (
    <View>
      <TouchableOpacity style={styles.buttonStyle} onPress={showModal}>
        {showText ? (
          <Text>{getDateWithString()}</Text>
        ) : (
          <Text style={{ color: "#CCCCCC" }}>
            {pickerMode === "date" ? "日付" : "時間"}
          </Text>
        )}
      </TouchableOpacity>

      <AtomModal contents={datePickerContents()} modalVisible={modalVisible} />
    </View>
  );
};

const styles = StyleSheet.create({
  modalStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    marginTop: 100,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 50,
  },

  buttonStyle: {
    justifyContent: "center",
    height: 40,
    width: 300,
    borderColor: "#CCCCCC",
    borderWidth: 1,
  },
});
