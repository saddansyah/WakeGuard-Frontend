import axios from "axios";

const useAddContact = ({ url, data, dispatch, type, setLoading, setMessage }) => {
    const add = async () => {
        setLoading(true);
        try {
            const json = await axios.post(url,
                {
                    ...data
                },
                {
                    headers:
                    {
                        'Content-type': 'application/json',
                        'ngrok-browser-skip-warning': 69420
                    }
                });

            const { response, status } = await json.data;
            console.log(response);

            dispatch({ type, payload: response });
            setLoading(false);
            setMessage({ error: false, severity: 'success', message: `Successfully fetched at ${url}` })

        }
        catch (error) {
            alert(error.stack);
            console.error(error);
            setMessage({ error: true, severity: 'error', message: error || `Something bad is happened` });
            setLoading(false);
        }
    }

    const handleAdd = async (e) => {
        e.stopPropagation();
        e.preventDefault();

        if (!!data.length) {
            await add();
        }

    }

    return { add, handleAdd };
}

export default useAddContact;