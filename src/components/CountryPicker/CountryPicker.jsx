import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';

import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange}) => {

  const [fetchedCountries, setFetchedCounttries] = useState([]);


  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCounttries(await fetchCountries());
    }

    fetchAPI()
  }, [setFetchedCounttries]);


  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value=''>United States</option>
        {fetchCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default CountryPicker