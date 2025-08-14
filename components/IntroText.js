import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AppDescription() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Explore historic UFO sightings across the U.S. and U.K., spanning from{" "}
        <Text style={styles.highlight}>1949</Text> to{" "}
        <Text style={styles.highlight}>2013</Text>. This collection contains
        over <Text style={styles.highlight}>80,000 documented entries</Text>.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 13,
    lineHeight: 20,
    // color: "#ddd",
    color: "#00BFFF",
    textAlign: "center",
  },
  highlight: {
    // color: "#fff",
    color: "#39FF14",
    fontWeight: "bold",
  },
});
