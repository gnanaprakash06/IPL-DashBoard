import { axiosClient } from "../api/axiosClient";

export const getTeamByname = async (teamName) => {
    const response = await axiosClient.get(`/team/${teamName}`);
    const data = response.data;

    return {
        id: data.id,
        teamName: data.teamName,
        totalMatches: data.totalMatches || 0,
        totalWins: data.totalWins || 0,
        matches: data.matches || [],
    };
};
