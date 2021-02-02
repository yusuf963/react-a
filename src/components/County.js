import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Country.css'



const Country = () => {
  const [countries, updateCountries] = useState([])
  const [region, updateRegion] = useState('All')
  const [search, updateSearch] = useState('')
  useEffect(() => {
    const fetchingData = async () => {
      const res = await axios.get('https://restcountries.eu/rest/v2/all')
      updateCountries(res.data)
    }
    fetchingData()
  }, [])

  //filterings
  const selectingRegion = () => {
    return countries.filter(country => {
      return (region === 'All' || (country.region === region))
        && country.name.toLowerCase().includes(search.toLocaleLowerCase())
    })
  }

  return (
    <>
      <div className="header-search">
        <select onChange={(e) => updateRegion(e.target.value)}>
          {<option >All</option>}
          <option >Africa</option>
          <option >Americas</option>
          <option >Asia</option>
          <option >Europe</option>
          <option >Oceania</option>
        </select>
        <input placeholder="Search by country name" onKeyUp={(e) => updateSearch(e.target.value)}></input>
      </div>
      <div className='counties-container'>
        {selectingRegion().map((country, index) => {
          return (
            <div className='country-card' key={index}>
              <h2>Name: {country.name}</h2>
              <h3> Native Name: {country.nativeName}</h3>
              <h3>Capitral:{country.capital}</h3>
              <h3>Population: {country.population}</h3>
              <p>Boreder Countries: {country.borders}</p>
              <img className='country-img' src={country.flag} alt={country.name} />
            </div>
          )
        })}
      </div>
    </>
  )
}
export default Country