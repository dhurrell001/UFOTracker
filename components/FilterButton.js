import React from "react";

import { StyleSheet, Text, Button, TouchableOpacity, View } from "react-native";

export default function FilterButton({ label, onPress, selected }) {
  return (
    <>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
        <Text style={styles.queryText}>{selected}</Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  button: {
    // backgroundColor: "white",

    // borderColor: "silver",
    borderColor: "#39FF14",

    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    width: 90,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    // marginBottom: 10,
  },
  buttonText: {
    // color: "silver",
    color: "#00BFFF",

    // fontWeight: "bold",
    fontSize: 15,
  },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 10,
  },
  queryText: {
    color: "#FFFFFF",
    fontSize: 12,
    textAlign: "center",
    marginTop: 5,
    color: "#39FF14",
  },
});
