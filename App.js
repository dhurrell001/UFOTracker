import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./pages/HomePage";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect, use } from "react";
import setupDatabase from "./components/UFODatabase"; // Assuming this is the correct import path
import SetupDatabaseFast from "./components/ufoDatabaseFast";
import { getSightingsByCountry } from "./components/DatabaseQueries";
import { getSightingsByShape } from "./components/DatabaseQueries";
import { getSightingsByShapeAndLocation } from "./components/DatabaseQueries";
import WherePickerModal from "./components/WherePickerModal";
import WhatPickerModal from "./components/WhatPickerModal";
import SearchModal from "./components/SearchModal"; // Assuming this is the correct import path
export default function App() {
  const [toggleLocation, setToggleLocation] = useState("gb");
  const [database, setDatabase] = useState(null);
  const [filteredSightings, setFilteredSightings] = useState([]);
  const [showWherePickerModal, setShowWherePickerModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showWhatPickerModal, setShowWhatPickerModal] = useState(false);
  const [selectedShape, setSelectedShape] = useState("");
  const [showSearchModal, setShowSearchModal] = useState(false);
  useEffect(() => {
    (async () => {
      console.log("Setting up database...");
      const db = await SetupDatabaseFast();
      setDatabase(db);
      // console.log("limitedRows ");
      // const limitedRows = await db.getAllAsync(
      //   "SELECT * FROM sightings LIMIT 100"
      // );
      // console.log("Limited rows count:", limitedRows.length);

      // console.log("DB object:", db);
      console.log("Database setup complete");
      // Query inside async function with await
      // const filtered = await getSightingsByCountry(database, "gb"); // lowercase or uppercase depending on data
      // console.log("Filtered Sightings:", filtered);
      // setFilteredSightings(filtered);
      // const sightings = await getSightingsByCountry(database, "gb");
      // console.log("Sightings by country:", sightings.length);
      // setFilteredSightings(sightings);
      // const shapes = await getSightingsByShape(database, "circle");
      // console.log("Sightings by shape:", shapes.length);
      // setFilteredSightings(shapes);
      // console.log(filteredSightings[5]);
    })();
  }, []);

  useEffect(() => {
    // Only run if we have both database and a selected location
    if (selectedLocation && selectedShape) {
      console.log(
        "Filtering sightings by shape and location:",
        selectedShape,
        selectedLocation
      );
      (async () => {
        const shapeLocationSightings = await getSightingsByShapeAndLocation(
          database,
          selectedShape,
          selectedLocation
        );
        setFilteredSightings(shapeLocationSightings);
        console.log(
          "Filtered Sightings by shape and location:",
          shapeLocationSightings.length
        );
      })();
    }
    if (!database || !selectedLocation) return;

    // (async () => {
    //   console.log("Filtering sightings by location:", selectedLocation);

    //   // Query the database for sightings in the selected location
    //   const locationSightings = await getSightingsByCountry(
    //     database,
    //     selectedLocation
    //   );
    //   // console.log(filteredSightings);

    //   setFilteredSightings(locationSightings);

    //   console.log("Filtered Sightings by location:", locationSightings.length);
    // })(); // <-- immediately invoked
  }, [selectedLocation, selectedShape, database]); // dependencies

  if (!database) {
    return (
      <View style={styles.container}>
        <Text>Loading database...</Text>
      </View>
    );
  }

  return (
    <LinearGradient
      colors={["#000011", "#000033", "#001144", "#001a66"]} // dark to lighter
      style={styles.background}
    >
      <StatusBar style="auto" />

      <View style={styles.container}>
        <HomePage
          toggleLocation={toggleLocation}
          setToggleLocation={setToggleLocation}
          showWherePickerModal={showWherePickerModal}
          setShowWherePickerModal={setShowWherePickerModal}
          filteredSightings={filteredSightings}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          showWhatPickerModal={showWhatPickerModal}
          setShowWhatPickerModal={setShowWhatPickerModal}
          selectedShape={selectedShape}
          setSelectedShape={setSelectedShape}
          setShowSearchModal={setShowSearchModal}
          showSearchModal={showSearchModal}
        />
      </View>
      {showWherePickerModal && (
        <WherePickerModal
          showWherePickerModal={showWherePickerModal}
          setShowWherePickerModal={setShowWherePickerModal}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />
      )}
      {showWhatPickerModal && (
        <WhatPickerModal
          showWhatPickerModal={showWhatPickerModal}
          setShowWhatPickerModal={setShowWhatPickerModal}
          selectedShape={selectedShape}
          setSelectedShape={setSelectedShape}
        />
      )}
      {/* {showSearchModal && (
        <SearchModal
          showWherePickerModal={showWherePickerModal}
          setShowWherePickerModal={setShowWherePickerModal}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          setSelectedShape={setSelectedShape}
          showWhatPickerModal={showWhatPickerModal}
          selectedShape={selectedShape}
          setShowWhatPickerModal={setShowWhatPickerModal}
          toggleLocation={toggleLocation}
          setToggleLocation={setToggleLocation}
          setShowSearchModal={setShowSearchModal}
          showSearchModal={showSearchModal}
          filteredSightings={filteredSightings}
        />
      )} */}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
