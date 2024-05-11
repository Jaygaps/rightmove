import React from 'react';
import PropertyCard from '../PropertyCard';
import './PropertyListing.scss';
import useProperties from './hooks/useProperties';

const PropertyListing = () => {
    const { properties } = useProperties();

    return (
        <ul className="PropertyListing">
            {properties?.slice(0, 5).map((property, index) => (
                <li key={index}>
                    <PropertyCard {...property} />
                </li>
            ))}
        </ul>
    );
};

export default PropertyListing;
