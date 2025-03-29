import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

const fetchFromApi = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}${id}`);
    return response.data;
  } catch (error) {
    console.error("Error", error);
    return null;
  }
};

export default fetchFromApi;
