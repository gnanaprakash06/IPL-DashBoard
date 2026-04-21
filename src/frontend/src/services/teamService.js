import { axiosClient } from "../api/axiosClient";

export const getTeamByName = async (teamName) => {
    const response = await axiosClient.get(`/teams/${teamName}`);
    const data = response.data;

    return {
        id: data.id,
        teamName: data.teamName,
        totalMatches: data.totalMatches || 0,
        totalWins: data.totalWins || 0,
        matches: data.matches || [],
    };
};

export const getAllTeams = async () => {
    const response = await axiosClient.get("/teams");
    const data = response.data;

    return data || [];
};
