export async function getSightingsByCountry(db, countryCode) {
  try {
    console.log(`Querying sightings for country: ${countryCode}`);
    const allRows = await db.getAllAsync(
      "SELECT * FROM sightings WHERE country = ?;",
      [countryCode]
    );
    console.log(`Query success: Found ${allRows.length} rows`);
    return allRows;
  } catch (error) {
    console.error("❌ Failed to query sightings", error);
    throw error;
  }
}

export async function getSightingsByShape(db, shape) {
  try {
    console.log(`Querying sightings for shape: ${shape}`);
    const allRows = await db.getAllAsync(
      "SELECT * FROM sightings WHERE shape = ?;",
      [shape]
    );
    console.log(`Query success: Found ${allRows.length} rows`);
    return allRows;
  } catch (error) {
    console.error("❌ Failed to query sightings", error);
    throw error;
  }
}
export async function getSightingsByShapeAndLocation(db, shape, location) {
  try {
    console.log(
      `Querying sightings for shape: ${shape} and location: ${location}`
    );
    const allRows = await db.getAllAsync(
      "SELECT * FROM sightings WHERE shape = ? AND country = ?;",
      [shape, location]
    );
    console.log(`Query success: Found ${allRows.length} rows`);
    return allRows;
  } catch (error) {
    console.error("❌ Failed to query sightings by shape and location", error);
    throw error;
  }
}

// export async function getSightingsByCountry(db, countryCode) {
//   console.log(`Querying sightings for country: ${countryCode}`);

//   return new Promise((resolve, reject) => {
//     db.transaction((tx) => {
//       tx.executeSql(
//         "SELECT * FROM sightings WHERE country = ?;",
//         [countryCode],
//         (_, { rows }) => {
//           console.log(`Query success: Found ${rows.length} rows`);
//           resolve(rows._array);
//         },
//         (_, error) => {
//           console.error("❌ Failed to query sightings", error);
//           reject(error);
//           return false;
//         }
//       );
//     });
//   });
// }
