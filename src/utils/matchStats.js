function clean(value) {
  if (
    value === null ||
    value === undefined ||
    String(value).trim() === "" ||
    String(value).toLowerCase() === "nan"
  ) {
    return null;
  }

  return String(value).trim();
}

function filterSeason(data, season) {
  if (season === "Overall") {
    return data;
  }

  return data.filter(
    (item) => String(item.season) === String(season)
  );
}

export function getMostPlayerOfMatch(
  matches,
  season
) {
  const filtered = filterSeason(matches, season);

  const counts = {};

  filtered.forEach((match) => {
    const player = clean(match.player_of_match);

    if (!player) return;

    counts[player] =
      (counts[player] || 0) + 1;
  });

  const entries = Object.entries(counts);

  if (!entries.length) return null;

  entries.sort((a, b) => b[1] - a[1]);

  return {
    name: entries[0][0],
    value: `${entries[0][1]} awards`,
    icon: "🏅",
  };
}

export function getWinner(matches, season) {
  const filtered = filterSeason(matches, season);

  if (!filtered.length) return null;

  const counts = {};

  filtered.forEach((match) => {
    const winner = clean(match.match_won_by);

    if (!winner) return;

    counts[winner] =
      (counts[winner] || 0) + 1;
  });

  const entries = Object.entries(counts);

  if (!entries.length) return null;

  entries.sort((a, b) => b[1] - a[1]);

  return {
    name: entries[0][0],
    value: `${entries[0][1]} match wins`,
    icon: "🏆",
  };
}

export function getMostTitles(matches) {
  const finalWinners = {};

  matches.forEach((match) => {
    const stage = String(match.stage || "").trim();

    if (stage.toLowerCase() !== "final") {
      return;
    }

    const winner = clean(match.match_won_by);

    if (!winner) {
      return;
    }

    finalWinners[winner] = (finalWinners[winner] || 0) + 1;
  });

  const entries = Object.entries(finalWinners);

  if (!entries.length) {
    return null;
  }

  entries.sort((a, b) => b[1] - a[1]);

  return {
    name: entries[0][0],
    value: `${entries[0][1]} titles`,
    icon: "🏆",
  };
}