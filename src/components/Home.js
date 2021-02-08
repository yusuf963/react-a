import React from 'react'
import Footer from './Footer'
import './Home.css'

const Home = () => {
  return (
    <>

      <div className="hero-home">
        <div className='home-paragraph-container'>
          <p className='home-paragraph'>Hi, I professionally connected with the web development industry<br></br> information technology  and <small>-you know what-</small> with the entire computer.<br></br><br></br> Organized and  problem solver, with high attention to detail,<br></br>Full-Stack developer and fan of ReactJS...<br></br><br></br>
         If there is any new technology, I am the first one<br></br> of the team to grasp it, not only because of learning fast,<br></br>  but also to teach it to the rest<br></br> of the team as I have teaching skills and I really injoy it<br></br><br></br><p className='partof'>I value simple content structure<br></br> clean design patterns<br></br> thoughtful interactions<br></br>and good user experience</p></p>
    
       
        </div>
        {/*          
         <br></br> middleware at your disposal, creating a robust API is<br></br> quick and easy.Performance
Express provides a thin layer of fundamental <br></br>web application features, without obscuring Node.js features that you know<br></br> and love.By default with version npm 5.0+ npm install adds the module to the <br></br>dependencies list in the package.json file; with earlier versions of npm, you <br></br>must specify the --save option explicitly. Then, afterwards, running <br></br>npm install in the app directory will automatically install modules in the dependencies list. */}
        {/* I value simple content structure, clean design patterns, and thoughtful interactions
I like to code things from scratch, and enjoy bringing ideas to life in the browser
I genuinely care about people, and love helping fellow designers work on their craft
       
         */}
        <Footer />
      </div>
    </>
  )
}

export default Home