import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://wft-geo-db.p.rapidapi.com/v1/geo",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
    "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
  },
});

export const fetchCities = async (limit, query = "") => {
  try {
    const response = await apiClient.get(
      `/cities?limit=${limit}&namePrefix=${query}`
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
