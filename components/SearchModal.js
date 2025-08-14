import React, { useState } from "react";
import { Modal, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";
import FilterButtonContainer from "./FilterButtonContainer";
import CurrentSearch from "./CurrentSearch";
export default function WhatPickerModal({
  showWherePickerModal,
  setShowWherePickerModal,
  selectedLocation,
  setSelectedLocation,
  setSelectedShape,
  showWhatPickerModal,
  selectedShape,

  showSearchModal,
  setShowSearchModal,
  toggleLocation,
  setToggleLocation,
  setShowWhatPickerModal,

  filteredSightings,
  setFilteredSightings,
  database,
  setDatabase,
}) {
  function handlePress() {
    setShowSearchModal(!showSearchModal);
  }
  return (
    <Modal
      transparent
      animationType="fade"
      visible={showSearchModal}
      onRequestClose={() => setShowSearchModal(false)}
    >
      {/* Background Overlay */}
      <LinearGradient
        colors={["#000011", "#000033", "#001144", "#001a66"]}
        style={styles.modalBackground}
      >
        <View style={styles.overlay} />

        {/* Modal Content */}
        <View style={styles.filterContainer}>
          <FilterButtonContainer
            setToggleLocation={setToggleLocation}
            toggleLocation={toggleLocation}
            setShowWherePickerModal={setShowWherePickerModal}
            showWherePickerModal={showWherePickerModal}
            setShowWhatPickerModal={setShowWhatPickerModal}
            showWhatPickerModal={showWhatPickerModal}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            selectedShape={selectedShape}
            setSelectedShape={setSelectedShape}
          />
          <CurrentSearch
            selectedLocation={selectedLocation}
            selectedShape={selectedShape}
          />
        </View>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => setShowSearchModal(false)}
        >
          Close
        </TouchableOpacity>
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
  filterContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    // alignItems: "flex-start",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
