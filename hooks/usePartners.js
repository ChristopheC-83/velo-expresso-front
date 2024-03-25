import { useQuery } from "react-query";
import axios from "axios";

export function usePartners() {
  return useQuery("partners", async () => {
    const { data } = await axios.get(`https://dbve.barpat.fun/api_partners`);
    return data;
  });
}
