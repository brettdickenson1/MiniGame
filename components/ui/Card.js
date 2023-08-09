import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 20,
    // width: deviceWidth > 2000 ? 10 : 500,
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
