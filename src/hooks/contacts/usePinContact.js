import axios from "axios";

const usePinContact = ({ url, dispatch, type, setLoading, setMessage }) => {
    const pin = async (id, payload) => {
        setLoading(true);
        try {
            const json = await axios.patch(`${url}/${id}`,
                {
                    isPinned: payload
                },
                {
                    headers:
                    {
                        'Content-type': 'application/json',
                        'ngrok-browser-skip-warning': 69420
                    }
                });

            const { data, status } = await json.data;

            dispatch({ type, payload: data });
            setLoading(false);
            setMessage({ error: false, severity: 'success', message: `Successfully pin ${data.name}` });
        }
        catch (error) {
            alert(error.stack);
            setMessage({ error: true, severity: 'error', message: error || `Something bad is happened` });
            setLoading(false);
        }
    }

    const handlePin = async (e, id, name, payload) => {
        e.stopPropagation();
        e.preventDefault();
        if (window.confirm(`Are you want to ${payload ? 'pin' : 'unpin'} ${name}?`)) {
            await pin(id, payload);
        }

    }

    return { pin, handlePin };
}

export default usePinContact;