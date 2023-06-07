import axios from "axios";

const useDeleteContact = ({ url, dispatch, type, setLoading, setMessage }) => {
    const remove = async (id) => {
        setLoading(true);
        try {
            const json = await axios.delete(`${url}/${id}`,
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
            setMessage({ error: false, severity: 'success', message: `Successfully fetched at ${url}` });
        }
        catch (error) {
            alert(error.stack);
            setMessage({ error: true, severity: 'error', message: error || `Something bad is happened` });
            setLoading(false);
        }
    }

    const handleDelete = async (e, id, name) => {
        e.stopPropagation();
        e.preventDefault();
        if (window.confirm(`Are you want to delete ${name}?`)) {
            await remove(id);
        }

    }

    return { remove, handleDelete };
}

export default useDeleteContact;