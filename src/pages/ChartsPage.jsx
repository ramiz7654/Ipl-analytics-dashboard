import { useEffect, useState } from "react";
import Charts from "../components/Charts";
import {
  getBattingData,
  getBowlingData,
  getTeamSeasonData,
} from "../services/api";

function ChartsPage() {
  const [battingData, setBattingData] = useState([]);
  const [bowlingData, setBowlingData] = useState([]);
  const [teamData, setTeamData] = useState([]);
  const [selectedSeason] = useState("Overall");

  useEffect(() => {
    Promise.all([
      getBattingData(),
      getBowlingData(),
      getTeamSeasonData(),
    ])
      .then(([batting, bowling, teams]) => {
        setBattingData(batting);
        setBowlingData(bowling);
        setTeamData(teams);
      })
      .catch((error) => {
        console.error("Failed to load chart data:", error);
      });
  }, []);

  return (
    <Charts
      battingData={battingData}
      bowlingData={bowlingData}
      teamData={teamData}
      selectedSeason={selectedSeason}
    />
  );
}

export default ChartsPage;