import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";
import { getTeamByName } from "../services/teamService";

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
            <h1>{team.teamName}</h1>

            <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
            {team.matches.slice(1).map((match) => (
                <MatchSmallCard
                    key={match.id}
                    teamName={team.teamName}
                    match={match}
                />
            ))}
        </div>
    );
};
