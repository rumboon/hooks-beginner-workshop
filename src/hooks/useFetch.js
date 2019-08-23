import React from 'react';

const useFetch = (url) => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        fetchData(url);
    }, [url]);

    async function fetchData(url) {
        try {
            const response = await fetch(url);
            const result = await response.json();

            setData(result);
        } catch(e) {
            console.error(e);
            setData([]);
        }
    }

    return data;
};

export default useFetch;