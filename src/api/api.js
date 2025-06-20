import axios from "axios";

export const fetchApi = async () => {
  try {
    const response = await axios.get("https://okdjiahjod.com");
    return response.data;
  } catch (error) {
    console.log("Failed to fetch api", error);
  }
};
