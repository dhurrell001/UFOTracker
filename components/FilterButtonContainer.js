import { Text, View, StyleSheet } from "react-native";
import FilterButton from "./FilterButton";

export default function FilterButtonContainer({
  toggleLocation,
  setToggleLocation,
  setShowWherePickerModal,
  showWherePickerModal,
  selectedShape,
  setSelectedShape,
  setShowWhatPickerModal,
  showWhatPickerModal,
  selectedLocation,
}) {
  const handleLocationPress = () => {
    setShowWherePickerModal(() => !showWherePickerModal);
    setToggleLocation(!toggleLocation);
    console.log(showWherePickerModal, toggleLocation); // Debugging output
  };

  const handleWhatPress = () => {
    setShowWhatPickerModal(() => !showWhatPickerModal);
    console.log("what is pressed", showWhatPickerModal); // Debugging output
  };
  return (
    <View style={styles.container}>
      <FilterButton
        label={"WHAT"}
        onPress={handleWhatPress}
        selected={selectedShape}
      />
      <FilterButton
        label={"WHERE"}
        onPress={handleLocationPress}
        selected={selectedLocation.toUpperCase()}
      />
      <FilterButton label={"WHEN"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: "100%",
    // alignItems: "center",

    flexDirection: "row",
    justifyContent: "space-between",
    // width: "30%",

    borderRadius: 5,
  },
});
