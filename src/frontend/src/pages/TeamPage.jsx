import { useEffect, useState } from "react";
import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";

export const TeamPage = () => {
    const [team, setTeam] = useState({});

    useEffect(() => {
        const fetchMatches = async () => {
            const response = await fetch(
                "http://localhost:8080/team/Rajasthan%20Royals"
            );
            const data = await response.json();
            setTeam(data);
        };

        fetchMatches();
    }, []);

    if(!team || !team.teamName) return <h1>Loading...</h1>

    return (
        <div className="TeamPage">
            <h1>{team.teamName}</h1>

            <MatchDetailCard match={team.matches[0]} />
            {team.matches.slice(1).map((match) => (
                <MatchSmallCard key={match.id} match={match} />
            ))}
        </div>
    );
};
