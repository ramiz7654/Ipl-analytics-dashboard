function filterSeason(data, season) {
  if (season === "Overall") {
    return data;
  }

  return data.filter(
    (item) => String(item.season) === String(season)
  );
}

function highestBy(data, field) {
  if (!data.length) return null;

  return data.reduce((best, current) => {
    return Number(current[field] || 0) >
      Number(best[field] || 0)
      ? current
      : best;
  });
}

export function getMostRuns(data, season) {
  const filtered = filterSeason(data, season);
  const result = highestBy(filtered, "runs");

  if (!result) return null;

  return {
    name: result.batter,
    value: `${result.runs} runs`,
    icon: "🏏",
  };
}

export function getMostSixes(data, season) {
  const filtered = filterSeason(data, season);
  const result = highestBy(filtered, "sixes");

  if (!result) return null;

  return {
    name: result.batter,
    value: `${result.sixes} sixes`,
    icon: "💥",
  };
}

export function getMostFours(data, season) {
  const filtered = filterSeason(data, season);
  const result = highestBy(filtered, "fours");

  if (!result) return null;

  return {
    name: result.batter,
    value: `${result.fours} fours`,
    icon: "4️⃣",
  };
}

export function getHighestScore(data, season) {
  const filtered = filterSeason(data, season);

  if (!filtered.length) return null;

  const result = filtered.reduce(
    (best, current) =>
      Number(current.runs || 0) >
      Number(best.runs || 0)
        ? current
        : best
  );

  return {
    name: result.batter,
    value: `${result.runs} runs`,
    icon: "💯",
  };
}