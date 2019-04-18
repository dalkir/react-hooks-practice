import React from 'react'
import './style.css'

const heroes = [
  { name: 'Gandalf', race: 'Maia', age: '2019', weapon: 'Staff 🏑' },
  { name: 'Aragorn', race: 'Human', age: '120', weapon: 'Sword ⚔' },
  { name: 'Legolas', race: 'Elf', age: '200', weapon: 'Bow 🏹' },
  { name: 'Gimli', race: 'Dwarf', age: '139', weapon: 'Axe ⚒' },
  { name: 'Frodo', race: 'Hobbit', age: '33', weapon: 'Dagger 🗡' }
]

export default () => {
  const heroesRows = heroes.map((e, index) => (
    <tr class='character-row' key={index}>
      <td>{e.name}</td>
      <td>{e.race}</td>
      <td>{e.age}</td>
      <td>{e.weapon}</td>
      <td>
        <div class='controls'>
          <div>☠ Kill</div>
          <div>💍 Use Ring</div>
        </div>
      </td>
    </tr>
  ))

  return (
    <table class='characters-table'>
      <tr class='character-row'>
        <th>Name</th>
        <th>Race</th>
        <th>Age</th>
        <th>Weapon</th>
        <th />
      </tr>
      {heroesRows}
    </table>
  )
}
