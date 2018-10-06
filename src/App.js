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
import DogsPants from './DogsPants'
import DogsShoes from './DogsShoes'
import DogsAllProducts from './DogsAllProducts'

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

        {/* <Trending />
        <MensShirts />
        <MensPants />
        <MensShoes />
        <MensAllProducts />
        <WomensShoes />
        <WomensShirts />
        <WomensPants />
        <WomensAllProducts />
        <DogsShirts />
        <DogsPants />
        <DogsShoes />
        <DogsAllProducts /> */}
        {/* final buy item page. 2 columns. image left. description, price, rate, buy button and size selector on right */}
        <div className="tabs is-centered">
          <ul>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fas fa-home" />
                </span>
                <span>TUBSS Home</span>
              </a>
            </li>
            <li className="is-active">
              <a>
                <span className="icon is-small">
                  <i className="fas fa-male" />
                </span>
                <span>Mens</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fas fa-female" />
                </span>
                <span>Womens</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fas fa-paw" />
                </span>
                <span>Dogs</span>
              </a>
            </li>
          </ul>
        </div>
        <section className="section">
          <div className="container">
            <h1 className="subtitle">
              <strong>Men's Department</strong>
            </h1>
          </div>
          {/* here is department navbar */}
          <nav
            className="container breadcrumb has-arrow-separator"
            aria-label="breadcrumbs"
          >
            <ul>
              <li className="is-active">
                <a href="#">Shirts</a>
              </li>
              <li>
                <a href="#">Pants</a>
              </li>
              <li className="is-active">
                <a href="#">Shoes</a>
              </li>
              <li className="is-active">
                <a href="#" aria-current="page">
                  All Products
                </a>
              </li>
            </ul>
          </nav>
        </section>
        <section class="section">
          <div class="container">
            <div class="columns">
              <div class="column is-half">
                <div className="card">
                  <div className="card-content">
                    <div className="content">
                      <strong>{Data[0].description}</strong>
                    </div>
                    <div className="card-image">
                      <figure className="image is-4by4">
                        <img src={Data[0].image} alt="Placeholder image" />
                      </figure>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <p>Price: {Data[0].price}</p>
                      <a href="#">
                        Rating: {Data[0].rating}{' '}
                        <i className="far fa-thumbs-up" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column is-half">Auto</div>
            </div>
          </div>
        </section>
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
