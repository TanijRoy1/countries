import React, { useState } from 'react';

const Country = ({country, handleVisitedCountries}) => {
    const [visited, setVisited] = useState(false);
    const handleVisit = () => {
        // setVisited(visited?false:true);
        setVisited(!visited);
        handleVisitedCountries(country, !visited);
    }
    const languages = country.languages.languages;
    // console.log(Object.entries(languages));
    return (
        <div className={`country ${visited && "bg-blue-300"} border-2 border-blue-700 p-2 rounded shadow-md`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} className='w-full' />
            <h1 className='font-bold text-center text-xl mt-2'>{country.name.common}</h1>
            <p><span className='font-medium'>Official Name:</span> <br /><span className='pl-5.5'>{country.name.official}</span></p>
            <div>
                <p className='font-medium'>Currency:</p>
                <Currency currency={country.currencies.currencies}></Currency>
            </div>
            <p><span className='font-medium'>Capital:</span> {country.capital.capital}</p>
            <div>
                <p className='font-medium'>Languages:</p>
                <ul>
                    {/* <Languages languages={country.languages.languages}></Languages> */}
                    {
                        Object.entries(languages).map(([code, name]) =>(
                            <Languages key={code} name={name}></Languages>
                        ))
                    }
                </ul>
            </div>
            <p><span className='font-medium'>Area:</span> {country.area.area}m<sup>2</sup> ({country.area.area<300000? "Small Counrtry":"Big Country"})</p>
            <p><span className='font-medium'>Population:</span> {country.population.population}</p>
            <p><span className='font-medium'>Continents:</span> {country.continents.continents.join(", ")}</p>
            <button onClick={handleVisit} className='border-2 rounded px-3 py-1 cursor-pointer bg-white'>{visited?"Visited":"Not Visited"}</button>
        </div>
    );
};

const Currency = ({currency}) => {
    for(const code in currency){
        // console.log(code);
        const {name, symbol} = currency[code];
        // console.log(name, symbol);
        return (
          <ul>
            <li className='text-gray-700 list-disc list-inside'>Name: {name}</li>
            <li className='text-gray-700 list-disc list-inside'>Symbol: {symbol}</li>
         </ul>
        )
  }
}
// const Languages = ({languages}) => {
//     const newLanguages = [];
//     for(const code in languages) {
//         // console.log(languages[code]);
//         newLanguages.push(languages[code]);
//     }
//     // console.log(newLanguages);
//     return (
//       newLanguages.map(language => <li key={language} className='text-gray-700 list-disc list-inside'>{language}</li>)
//     )
// };
const Languages = ({name}) => {
    return (
        <li className='text-gray-700 list-disc list-inside'>{name}</li>
    )
}

export default Country;