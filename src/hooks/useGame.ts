import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Platform{
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[];
  metacritic: number;
}
interface fetchGameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const abort = new AbortController();
    apiClient
      .get<fetchGameResponse>("/games")
      .then((res) => 
        { 
          setGames(res.data.results)
          setLoading(false);
        })
      .catch((err) => {
        if(err instanceof CanceledError) return ;
        setError(err.message)
        setLoading(false);
      });

    return () => abort.abort();
  },[]);

  return {games, error, isLoading};
};

export default useGames;
