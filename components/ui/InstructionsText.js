import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const InstructionsText = ({ children }) => {
  return <Text style={styles.instructionText}>{children}</Text>;
};

export default InstructionsText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.midBlue,
    fontSize: 24,
  },
});
