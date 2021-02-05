import React from 'react'
import { useState } from 'react'
import './Quote.css'

// import { css } from "@emotion/core";
import PacmanLoader from 'react-spinners/PacmanLoader'


const Quote = () => {

  const [quote, updateQuote] = useState({})
  const [loading, setLoading] = useState(false)
  const fetchingData = async () => {
    setLoading(true)
    const proxyUrl = 'https://stormy-atoll-29846.herokuapp.com/'
    const apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'

    try {
      const res = await fetch(proxyUrl + apiUrl)
      const data = await res.json()
      updateQuote(data)
      setLoading(false)
    } catch (e) {
       fetchingData()
      console.log(e)
    }
  }
  // npm install react-loader-spinner --save
  return (
    <><div className="parent-div">
      <div className="quote-container">
        <div className="quote-text">
          <i className="fas fa-quote-left"></i>
          <span>{quote.quoteText}</span>
        </div>
        {loading && (<PacmanLoader color={'#D2D41B'} size={40} />)}
        <div className="quote-author">
          <span>{quote.quoteAuthor}</span>
        </div>
        <div className="button-container">
          <button className='new-quote' onClick={() =>  fetchingData()}>Click me</button>
         
        </div>
      </div>

    </div>
    </>
  )
}

export default Quote