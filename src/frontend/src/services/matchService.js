import { axiosClient } from "../api/axiosClient";

export const getMatchesByYear = async (teamName, year) => {
    const response = await axiosClient.get(
        `/teams/${teamName}/matches?year=${year}`
    );
    const data = response.data;

    return data || [];
};
