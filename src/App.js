import React, { Component } from 'react'
import Data from './Data.json'

import './App.css'
import Trending from './Trending'
import MensShirts from './MensShirts'
import MensPants from './MensPants'
import MensShoes from './MensShoes'
import MensAllProducts from './MensAllProducts'
import WomensShoes from './WomensShoes'
import WomensShirts from './WomensShirts'
import WomensPants from './WomensPants'
import WomensAllProducts from './WomensAllProducts'
import DogsShirts from './DogsShirts'

class App extends Component {
  render() {
    return (
      <div>
        {/* header */}
        <section className="hero is-success">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">The Universe's Best Shopping Site</h1>
            </div>
          </div>
        </section>

        {/* <Trending /> */}
        {/* <MensShirts /> */}
        {/* <MensPants /> */}
        {/* <MensShoes /> */}
        {/* <MensAllProducts /> */}
        {/* <WomensShoes /> */}
        {/* <WomensShirts /> */}
        {/* <WomensPants /> */}
        {/* <WomensAllProducts /> */}
        <DogsShirts />

        {/* footer here, stays on main page === not component */}
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              Made with <i className="fas fa-heart" /> in St Petersburg, FL.
              2018 Benjamin Kent,
              <a href="http://benjaminkent.io/"> benjaminkent.io</a>
            </p>
          </div>
        </footer>
      </div>
    )
  }
}

export default App
