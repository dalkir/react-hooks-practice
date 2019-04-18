import React, { Component } from 'react'
import FilterableHeroesTable from './containers/FilterableHeroesTable'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='index'>
        <h1>Fellowship of the Ring</h1>

        <FilterableHeroesTable />
      </div>
    )
  }
}

export default App
