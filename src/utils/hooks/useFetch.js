import { useState, useEffect } from 'react'

export const useFetch = (service, query = '') => {
    const [data, setData] = useState({
        data: null,
        loading: true,
        error: null,
    });
    useEffect(() => {
        service(query).then((response) => {
            setData({
                data: response,
                loading: false,
                error: null
            });
        }).catch((error) => {
            setData({
                data: null,
                loading: false,
                error
            });
        });
    }, [service, query])

    return data;
}
