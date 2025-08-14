import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";
import Papa from "papaparse";
import { readString } from "react-native-csv";

export default async function setupDatabase() {
  try {
    console.log("Opening database...");
    const db = await SQLite.openDatabaseAsync("mydb.db");
    console.log("Loading asset...");
    const asset = Asset.fromModule(require("../assets/UFOdataCSV.csv"));
    console.log("Asset info:", asset);
    await asset.downloadAsync(); // ensure local access

    const csvString = await FileSystem.readAsStringAsync(asset.localUri, {
      encoding: FileSystem.EncodingType.UTF8,
    });

    // 3. Parse CSV
    const results = Papa.parse(csvString, {
      header: true,
      skipEmptyLines: true,
    });

    console.log(`Parsed ${results.data.length} rows`);

    // 4. Create the table
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS sightings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        datetime TEXT,
        city TEXT,
        state TEXT,
        country TEXT,
        shape TEXT,
        duration_seconds INTEGER,
        duration_hours TEXT,
        comments TEXT,
        date_posted TEXT,
        latitude REAL,
        longitude REAL
      );
    `);

    // 5. Insert data
    for (let row of results.data) {
      await db.runAsync(
        `INSERT INTO sightings (
          datetime, city, state, country, shape, duration_seconds, duration_hours, comments, date_posted, latitude, longitude
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
        [
          row.datetime,
          row.city,
          row.state,
          row.country,
          row.shape,
          parseInt(row["duration (seconds)"], 10) || null,
          row["duration (hours/min)"],
          row.comments,
          row["date posted"],
          parseFloat(row.latitude) || null,
          parseFloat(row.longitude) || null,
        ]
      );
    }
    console.log("✅ CSV import complete");
    return db;
  } catch (error) {
    console.error("❌ Failed to import CSV", error);
  }
}
