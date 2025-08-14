import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleTwo}>historic</Text>
      <Text style={styles.title}>
        <Text style={styles.glow}>🛸 UFO 🛸</Text>
      </Text>
      <Text style={styles.titleTwo}>Tracker</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  titleTwo: {
    fontSize: 16,
    color: "#00BFFF",
  },
  glow: {
    color: "#39FF14",
    textShadowColor: "rgba(255, 255, 150, 0.9)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10, // bigger = softer glow
  },
});
