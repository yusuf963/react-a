// importing libraries
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

//importing componenet
import Nav from './components/Nav'
import Home from './components/Home'
import Project from './components/Project'
import About from './components/About'
import Map from './components/Map'

// import 'bulma'
// import './styles/style.scss'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Map exact path='/map' />
          <Route exact path='/' ><Home /></Route>
          <Route exact path='/project'><Project /></Route>
          <Route exact path='/about'><About /></Route>
        </Switch>
      </BrowserRouter>

    </>
  )

}

export default App