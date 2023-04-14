import { useEffect, useState } from "react";
import { getData } from "../utils/data-fetcher";

export function useFetch(url) {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        setIsLoading(true);
        getData(url)
            .then(json => setData(json))
            .catch(error => setError(error))
            .finally(() => setIsLoading(false));
    }, [url]);

    return {
        data,
        isLoading,
        error
    };
}