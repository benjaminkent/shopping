import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Data from './Data.json'

import './App.css'
import Trending from './Trending'
import DepartmentMain from './DepartmentMain'
import ClothingItems from './ClothingItems'
import MensShoes from './MensShoes'
import MensAllProducts from './MensAllProducts'
import WomensShoes from './WomensShoes'
import WomensPants from './WomensPants'
import WomensAllProducts from './WomensAllProducts'
import DogsPants from './DogsPants'
import DogsShoes from './DogsShoes'
import DogsAllProducts from './DogsAllProducts'
import BuyIt from './BuyIt'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <>
            <section className="hero is-success">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title">The Universe's Best Shopping Site</h1>
                </div>
              </div>
            </section>

            <Switch>
              <Route exact path="/" component={Trending} />
              <Route exact path="/:category" component={DepartmentMain} />
              <Route path="/:category/:product" component={ClothingItems} />

              <MensShoes />
              <MensAllProducts />
              <WomensShoes />
              <WomensPants />
              <WomensAllProducts />
              <DogsPants />
              <DogsShoes />
              <DogsAllProducts />
              <BuyIt />
            </Switch>
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
          </>
        </Router>
        {/* header, always present === not component */}
      </div>
    )
  }
}

export default App
