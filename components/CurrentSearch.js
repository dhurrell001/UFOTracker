import React from "react";
import { Modal, View, StyleSheet, Text, TouchableOpacity } from "react-native";
export default function CurrentSearch({
  selectedLocation,
  selectedShape,
  selectedDate,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Search Criteria</Text>
      <View style={styles.content}>
        <Text style={styles.description}>
          Location: {selectedLocation || "Not specified"}
        </Text>
        <Text style={styles.description}>
          Shape: {selectedShape || "Not specified"}
        </Text>
        <Text style={styles.description}>
          When : {selectedDate || "Not specified"}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderWidth: 1,
    borderColor: "#39FF14", // neon green border
    // marginTop: 20,
    width: "70%",
  },
  content: {
    // flexDirection: "row",
    width: "100%",
    padding: 5,
    backgroundColor: "#111122",
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 13,
    color: "#00BFFF",
    marginBottom: 5,
    marginTop: 10,
    textShadowColor: "#00FFFF",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  description: {
    fontSize: 13,
    color: "#FFFFFF",
    marginBottom: 5,
    textShadowColor: "#00FFFF",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
});
