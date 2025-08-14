import React, { useState } from "react";
import { Modal, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";

export default function WherePickerModal({
  showWherePickerModal,
  setShowWherePickerModal,
  selectedLocation,
  setSelectedLocation,
}) {
  const locations = [
    { label: "United States", value: "us" },
    { label: "United Kingdom", value: "gb" },
    { label: "Canada", value: "CA" },
    { label: "Australia", value: "AU" },
    { label: "India", value: "IN" },
  ];
  function handleLocationChange(value) {
    setSelectedLocation(value.toLowerCase());
    setShowWherePickerModal(false);

    console.log("Selected Location:", value); // Debugging output
  }
  return (
    <Modal
      transparent
      animationType="fade"
      visible={showWherePickerModal}
      onRequestClose={() => setShowWherePickerModal(false)}
    >
      {/* Background Overlay */}
      <LinearGradient
        colors={["#000011", "#000033", "#001144", "#001a66"]}
        style={styles.modalBackground}
      >
        <View style={styles.overlay} />

        {/* Modal Content */}
        <View style={styles.modalContent}>
          <Text style={styles.title}>🛸 Choose a Location</Text>
          <Picker
            selectedValue={selectedLocation}
            onValueChange={(value) => setSelectedLocation(value)}
            style={styles.picker}
          >
            <Picker.Item
              label="Select a location..."
              value=""
              color="#FFFFFF"
            />
            {locations.map((loc) => (
              <Picker.Item
                key={loc.value}
                label={loc.label}
                value={loc.value}
                color="#FFFFFF" // force white text
              />
            ))}
          </Picker>

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => handleLocationChange(selectedLocation)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)", // transparent dark overlay
  },
  modalContent: {
    backgroundColor: "#111122",
    padding: 20,
    borderRadius: 15,
    width: "80%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#39FF14", // neon green border
    shadowColor: "#39FF14",
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
  },
  title: {
    fontSize: 18,
    // color: "#39FF14",
    color: "#00BFFF",
    marginBottom: 15,
    textShadowColor: "#00FFFF",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  picker: {
    width: "100%",
    color: "white",
  },
  closeButton: {
    marginTop: 15,
    // backgroundColor: "#39FF14",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#39FF14",
  },
  closeButtonText: {
    color: "#00BFFF",
    fontWeight: "bold",
  },
});
