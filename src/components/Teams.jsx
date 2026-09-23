function Teams({ teamData, selectedSeason }) {

  const teamThemes = {
    "Chennai Super Kings": "theme-csk",

    "Mumbai Indians": "theme-mi",

    "Royal Challengers Bengaluru": "theme-rcb",
    "Royal Challengers Bangalore": "theme-rcb",

    "Kolkata Knight Riders": "theme-kkr",

    "Sunrisers Hyderabad": "theme-srh",

    "Rajasthan Royals": "theme-rr",

    "Delhi Capitals": "theme-dc",
    "Delhi Daredevils": "theme-dc",

    "Punjab Kings": "theme-pbks",
    "Kings XI Punjab": "theme-pbks",

    "Gujarat Titans": "theme-gt",

    "Lucknow Super Giants": "theme-lsg",

    "Deccan Chargers": "theme-dc-old",

    "Kochi Tuskers Kerala": "theme-kochi",

    "Pune Warriors India": "theme-pwi",

    "Rising Pune Supergiant": "theme-rps",
    "Rising Pune Supergiants": "theme-rps",

    "Gujarat Lions": "theme-gl",
  };

  const teamMap = {};

  teamData
    .filter((item) => {
      if (selectedSeason === "Overall") return true;
      return String(item.season) === String(selectedSeason);
    })
    .forEach((item) => {
      const team = item.team;

      if (!team) return;

      if (!teamMap[team]) {
        teamMap[team] = {
          team,
          runs: 0,
          sixes: 0,
          fours: 0,
        };
      }

      teamMap[team].runs += Number(item.runs || 0);
      teamMap[team].sixes += Number(item.sixes || 0);
      teamMap[team].fours += Number(item.fours || 0);
    });

  const teams = Object.values(teamMap).sort(
    (a, b) => b.runs - a.runs
  );

  return (
    <section className="teams-section" id="teams">
      <div className="section-heading">
        <span className="section-label">IPL TEAMS</span>

        <h2>Teams</h2>

        <p>
          Team statistics
          {selectedSeason !== "Overall"
            ? ` for ${selectedSeason}`
            : " across all seasons"}
        </p>
      </div>

      <div className="teams-grid">
        {teams.map((team) => (
          <div
            className={`team-card ${teamThemes[team.team] || "theme-default"}`}
            key={team.team}
          >
            <div className="team-card-top">
              <div className="team-logo-placeholder">
                {team.team.charAt(0)}
              </div>

              <div>
                <h3>{team.team}</h3>
                <span>
                  {selectedSeason === "Overall"
                    ? "Overall"
                    : selectedSeason}
                </span>
              </div>
            </div>

            <div className="team-stats">
              <div>
                <strong>{team.runs.toLocaleString()}</strong>
                <span>Runs</span>
              </div>

              <div>
                <strong>{team.sixes.toLocaleString()}</strong>
                <span>Sixes</span>
              </div>

              <div>
                <strong>{team.fours.toLocaleString()}</strong>
                <span>Fours</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Teams;