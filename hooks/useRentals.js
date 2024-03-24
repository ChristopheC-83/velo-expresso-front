import { useQuery } from "react-query";
import axios from "axios";

export function useRentals() {
  return useQuery("rentals", async () => {
    const { data } = await axios.get(`https://dbve.barpat.fun/api_rentals`);
    return data;
  });
}