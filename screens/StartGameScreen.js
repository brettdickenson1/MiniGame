import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitilize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonStyle}>
        <View style={styles.buttonSingle}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
        <View style={styles.buttonSingle}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    backgroundColor: "#a2d2ff",
    borderRadius: 8,
    marginHorizontal: 24,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 5, height: 5 },
    shadowRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#fefae0",
    borderBottomWidth: 2,
    color: "white",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonStyle: {
    flexDirection: "row",
  },
  buttonSingle: {
    flex: 1,
  },
});
