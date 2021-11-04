import fs from "fs";
import path from "path";

import neatCsv from "neat-csv";

const dataDirectory = path.join(process.cwd(), "data");

/**
 * Async function that
 * returns an object that contains the students and teams array.
 */
export default async function fetchData() {
  const studentsCsv = fs.readFileSync(
    path.join(dataDirectory, "students.csv"),
    "utf-8"
  );
  const teamsCsv = fs.readFileSync(
    path.join(dataDirectory, "teams.csv"),
    "utf-8"
  );

  const students = await neatCsv(studentsCsv);
  const teams = await neatCsv(teamsCsv);

  return {
    students,
    teams,
  };
}
