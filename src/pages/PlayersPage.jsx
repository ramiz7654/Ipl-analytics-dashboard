import { useEffect, useState } from "react";
import Players from "../components/Players";
import { getBattingData, getBowlingData } from "../services/api";

function PlayersPage() {
  const [battingData, setBattingData] = useState([]);
  const [bowlingData, setBowlingData] = useState([]);
  const [selectedSeason] = useState("Overall");

  useEffect(() => {
    Promise.all([
      getBattingData(),
      getBowlingData(),
    ])
      .then(([batting, bowling]) => {
        setBattingData(batting);
        setBowlingData(bowling);
      })
      .catch((error) => {
        console.error("Failed to load player data:", error);
      });
  }, []);

  return (
    <Players
      battingData={battingData}
      bowlingData={bowlingData}
      selectedSeason={selectedSeason}
    />
  );
}

export default PlayersPage;