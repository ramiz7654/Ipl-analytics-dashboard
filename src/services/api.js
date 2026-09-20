const BASE_PATH = "/dataset";

async function fetchJSON(fileName) {
  const response = await fetch(`${BASE_PATH}/${fileName}`);

  if (!response.ok) {
    throw new Error(`Unable to load ${fileName}`);
  }

  const text = await response.text();

  // Fix NaN values coming from the dataset JSON
  const cleanedText = text.replace(/\bNaN\b/g, "null");

  return JSON.parse(cleanedText);
}

export function getSeasons() {
  return fetchJSON("seasons.json");
}

export function getMatches() {
  return fetchJSON("matches.json");
}

export function getBattingData() {
  return fetchJSON("batting.json");
}

export function getBowlingData() {
  return fetchJSON("bowling.json");
}

export function getTeamSeasonData() {
  return fetchJSON("team_season.json");
}