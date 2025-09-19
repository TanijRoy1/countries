import React, { use, useState } from 'react';
import Country from './Country';

const Countries = ({countriesPromise}) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountries = (country, isVisited) => {
        // console.log("visited countries from countries", country);
        if (isVisited) {
            setVisitedCountries(prev => 
                prev.find(c => c.name.common === country.name.common)?prev:[...prev, country]
            )
        } else {
            setVisitedCountries(prev => 
                prev.filter(c => c.name.common !== country.name.common)
            )
        }
        // const newVisitedCountries = [...visitedCountries, country]
        // setVisitedCountries(newVisitedCountries);
    }
    return (
        <div className='bg-gray-200 w-11/12 mx-auto py-5'>
            <h1 className='text-2xl font-bold text-center mb-3'>Countries: {countries.length}</h1>
            <p className='px-3 text-xl font-semibold'>Visited Countries: {visitedCountries.length} </p>
            <ol className='mx-3'>
                {visitedCountries.map(country => <li className='list-decimal list-inside' key={country.ccn3.ccn3}>{country.name.common}</li> )}
            </ol>
            <div className='p-3 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2.5'>
                {
                    countries.map(country => <Country key={country.ccn3.ccn3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;