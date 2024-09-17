import axios from "axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY; // Ensure this is defined in your .env file

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  headers: {
    "x-rapidapi-key": API_KEY, // Use the API key variable
    "x-rapidapi-host": "youtube138.p.rapidapi.com",
  },
};

export const fetchData = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    console.error("Error fetching API data: ", error);
    throw error;
  }
};
