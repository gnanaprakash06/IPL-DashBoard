import { Link } from "react-router-dom";

export const MatchSmallCard = ({ match, teamName }) => {
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
    return (
        <div className="MatchSmallCard">
            <h3>
                vs <Link to={`/team/${otherTeam}`}>{otherTeam}</Link>
            </h3>
            <p>
                {match.matchWinner} won by {match.resultMargin} {match.result}
            </p>
        </div>
    );
};
