import axios from "axios";
axios.defaults.baseURL = "https://65ccbcf1dd519126b83f6ef8.mockapi.io";

export const getAdverts = async (page) => {
  const response = await axios.get(`/advert/?page=${page}&limit=12`);
  return response.data;
};
