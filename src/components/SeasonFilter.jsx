import { useEffect, useState } from "react";
import { loadSeasons } from "../data/seasons";

function SeasonFilter({
  selectedSeason,
  onSeasonChange,
}) {
  const [seasons, setSeasons] = useState([]);

  useEffect(() => {
    loadSeasons().then(setSeasons);
  }, []);

  return (
    <div className="filter-wrapper">
      <label htmlFor="season">
        Select Season
      </label>

      <select
        id="season"
        value={selectedSeason}
        onChange={(event) =>
          onSeasonChange(event.target.value)
        }
      >
        {seasons.map((season) => (
          <option
            key={season.value}
            value={season.value}
          >
            {season.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SeasonFilter;