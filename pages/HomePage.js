import React from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import FilterButtonContainer from "../components/FilterButtonContainer";
import Title from "../components/Title";
import IntroText from "../components/IntroText";
import UFOMap from "../components/UFOMap";

export default function HomePage({
  toggleLocation,
  setToggleLocation,
  setShowWherePickerModal,
  showWherePickerModal,
  filteredSightings,
  selectedLocation,
  setSelectedLocation,
  showWhatPickerModal,
  setShowWhatPickerModal,
  selectedShape,
  setSelectedShape,
}) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Title />
      <IntroText />
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

      <UFOMap
        toggleLocation={toggleLocation}
        filteredSightings={filteredSightings}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 10,
    backgroundColor: "#000011",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    // alignItems: "flex-start",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
