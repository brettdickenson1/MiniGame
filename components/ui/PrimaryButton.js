import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonContainer, styles.pressed]
            : styles.buttonContainer
        }
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonContainer: {
    backgroundColor: "#63aaf0",
    paddingVertical: 8,
    paddingHorizontal: 16,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 6,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
