import { Link } from "react-router-dom";
import "./MatchSmallCard.scss";

export const MatchSmallCard = ({ match, teamName }) => {
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
    const isMatchWon = teamName === match.matchWinner;
    return (
        <div
            className={
                isMatchWon
                    ? "MatchSmallCard won-card"
                    : "MatchSmallCard lost-card"
            }
        >
            <span className="vs">vs </span>
            <h1>
                <Link to={`/teams/${otherTeam}`}>{otherTeam}</Link>
            </h1>
            <p classname="match-result">
                {match.matchWinner} won by {match.resultMargin} {match.result}
            </p>
        </div>
    );
};
