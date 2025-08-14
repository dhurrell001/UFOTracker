import React from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import FilterButtonContainer from "../components/FilterButtonContainer";
import Title from "../components/Title";
import IntroText from "../components/IntroText";
import UFOMap from "../components/UFOMap";
import SearchModal from "../components/SearchModal";
import CurrentSearch from "../components/CurrentSearch";
import TestAsset from "../components/csvTest"; // Test asset loading
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
  setShowSearchModal,
  showSearchModal,
}) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Title />
      <IntroText />
      {/* <Button title="seacrh" onPress={() => setShowSearchModal(true)} /> */}
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
      {/* <View style={styles.filterContainer}>
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
      </View> */}
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
