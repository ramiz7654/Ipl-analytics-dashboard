import { useEffect, useMemo, useState } from "react";

import Navbar from "../components/Navbar";
import SeasonFilter from "../components/SeasonFilter";
import SearchBar from "../components/SearchBar";
import QuestionGrid from "../components/QuestionGrid";
import AnswerModal from "../components/AnswerModal";
import Loading from "../components/Loading";
import Charts from "../components/Charts";
import Teams from "../components/Teams";
import Players from "../components/Players";

import {
  overallQuestions,
  seasonQuestions,
} from "../data/questions";

import {
  getMatches,
  getBattingData,
  getBowlingData,
  getTeamSeasonData,
} from "../services/api";

import {
  getMostRuns,
  getMostSixes,
  getMostFours,
  getHighestScore,
} from "../utils/battingStats";

import {
  getMostWickets,
  getBestBowling,
} from "../utils/bowlingStats";

import {
  getMostTeamRuns,
  getMostTeamSixes,
  getMostTeamFours,
  getHighestTeamTotal,
} from "../utils/teamStats";

import {
  getMostPlayerOfMatch,
  getWinner,
  getMostTitles,
} from "../utils/matchStats";

function Home() {
  const [selectedSeason, setSelectedSeason] =
    useState("Overall");
  const [search, setSearch] = useState("");

  const [selectedQuestion, setSelectedQuestion] =
    useState(null);

  const [data, setData] = useState({
    matches: [],
    batting: [],
    bowling: [],
    teams: [],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [
          matches,
          batting,
          bowling,
          teams,
        ] = await Promise.all([
          getMatches(),
          getBattingData(),
          getBowlingData(),
          getTeamSeasonData(),
        ]);

        setData({
          matches,
          batting,
          bowling,
          teams,
        });
      } catch (error) {
        console.error(
          "Failed to load IPL data:",
          error
        );
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const questions =
    selectedSeason === "Overall"
      ? overallQuestions
      : seasonQuestions;

  const filteredQuestions = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) {
      return questions;
    }

    return questions.filter((question) => {
      return (
        question.title
          .toLowerCase()
          .includes(query) ||
        question.category
          .toLowerCase()
          .includes(query) ||
        question.description
          .toLowerCase()
          .includes(query)
      );
    });
  }, [questions, search]);

  function calculateAnswer(question) {
    const id = question.id;

    switch (id) {
      case "overall-most-runs":
      case "season-most-runs":
        return getMostRuns(
          data.batting,
          selectedSeason
        );

      case "overall-most-wickets":
      case "season-most-wickets":
        return getMostWickets(
          data.bowling,
          selectedSeason
        );

      case "overall-most-sixes":
      case "season-most-sixes":
        return getMostSixes(
          data.batting,
          selectedSeason
        );

      case "overall-most-fours":
      case "season-most-fours":
        return getMostFours(
          data.batting,
          selectedSeason
        );

      case "overall-highest-score":
      case "season-highest-score":
        return getHighestScore(
          data.batting,
          selectedSeason
        );

      case "overall-best-bowling":
      case "season-best-bowling":
        return getBestBowling(
          data.bowling,
          selectedSeason
        );

      case "overall-most-player-of-match":
      case "season-most-player-of-match":
        return getMostPlayerOfMatch(
          data.matches,
          selectedSeason
        );

      case "overall-most-team-runs":
      case "season-most-team-runs":
        return getMostTeamRuns(
          data.teams,
          selectedSeason
        );

      case "overall-most-team-sixes":
      case "season-most-team-sixes":
        return getMostTeamSixes(
          data.teams,
          selectedSeason
        );

      case "overall-most-team-fours":
      case "season-most-team-fours":
        return getMostTeamFours(
          data.teams,
          selectedSeason
        );

      case "season-highest-team-total":
        return getHighestTeamTotal(
          data.teams,
          selectedSeason
        );

      case "season-winner":
      return getWinner(data.matches, selectedSeason);

      case "overall-most-titles":
        return getMostTitles(
          data.matches
        );

      default:
        return null;
    }
  }

  if (loading) {
    return <Loading />;
  }

  const answer = selectedQuestion
    ? calculateAnswer(selectedQuestion)
    : null;

  return (
    <div className="app">
      <Navbar />

      <main className="dashboard">
        <section className="hero" id="home">
          <div className="hero-content">

            <h1>
              Explore IPL
              <span> Statistics</span>
            </h1>

            <p>
              Explore player, team and match
              statistics across IPL seasons.
            </p>
          </div>

          <SeasonFilter
            selectedSeason={selectedSeason}
            onSeasonChange={(season) => {
              setSelectedSeason(season);
              setSelectedQuestion(null);
            }}
          />
        </section>

        <section className="analytics-section">
          <div className="section-heading">
            <div>
              <span className="small-label">
                QUICK ANALYTICS
              </span>

              <h2>
                {selectedSeason === "Overall"
                  ? "Overall IPL Statistics"
                  : `${selectedSeason} Statistics`}
              </h2>
            </div>

            <span className="question-count">
              {filteredQuestions.length} Questions
            </span>
          </div>

          <SearchBar
            value={search}
            onChange={setSearch}
            suggestions={filteredQuestions}
            onSuggestionClick={(question) => {
              setSelectedQuestion(question);
              setSearch("");
            }}
            onSearch={() => {
              if (filteredQuestions.length > 0) {
                setSelectedQuestion(filteredQuestions[0]);
              }
            }}
          />

          <QuestionGrid
            questions={filteredQuestions}
            onQuestionClick={setSelectedQuestion}
            selectedSeason={selectedSeason}
          />

          <Charts
            battingData={data.batting}
            bowlingData={data.bowling}
            teamData={data.teams}
            selectedSeason={selectedSeason}
          />

        </section>
      </main>

      <footer className="footer">
        <p>
          IPL Analytics Dashboard • Built with
          React
        </p>
      </footer>

      <AnswerModal
        question={selectedQuestion}
        answer={answer}
        onClose={() =>
          setSelectedQuestion(null)
        }
      />
    </div>
  );
}

export default Home;