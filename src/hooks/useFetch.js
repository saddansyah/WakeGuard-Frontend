import { useEffect } from "react";

const useFetch = ({ url, dispatch, type, setLoading, setMessage }) => {

    const token = "29f407cab382a2a5d27d10086b2e634ae17754641d869394b7c17a4ff8745db053014bc7d9f74a7149a10218ff65198b53b39e148ea7c9b6bb35f7889258a282497923d91f67a5440b849fcc97ea04832d36e5c4a599af6970ad67aaf47c18e7f33133c8736f0d21eda034f71276ca02bacbd4eca5b671fb75b11247244074cf"

    useEffect(() => {
        (
            async () => {
                setLoading(true);
                try {
                    const response = await fetch(url, {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-type': 'application/json'
                        }
                    });
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