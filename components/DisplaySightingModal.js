import React, { useState } from "react";
import {
  Modal,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

export default function WherePickerModal({
  selectedSighting,
  sightingModalVisible,
  setSightingModalVisible,
}) {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={sightingModalVisible}
      onRequestClose={() => setSightingModalVisible(false)}
    >
      {/* Background Overlay */}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <LinearGradient
          colors={["#000011", "#000033", "#001144", "#001a66"]}
          style={styles.modalBackground}
        >
          <View style={styles.overlay} />

          {/* Modal Content */}
          <View style={styles.modalContent}>
            <Text style={styles.title}>UFO Sighting</Text>
            <Text style={styles.description}>
              {selectedSighting
                ? `Location: ${selectedSighting.city}, ${selectedSighting.state}, ${selectedSighting.country}`
                : "No details available."}{" "}
            </Text>
            <Text style={styles.description}>
              {selectedSighting ? `Date: ${selectedSighting.datetime}` : ""}
            </Text>
            <Text style={styles.description}>
              {selectedSighting ? `Shape: ${selectedSighting.shape}` : ""}
            </Text>

            <Text style={styles.description}>
              {selectedSighting
                ? `Duration (hours): ${selectedSighting.duration_hours}`
                : ""}{" "}
            </Text>
            <Text style={styles.description}>
              {selectedSighting
                ? selectedSighting.comments
                : "No details available."}
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setSightingModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
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
  description: {
    color: "white",
    marginBottom: 15,
    textAlign: "center",
  },
});
