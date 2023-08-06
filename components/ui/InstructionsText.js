import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const InstructionsText = ({ children, style }) => {
  return <Text style={[styles.instructionTexts, style]}>{children}</Text>;
};

export default InstructionsText;

const styles = StyleSheet.create({
  instructionTexts: {
    fontFamily: "open-sans-bold",
    color: Colors.midBlue,
    fontSize: 24,
  },
});
