import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

import './TvShow.css'

const TvShow = () => {
  const [tvShow, updateTvShow] = useState([])
  const [season, updateSeason] = useState('All')
  const [search, updateSearch] = useState('')
  const [readMore, updateReadMore] = useState(false)

  useEffect(() => {

    const gettingShows = async () => {
      const res = await fetch('https://api.tvmaze.com/shows/82/episodes')
      const data = await res.json()
      updateTvShow(data)
    }
    gettingShows()
  }, [])

  const selectEpisode = () => {
    return tvShow.filter(episode => {
      return (season === 'All' || (episode.season === Number(season)))
        && episode.name.toLowerCase().includes(search.toLowerCase())
    })
  }

  return (
    <div className="tvshow-container">
      <div className="header-search">
        <select onChange={(e) => updateSeason(e.target.value)}>
          {<option >All</option>}
          <option value= '1' >Season 1</option>
          <option value= '2' >Season 2</option>
          <option value= '3' >Season 3</option>
          <option value= '4' >Season 4</option>
          <option value= '5' >Season 5</option>
          <option value= '6' >Season 6</option>
          <option value= '7' >Season 7</option>
          <option value= '8' >Season 8</option>
        </select>
        <input className='search-bar' placeholder="Search by country name" onKeyUp={(e) => updateSearch(e.target.value)}></input>
      </div>
      <div className="tv-container">

        {selectEpisode().map(item => {
          return (
            <div className="episode-card" key={item.id}>
              <h1 className='episode-name'>{item.name}</h1>
              <p>run Time: {item.runtime} minutes</p>
              <p>Season No: {item.season}</p>
              <p>Episode No: {item.number}</p>
              <p className='summry'>{readMore ? item.summary.replace('<p>', '').replace('</p>', '') : 
                `${item.summary.replace('<p>', '').replace('</p>', '').substring(0,75)}...` } 
              <a className='read-more' onClick={()=>updateReadMore(!readMore)}>
                {readMore ? 'show less' : 'read more'}
              </a></p>
              <a  href={item.url}><img src={item.image.medium} alt={item.name} /></a>
            </div>
          )
        })}
      </div> 
      </div>
  ) 
} 

export default TvShow  