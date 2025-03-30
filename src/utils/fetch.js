import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/pokemon/";
const speciesURL = "https://pokeapi.co/api/v2/pokemon-species/";

const fetchFromApi = async (id, lang) => {
  try {
    let response = await axios.get(`${baseUrl}${id}`);

    if (lang === "en") {
      return response.data;
    } else {
      const frenchResponse = await axios.get(`${speciesURL}${id}`);

      const frenchName = frenchResponse.data.names.find(
        (name) => name.language.name === "fr"
      )?.name;

      response.data.name = frenchName || response.data.name;

      return response.data;
    }
  } catch (error) {
    console.error("Error", error);
    return null;
  }
};

export default fetchFromApi;
