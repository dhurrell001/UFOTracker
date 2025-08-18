import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

import DisplaySightingModal from "./DisplaySightingModal";
export default function UFOMap({ toggleLocation, filteredSightings }) {
  let latitude;
  let longitude;
  let latDelta;
  let longDelta;
  const [sightingModalVisible, setSightingModalVisible] = React.useState(false);
  const [selectedSighting, setSelectedSighting] = React.useState(null);
  console.log("Toggle Location:", toggleLocation);
  if (toggleLocation == "gb") {
    latitude = 54.5; // Rough center of the UK
    longitude = -3.5; // Rough center of the UK
    latDelta = 8; // Bigger delta to zoom out
    longDelta = 8; // Bigger delta to zoom out
  } else if (toggleLocation == "us") {
    (latitude = 38.30558200233986), -99.74779056184356; // Rough center of the US (San Francisco)
    longitude = -99.74779056184356; // Rough center of the US (San Francisco)}
    latDelta = 50; // Bigger delta to zoom out
    longDelta = 50; // Bigger delta to zoom out
  }
  function handleMarkerPress(sighting) {
    console.log("Marker pressed:", sighting);
    setSelectedSighting(sighting);
    setSightingModalVisible(true);
  }
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude:
            filteredSightings.length > 0
              ? parseFloat(filteredSightings[0].latitude)
              : latitude,
          longitude:
            filteredSightings.length > 0
              ? parseFloat(filteredSightings[0].longitude)
              : longitude,
          latitudeDelta: latDelta,
          longitudeDelta: longDelta,
        }}
      >
        {filteredSightings.map((sighting, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: parseFloat(sighting.latitude),
              longitude: parseFloat(sighting.longitude),
            }}
            title={sighting.title}
            description={sighting.description}
            onPress={() => {
              handleMarkerPress(sighting);
            }}
          />
        ))}
      </MapView>
      {sightingModalVisible && (
        <DisplaySightingModal
          selectedSighting={selectedSighting}
          sightingModalVisible={sightingModalVisible}
          setSightingModalVisible={setSightingModalVisible}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: "90%",
    alignItems: "center",
    // paddingTop: 10,
    // paddingBottom: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: "#39FF14", // neon green border
    marginTop: 10,
    height: 500,
  },
  map: {
    flex: 1,
    width: "100%",
    height: 500,
  },
});
