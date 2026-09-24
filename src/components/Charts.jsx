import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Charts({
  battingData,
  bowlingData,
  teamData,
  selectedSeason,
}) {
  // =============================
  // TOP 10 RUN SCORERS
  // =============================

  const runMap = {};

  battingData
    .filter((item) => {
      if (selectedSeason === "Overall") return true;
      return String(item.season) === String(selectedSeason);
    })
    .forEach((item) => {
      const player = item.batter;

      if (!player) return;

      runMap[player] = (runMap[player] || 0) + Number(item.runs || 0);
    });

  const topRunScorers = Object.entries(runMap)
    .map(([player, runs]) => ({
      player,
      runs,
    }))
    .sort((a, b) => b.runs - a.runs)
    .slice(0, 10);


  // =============================
  // TOP 10 WICKET TAKERS
  // =============================

  const wicketMap = {};

  bowlingData
    .filter((item) => {
      if (selectedSeason === "Overall") return true;
      return String(item.season) === String(selectedSeason);
    })
    .forEach((item) => {
      const player = item.bowler;

      if (!player) return;

      wicketMap[player] =
        (wicketMap[player] || 0) + Number(item.wickets || 0);
    });

  const topWicketTakers = Object.entries(wicketMap)
    .map(([player, wickets]) => ({
      player,
      wickets,
    }))
    .sort((a, b) => b.wickets - a.wickets)
    .slice(0, 10);


  // =============================
  // TEAM-WISE RUNS
  // =============================

  const teamRunMap = {};

  teamData
    .filter((item) => {
      if (selectedSeason === "Overall") return true;
      return String(item.season) === String(selectedSeason);
    })
    .forEach((item) => {
      const team = item.team;

      if (!team) return;

      teamRunMap[team] =
        (teamRunMap[team] || 0) + Number(item.runs || 0);
    });

  const teamRuns = Object.entries(teamRunMap)
    .map(([team, runs]) => ({
      team,
      runs,
    }))
    .sort((a, b) => b.runs - a.runs)
    .slice(0, 10);

    // =============================
    // TOP 10 SIX HITTERS
    // =============================

    const sixMap = {};

    battingData
        .filter((item) => {
        if (selectedSeason === "Overall") return true;
        return String(item.season) === String(selectedSeason);
        })
        .forEach((item) => {
        const player = item.batter;

        if (!player) return;

        sixMap[player] =
            (sixMap[player] || 0) + Number(item.sixes || 0);
        });

    const topSixHitters = Object.entries(sixMap)
        .map(([player, sixes]) => ({
        player,
        sixes,
        }))
        .sort((a, b) => b.sixes - a.sixes)
        .slice(0, 10);

  return (
    <section className="charts-section" id="charts">

      {/* Heading */}
      <div className="section-heading">
        <span className="section-label">
          ANALYTICS
        </span>

        <h2>IPL Charts</h2>

        <p>
          Visual insights from IPL statistics
          {selectedSeason !== "Overall"
            ? ` for ${selectedSeason}`
            : " across all seasons"}
        </p>
      </div>


      <div className="charts-grid">

        {/* =========================
            TOP RUN SCORERS
        ========================== */}

        <div className="chart-card">

          <div className="chart-card-header">
            <div>
              <span className="chart-icon">
              
              </span>

              <h3>
                Top 10 Run Scorers
              </h3>
            </div>
          </div>

          <div className="chart-container">

            <ResponsiveContainer
              width="100%"
              height={350}
            >
              <BarChart
                data={topRunScorers}
                layout="vertical"
                margin={{
                  top: 10,
                  right: 20,
                  left: 30,
                  bottom: 10,
                }}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                />

                <XAxis type="number" />

                <YAxis
                  dataKey="player"
                  type="category"
                  width={100}
                  tick={{ fontSize: 12 }}
                />

                <Tooltip />

                <Bar
                  dataKey="runs"
                  fill="#0b4ea2"
                  radius={[0, 5, 5, 0]}
                />

              </BarChart>
            </ResponsiveContainer>

          </div>
        </div>


        {/* =========================
            TOP WICKET TAKERS
        ========================== */}

        <div className="chart-card">

          <div className="chart-card-header">
            <div>
              <span className="chart-icon">
                
              </span>

              <h3>
                Top 10 Wicket Takers
              </h3>
            </div>
          </div>

          <div className="chart-container">

            <ResponsiveContainer
              width="100%"
              height={350}
            >
              <BarChart
                data={topWicketTakers}
                layout="vertical"
                margin={{
                  top: 10,
                  right: 20,
                  left: 30,
                  bottom: 10,
                }}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                />

                <XAxis type="number" />

                <YAxis
                  dataKey="player"
                  type="category"
                  width={100}
                  tick={{ fontSize: 12 }}
                />

                <Tooltip />

                <Bar
                  dataKey="wickets"
                  fill="#2563eb"
                  radius={[0, 5, 5, 0]}
                />

              </BarChart>
            </ResponsiveContainer>

          </div>
        </div>


        {/* =========================
            TEAM-WISE RUNS
        ========================== */}

        <div className="chart-card">

          <div className="chart-card-header">
            <div>
              <span className="chart-icon">
                
              </span>

              <h3>
                Team-wise Runs
              </h3>
            </div>
          </div>

          <div className="chart-container">

            <ResponsiveContainer
              width="100%"
              height={350}
            >
              <BarChart
                data={teamRuns}
                layout="vertical"
                margin={{
                  top: 10,
                  right: 20,
                  left: 30,
                  bottom: 10,
                }}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                />

                <XAxis type="number" />

                <YAxis
                  dataKey="team"
                  type="category"
                  width={100}
                  tick={{ fontSize: 11 }}
                />

                <Tooltip />

                <Bar
                  dataKey="runs"
                  fill="#1d4ed8"
                  radius={[0, 5, 5, 0]}
                />

              </BarChart>
            </ResponsiveContainer>

          </div>
        </div>

        {/* =========================
            TOP SIX HITTERS
        ========================== */}

        <div className="chart-card">

          <div className="chart-card-header">
            <div>
              <span className="chart-icon">
                
              </span>

              <h3>
                Top 10 Six Hitters
              </h3>
            </div>
          </div>

          <div className="chart-container">

            <ResponsiveContainer
              width="100%"
              height={350}
            >
              <BarChart
                data={topSixHitters}
                layout="vertical"
                margin={{
                  top: 10,
                  right: 20,
                  left: 30,
                  bottom: 10,
                }}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                />

                <XAxis type="number" />

                <YAxis
                  dataKey="player"
                  type="category"
                  width={100}
                  tick={{ fontSize: 12 }}
                />

                <Tooltip />

                <Bar
                  dataKey="sixes"
                  fill="#0b4ea2"
                  radius={[0, 5, 5, 0]}
                />

              </BarChart>
            </ResponsiveContainer>

          </div>
        </div>

        

      </div>
    </section>
  );
}

export default Charts;