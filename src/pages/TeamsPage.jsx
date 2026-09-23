import { useEffect, useState } from "react";
import Teams from "../components/Teams";
import { getTeamSeasonData } from "../services/api";

function TeamsPage() {
  const [teamData, setTeamData] = useState([]);
  const [selectedSeason] = useState("Overall");

  useEffect(() => {
    getTeamSeasonData()
      .then((data) => setTeamData(data))
      .catch((error) => console.error("Failed to load team data:", error));
  }, []);

  return (
    <Teams
      teamData={teamData}
      selectedSeason={selectedSeason}
    />
  );
}

export default TeamsPage;