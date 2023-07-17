import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const SearchList = ({ onCountryClick }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://restcountries.com/v3.1/independent?status=true'
        );
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Country List</h2>
      <ul>
        {countries.map((country, index) => (
          <li key={index}>
            <Link href="#" onClick={() => onCountryClick(country.name.common)}>
              {country.name.official}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchList;