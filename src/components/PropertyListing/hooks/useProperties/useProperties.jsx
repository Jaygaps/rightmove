import { useState, useEffect } from 'react';

const useProperties = () => {
    const [properties, setProperties] = useState(undefined);

    useEffect(() => {
        const getProperties = async () => {
            const response = await fetch('http://localhost:3000/api/properties').then((response) => response.json());

            setProperties(response);
        };

        getProperties();
    }, []);

    return {
        properties,
    };
};

export default useProperties;
