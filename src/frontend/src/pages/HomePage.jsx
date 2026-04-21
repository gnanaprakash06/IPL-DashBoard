import { useQuery } from "@tanstack/react-query";
import TeamTile from "../components/TeamTile";
import { getAllTeams } from "../services/teamService";
import "./HomePage.scss";

const HomePage = () => {
    const {
        data: teams,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["teams"],
        queryFn: () => getAllTeams(),
    });

    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <h1>Error: {error.message}</h1>;

    return (
        <div className="HomePage">
            <div className="header-section">
                <h1 className="app-name">IPL Dashboard</h1>
            </div>
            <div className="team-grid">
                {teams.map((team) => (
                    <TeamTile teamName={team.teamName} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
