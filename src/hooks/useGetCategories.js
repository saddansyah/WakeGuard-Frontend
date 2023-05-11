import { useEffect } from "react";

const useGetCategories = ({ setCategories, setLoading, setMessage }) => {
    useEffect(() => {
        (
            async () => {
                setLoading(true);
                try {
                    const url = import.meta.env.VITE_APP_DUMMY_URL + '/articleCategory';
                    const response = await fetch(url);
                    const categories = await response.json();

                    if (response.ok) {
                        setCategories(categories.map(category => category.categoryName));
                        setLoading(false);
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

    }, []);
}

export default useGetCategories;
