import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";



interface fetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T> (endpoint: string) => {
    const [data, setData] = useState<T[]>([]);
      const [error, setError] = useState("");
      const [isLoading, setLoading] = useState(false);
    
      useEffect(() => {
        setLoading(true);
        const abort = new AbortController();
        apiClient
          .get<fetchResponse<T>>(endpoint)
          .then((res) => 
            { 
              setData(res.data.results)
              setLoading(false);
            })
          .catch((err) => {
            if(err instanceof CanceledError) return ;
            setError(err.message)
            setLoading(false);
          });
    
        return () => abort.abort();
      },[]);
    
      return {data, error, isLoading};
}

export default useData;