import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { getMatchesByYear } from "../services/matchService";
import "./MatchPage.scss";
import YearSelector from "../components/YearSelector";

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
            <Link to="/" className="home-link">
                Home
            </Link>
            <div className="year-selector">
                <h3>Select Year</h3>
                <YearSelector teamName={teamName} />
            </div>
            <div>
                <h1 className="page-heading">
                    {teamName} matches in {year}
                </h1>

                {matches.map((match) => (
                    <MatchDetailCard
                        key={match.id}
                        teamName={teamName}
                        match={match}
                    />
                ))}
            </div>
        </div>
    );
};

export default MatchPage;
