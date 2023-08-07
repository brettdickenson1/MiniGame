import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Title = ({ children }) => {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 32,
    color: "white",
    textAlign: "center",
    borderColor: "white",
    borderWidth: 5,
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
