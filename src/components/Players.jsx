function Players({ battingData, bowlingData, selectedSeason }) {
  const isSelectedSeason = (item) =>
    selectedSeason === "Overall" ||
    String(item.season) === String(selectedSeason);

  const battingMap = {};

  battingData
    .filter(isSelectedSeason)
    .forEach((item) => {
      const player = item.batter;
      if (!player) return;

      if (!battingMap[player]) {
        battingMap[player] = {
          player,
          runs: 0,
          sixes: 0,
          fours: 0,
        };
      }

      battingMap[player].runs += Number(item.runs || 0);
      battingMap[player].sixes += Number(item.sixes || 0);
      battingMap[player].fours += Number(item.fours || 0);
    });

  const topBatters = Object.values(battingMap)
    .sort((a, b) => b.runs - a.runs)
    .slice(0, 10);

  const bowlingMap = {};

  bowlingData
    .filter(isSelectedSeason)
    .forEach((item) => {
      const player = item.bowler;
      if (!player) return;

      if (!bowlingMap[player]) {
        bowlingMap[player] = {
          player,
          wickets: 0,
          runsConceded: 0,
        };
      }

      bowlingMap[player].wickets += Number(item.wickets || 0);
      bowlingMap[player].runsConceded += Number(
        item.runs_conceded || 0
      );
    });

  const topBowlers = Object.values(bowlingMap)
    .sort((a, b) => b.wickets - a.wickets)
    .slice(0, 10);

  return (
    <section className="players-section" id="players">
      <div className="section-heading">
        <span className="section-label">IPL PLAYERS</span>

        <h2>Player Leaderboard</h2>

        <p>
          {selectedSeason === "Overall"
            ? "Leading players across all IPL seasons"
            : `Leading players for ${selectedSeason}`}
        </p>
      </div>

      <div className="player-leaderboards">

        <div className="leaderboard-card">
          <div className="leaderboard-title">
            <span>🏏</span>

            <div>
              <h3>Top Run Scorers</h3>
              <p>Batting leaderboard</p>
            </div>
          </div>

          <div className="leaderboard-list">
            {topBatters.map((player, index) => (
              <div className="player-row" key={player.player}>

                <div className="player-rank">
                  {index + 1}
                </div>

                <div className="player-details">
                  <strong>{player.player}</strong>

                  <span>
                    {player.sixes} sixes • {player.fours} fours
                  </span>
                </div>

                <div className="player-value">
                  <strong>
                    {player.runs.toLocaleString()}
                  </strong>

                  <span>runs</span>
                </div>

              </div>
            ))}
          </div>
        </div>

        <div className="leaderboard-card">

          <div className="leaderboard-title">
            <span>🎯</span>

            <div>
              <h3>Top Wicket Takers</h3>
              <p>Bowling leaderboard</p>
            </div>
          </div>

          <div className="leaderboard-list">
            {topBowlers.map((player, index) => (
              <div className="player-row" key={player.player}>

                <div className="player-rank">
                  {index + 1}
                </div>

                <div className="player-details">
                  <strong>{player.player}</strong>

                  <span>
                    {player.runsConceded.toLocaleString()} runs conceded
                  </span>
                </div>

                <div className="player-value">
                  <strong>{player.wickets}</strong>

                  <span>wickets</span>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default Players;