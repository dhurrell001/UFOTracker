import * as SQLite from "expo-sqlite";
import * as FileSystem from "expo-file-system";
import { Asset } from "expo-asset";
import Papa from "papaparse";

export default async function setupDatabaseFast() {
  console.log("Opening database... ");
  const db = await SQLite.openDatabaseAsync("ufodb.db");

  console.log("Loading CSV asset...");
  const asset = Asset.fromModule(require("../assets/ufoDataReduced.csv"));
  await asset.downloadAsync();

  const csvString = await FileSystem.readAsStringAsync(asset.localUri, {
    encoding: FileSystem.EncodingType.UTF8,
  });

  console.log("Parsing CSV...");
  const results = Papa.parse(csvString, {
    header: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.trim(), // this trims spaces from keys
  });
  console.log("CSV fields:", results.meta.fields);

  console.log(`Parsed ${results.data.length} rows`);
  await db.execAsync("DROP TABLE IF EXISTS sightings;");
  console.log("Creating table...");
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

  console.log("Beginning transaction...");
  await db.execAsync("BEGIN TRANSACTION");

  for (let i = 0; i < results.data.length; i++) {
    const row = results.data[i];

    const durationSeconds = parseInt(row["duration (seconds)"], 10);
    const latitude = parseFloat(row.latitude);
    const longitude = parseFloat(row.longitude);
    // console.log(
    //   `Row ${i}: latitude string="${row.longitude}", parsed=${longitude}`
    // );

    await db.runAsync(
      `INSERT INTO sightings (
        datetime, city, state, country, shape, duration_seconds, duration_hours, comments, date_posted, latitude, longitude
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
      [
        row.datetime || null,
        row.city || null,
        row.state || null,
        row.country || null,
        row.shape || null,
        isNaN(durationSeconds) ? null : durationSeconds,
        row["duration (hours/min)"] || null,
        row.comments || null,
        row["date posted"] || null,
        isNaN(latitude) ? null : latitude,
        isNaN(longitude) ? null : longitude,
      ]
    );

    if (i % 10000 === 0) {
      console.log(`Inserted ${i} rows...`);
    }
  }

  await db.execAsync("COMMIT");
  console.log("✅ CSV import complete!");

  return db;
}
