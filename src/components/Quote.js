import React from 'react'
import { useState } from 'react'
import './Quote.css'


const Quote = () => {
  const [quote, updateQuote] = useState({})
  const fetchingData = async () => {
    const proxyUrl = 'https://stormy-atoll-29846.herokuapp.com/'
    const apiUrl = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json'

    try {
      const res = await fetch(proxyUrl + apiUrl)
      const data = await res.json()
      updateQuote(data)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <><div className="parent-div">
      <div className="quote-container">
        <div className="quote-text">
          <i className="fas fa-quote-left"></i>
          <span>{quote.quoteText}</span>
        </div>
        <div className="quote-author">
          <span>{quote.quoteAuthor}</span>
        </div>
        <div className="button-container">
          <button className='new-quote' onClick={() => fetchingData()}>Click me</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Quote