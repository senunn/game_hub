import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Genre {
    id: number;
    name: string;
}

interface fetchGenreResponse {
    count: number;
    results: Genre[];
}

const useGere = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
      const [error, setError] = useState("");
      const [isLoading, setLoading] = useState(false);
    
      useEffect(() => {
        setLoading(true);
        const abort = new AbortController();
        apiClient
          .get<fetchGenreResponse>("/genres")
          .then((res) => 
            { 
              setGenres(res.data.results)
              setLoading(false);
            })
          .catch((err) => {
            if(err instanceof CanceledError) return ;
            setError(err.message)
            setLoading(false);
          });
    
        return () => abort.abort();
      },[]);
    
      return {genres, error, isLoading};
}

export default useGere;