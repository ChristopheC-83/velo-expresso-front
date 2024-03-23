import { useQuery } from "react-query";
import axios from "axios";

export function useWorkshop() {
  return useQuery("worshop", async () => {
    // en dev
    // const { data } = await axios.get(`http://localhost:8090/kiki/velo-expresso-back/api_workshop`);
    // en ligne
    const { data } = await axios.get(`https://dbve.barpat.fun/api_workshop`);
    return data;
  });
}
