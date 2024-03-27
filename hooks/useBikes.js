import { useQuery } from "react-query";
import axios from "axios";

export function useBikes() {
  return useQuery("bikes", async () => {
    const { data } = await axios.get(`https://dbve.barpat.fun/api_bikes`);
    return data;
  });
}
