import { Asset } from "expo-asset";

export default function TestAsset() {
  console.log("Loading asset...");
  const asset = Asset.fromModule(require("../assets/ufoTwo.csv"));
  console.log("Asset:", asset);
  return null;
}
