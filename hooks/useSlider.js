import { useQuery } from "react-query";
import axios from "axios";

export function useSlider() {
  return useQuery("sliders", async () => {
    const { data } = await axios.get(`https://dbve.barpat.fun/api_slider`);
    return data;
  });
}
