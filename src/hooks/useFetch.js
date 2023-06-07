import axios from "axios";
import { useEffect } from "react";

const useFetch = ({ url, dispatch, type, setLoading, setMessage }) => {

    const token = "-"

    useEffect(() => {
        (
            async () => {
                setLoading(true);
                try {
                    const json = await axios.get(url, {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-type': 'application/json'
                        }
                    })

                    const { data } = await json.data;

                    dispatch({ type, payload: data });
                    setMessage({ error: false, severity: 'success', message: `Successfully fetched at ${url}` })
                    setLoading(false);
                    
                }
                catch (error) {
                    setMessage({ error: true, severity: 'error', message: error ||  `Something bad is happened`});
                    setLoading(false);
                }
            }
        )();

    }, [dispatch]);
}

export default useFetch;