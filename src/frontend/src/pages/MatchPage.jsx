import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { getMatchesByYear } from "../services/matchService";

const MatchPage = () => {
    const { teamName, year } = useParams();

    const {
        data: matches,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["matches", teamName, year],
        queryFn: () => getMatchesByYear(teamName, year),
    });

    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <h1>Error: {error.message}</h1>;

    return (
        <div className="MatchPage">
            <h1>Match Page</h1>
            {matches?.map((match) => (
                <MatchDetailCard
                    key={match.id}
                    teamName={teamName}
                    match={match}
                />
            ))}
        </div>
    );
};

export default MatchPage;
