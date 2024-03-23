import { useQuery } from "react-query";
import axios from "axios";

export function useWorkshop() {
  return useQuery("worshop", async () => {
    const { data } = await axios.get(`https://dbve.barpat.fun/api_workshop`);
    return data;
  });
}
