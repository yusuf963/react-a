// importing libraries
import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

//importing componenet
import Nav from './components/Nav'
import Home from './components/Home'
import Project from './components/Project'
import About from './components/About'
import Map from './components/Map'
import Country from './components/County.js'
import TvShow from './components/TvShow'

// import 'bulma'
// import './styles/style.scss'

const App = () => {
  return (
    <>
      <HashRouter>
        <Nav />
        <Switch>
          <Route exact path='/' ><Home /></Route>
          <Route exact path='/react-a/project'><Project /></Route>
          <Route exact path='/react-a/about'><About /></Route>
          <Map exact path='/react-a/map' />
          <Route exact path='/react-a/country'><Country /></Route>
          <Route exact path='/react-a/tvshow'><TvShow /></Route>
        </Switch>
      </HashRouter>
    </>
  )

}

export default App