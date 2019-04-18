import React, { Component } from 'react'
import './style.css'
import SearchBar from '../../components/SearchBar'
import HeroTable from '../../components/HeroTable'

class App extends Component {
  render () {
    return (
      <div className=''>
        <SearchBar placeHolder='search hero' />
        <HeroTable />
      </div>
    )
  }
}

export default App
