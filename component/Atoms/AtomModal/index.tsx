import React, { Component, ReactNode } from "react";
import { View, StyleSheet, Modal } from "react-native";

type Props = {
  modalVisible: boolean;
  contents: ReactNode;
};

export const AtomModal: React.FC<Props> = ({ modalVisible, contents }) => {
  return (
    <View style={styles.modalStyle}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalView}>{contents}</View>
      </Modal>
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
});
