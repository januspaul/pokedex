import { useState, useEffect } from 'react';

export const useFetch = (pokeApi) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const getPokemons = async (pokeApi) => {
            
            try {
                let result = await fetch(pokeApi);

                if(!result.ok){

                    throw{
                        err: true, 
                        status: result.status, 
                        statusText: !result.statusText ? "is this an error?" : result.statusText,
                    };
                }

                let dataJson = await result.json();

                setIsPending(false);

                setData(dataJson);

                setError({err: false});
            } catch (err) {
                setIsPending(true);
                setError({err});
            }
        };
        
        getPokemons(pokeApi);
    }, [pokeApi]);

    return {data, isPending, error}
}