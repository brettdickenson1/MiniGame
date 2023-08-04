import { StyleSheet, Text, View } from "react-native";
import React from "react";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Opponent's Guess</Text>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 25,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderColor: "white",
    borderWidth: 5,
    padding: 12,
  },
});
