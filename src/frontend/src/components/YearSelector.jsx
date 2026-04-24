import { Link, useParams } from "react-router-dom";
import "./YearSelector.scss";
import { useQuery } from "@tanstack/react-query";
import { getPlayedYears } from "../services/teamService";

const YearSelector = ({ teamName }) => {
    const { year: selectedYear } = useParams();

    const { data: years = [], isLoading } = useQuery({
        queryKey: ["playedYears", teamName],
        queryFn: () => getPlayedYears(teamName),
    });

    if (isLoading) return <div className="YearSelector">Loading...</div>;

    return (
        <ol className="YearSelector">
            {years.map((year) => (
                <li key={year}>
                    <Link
                        to={`/teams/${teamName}/matches/${year}`}
                        className={
                            year === parseInt(selectedYear) ? "active" : ""
                        }
                    >
                        {year}
                    </Link>
                </li>
            ))}
        </ol>
    );
};

export default YearSelector;
