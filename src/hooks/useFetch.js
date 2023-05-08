import { useEffect } from "react";

const useFetch = ({ url, dispatch, type }) => {
    useEffect(() => {
        (
            async () => {
                try {
                    const response = await fetch(url);
                    const json = await response.json();

                    if (response.ok) {
                        dispatch({type, payload: json});
                    }

                    if (!response.ok) {
                        const error = new Error((json.message || `Something bad is happened`) + ` ${response.status}`);
                        error.code = response.status;
                        throw error;
                    }
                }
                catch (error) {
                    alert(error);
                    console.error(error);
                }
            }
        )();

    }, []);
}

export default useFetch;