import axios from "axios";

import { useEffect } from "react";


const useFetch = ({ url, dispatch, type, setLoading, setMessage }) => {

    useEffect(() => {
        (
            async () => {
                setLoading(true);
                try {
                    const { stsTokenManager: { accessToken }, uid } = JSON.parse(sessionStorage.getItem("user"));

                    const json = await axios.get(url, {
                        headers: {
                            'Authorization': `Bearer ${accessToken}`,
                            'Content-type': 'application/json'
                        }
                    })

                    const { data } = await json.data;

                    dispatch({ type, payload: data });
                    setMessage({ error: false, severity: 'success', message: `Successfully fetched at ${url}` })
                    setLoading(false);

                }
                catch (error) {
                    alert(error);
                    setMessage({ error: true, severity: 'error', message: error || `Something bad is happened` });
                    setLoading(false);
                }
            }
        )();

    }, [dispatch]);
}

export default useFetch;