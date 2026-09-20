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

export function getMostWickets(data, season) {
  const filtered = filterSeason(data, season);
  const result = highestBy(filtered, "wickets");

  if (!result) return null;

  return {
    name: result.bowler,
    value: `${result.wickets} wickets`,
    icon: "🎯",
  };
}

export function getBestBowling(data, season) {
  const filtered = filterSeason(data, season);

  if (!filtered.length) return null;

  const result = filtered.reduce(
    (best, current) => {
      const wickets = Number(current.wickets || 0);
      const runs = Number(
        current.runs_conceded || 999999
      );

      const bestWickets = Number(
        best.wickets || 0
      );
      const bestRuns = Number(
        best.runs_conceded || 999999
      );

      if (
        wickets > bestWickets ||
        (wickets === bestWickets &&
          runs < bestRuns)
      ) {
        return current;
      }

      return best;
    }
  );

  return {
    name: result.bowler,
    value: `${result.wickets} wickets`,
    extra: `${result.runs_conceded} runs conceded`,
    icon: "🎳",
  };
}