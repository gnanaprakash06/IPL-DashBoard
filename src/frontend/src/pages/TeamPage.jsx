import { useQuery } from "@tanstack/react-query";
import { PieChart } from "react-minimal-pie-chart";
import { Link, useParams } from "react-router-dom";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";
import { getTeamByName } from "../services/teamService";
import "./TeamPage.scss";

export const TeamPage = () => {
    const { teamName } = useParams();

    const {
        data: team,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["team", teamName],
        queryFn: () => getTeamByName(teamName),
    });

    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <h1>Error: {error.message}</h1>;

    return (
        <div className="TeamPage">
            <div className="team-name-section">
                <h1 className="team-name">{team.teamName}</h1>
            </div>

            <div className="wins-loss-section">
                <h2>Wins / Losses</h2>
                <PieChart
                    data={[
                        {
                            title: "Wins",
                            value: team.totalWins,
                            color: "#4da375",
                        },
                        {
                            title: "Losses",
                            value: team.totalMatches - team.totalWins,
                            color: "#a34d5d",
                        },
                    ]}
                />
            </div>

            <div className="match-detail-section">
                <h3>Latest Matches</h3>

                <MatchDetailCard
                    teamName={team.teamName}
                    match={team.matches[0]}
                />
            </div>

            {team.matches.slice(1).map((match) => (
                <MatchSmallCard
                    key={match.id}
                    teamName={team.teamName}
                    match={match}
                />
            ))}

            <div className="more-link">
                <Link
                    to={`/teams/${team.teamName}/matches/${import.meta.env.VITE_DATA_END_YEAR}`}
                >
                    More {">"}
                </Link>
            </div>
        </div>
    );
};
