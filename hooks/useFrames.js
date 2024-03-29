import { useQuery } from "react-query";
import axios from "axios";

export function useFrames() {
  return useQuery("frames", async () => {
    const { data } = await axios.get(`https://dbve.barpat.fun/api_frames`);
    return data;
  });
}
