import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 36,
    backgroundColor: Colors.lightBlue,
    borderRadius: 8,
    marginHorizontal: 24,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
});
