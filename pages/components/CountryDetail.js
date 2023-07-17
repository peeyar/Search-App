import React, { useEffect, useState } from 'react';

const CountryDetail = ({ commonName }) => {
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {

      console.log(commonName);

      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${commonName}`
        );
        const data = await response.json();
        setCountryData(data[0]);
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchData();
  }, [commonName]);

  if (!countryData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Country Details</h2>
      <p>Name: {countryData.name.common}</p>
      <p>Official Name: {countryData.name.official}</p>
    </div>
  );
};

export default CountryDetail;
