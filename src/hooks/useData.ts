import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import { headers } from "../services/config";
import apiClient from "../services/api-client";
  
interface FetchResponse<T> {
    results: T[];
    genres: T[];
}

const useData = <T>(endpoint : string, params : {}) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient.get<FetchResponse<T>>(endpoint
    , { headers,
        params,
        signal: controller.signal})
    .then((res) => {
      setData(res.data.genres);
      console.log("data: " + res.data);
      console.log("results: " + res.data.results);
      setIsLoading(false);
    })
    .catch(err => {
      if (err instanceof CanceledError) return;
      setError(err.message);
      setIsLoading(false);
    })

    return () => controller.abort();
  }, [])

  return {data, error, isLoading}
}

export default useData;
