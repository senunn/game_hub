import apiClient from "@/services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";



interface fetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T> (endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
      const [error, setError] = useState("");
      const [isLoading, setLoading] = useState(false);
    
      useEffect(() => {
        setLoading(true);
        const abort = new AbortController();
        apiClient
          .get<fetchResponse<T>>(endpoint,{signal: abort.signal, ...requestConfig})
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
      },[ ...(deps || [])]);

    
      return {data, error, isLoading};
}

export default useData;