import { getSeasons } from "../services/api";

function formatSeason(season) {
  if (season.includes("/")) {
    const parts = season.split("/");
    const startYear = Number(parts[0]);
    const endPart = parts[1];

    if (endPart.length === 2) {
      return String(
        Number(String(startYear).slice(0, 2) + endPart)
      );
    }

    return endPart;
  }

  return season;
}

export async function loadSeasons() {
  try {
    const seasons = await getSeasons();

    return [
      {
        label: "Overall",
        value: "Overall",
      },
      ...seasons.map((season) => ({
        label: formatSeason(season),
        value: season,
      })),
    ];
  } catch (error) {
    console.error("Season loading error:", error);

    return [
      {
        label: "Overall",
        value: "Overall",
      },
    ];
  }
}