import { useQuery } from "react-query";
import axios from "axios";

export function useOpinions() {
  return useQuery("allOpinions", async () => {
    const { data } = await axios.get(`https://dbve.barpat.fun/api_opinions`);
    return data;
  });
}
