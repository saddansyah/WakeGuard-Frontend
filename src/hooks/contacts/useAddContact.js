import axios from "axios";

const useAddContact = ({ url, payload, dispatch, type, setLoading, setMessage }) => {
    const add = async () => {
        setLoading(true);
        try {
            const { stsTokenManager: { accessToken }, uid } = JSON.parse(sessionStorage.getItem("user"));

            const contacts = payload?.map(item => {
                return {
                    name: item.name[0],
                    number: item.tel[0],
                    isPinned: false
                }
            })

            const json = await axios.post(url,
                contacts,
                {
                    headers:
                    {
                        'Authorization': `Bearer ${accessToken}`,
                        'Content-type': 'application/json',
                        'ngrok-browser-skip-warning': 69420
                    }
                });

            const { data, status } = await json.data;
            console.log(data)

            dispatch({ type, payload: data });
            setLoading(false);
            setMessage({ error: false, severity: 'success', message: `Successfully fetched at ${url}` });
        }
        catch (error) {
            alert(error.stack);
            setMessage({ error: true, severity: 'error', message: error || `Something bad is happened` });
            setLoading(false);
        }
    }

    const handleAdd = async (e) => {
        e.stopPropagation();
        e.preventDefault();
        await add();


    }

    return { add, handleAdd };
}

export default useAddContact;