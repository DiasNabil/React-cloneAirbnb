import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Cards from './components/cards-section/Cards'
import data from './data.js'

export default function App () {
  const card = data.map(data => {
    return(
      <Cards
        key={data.id}

        /**faire passer les propriétés d'un objet avec la syntaxe de décomposition 
         * c'est comme si on passer chaque props de cette manière:  key={data.id}
         */
        {...data}
      />
    )
  })


  return (
    <div>
      <Nav/>
      <Hero/>
      <div className="slider">
        {card}
      </div>
    </div>
  )
}