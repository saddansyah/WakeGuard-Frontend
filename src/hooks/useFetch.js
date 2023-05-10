import { useEffect } from "react";
import { useDisplayContext } from "@/hooks/context/useDisplayContext";


const useFetch = ({ url, dispatch, type, setLoading, setMessage }) => {

    useEffect(() => {
        (
            async () => {
                setLoading(true);
                try {
                    const response = await fetch(url);
                    const json = await response.json();

                    if (response.ok) {
                        dispatch({ type, payload: json });
                        setLoading(false);
                        setMessage({ error: false, type: 'success', message: `Successfully fetched at ${url}` })
                    }

                    if (!response.ok) {
                        const error = new Error((json.message || `Something bad is happened`) + ` ${response.status}`);
                        error.code = response.status;
                        throw error;
                    }
                }
                catch (error) {
                    setMessage({ error: true, type: 'error', message: error });
                    setLoading(false);
                }
            }
        )();

    }, [dispatch]);
}

export default useFetch;