import React, { Component } from 'react'
import Data from './Data.json'

import './App.css'
import Trending from './Trending'

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
        {/* mens department, will have header as intro. breadcrumbs for shirt, pant, shoe. columns, 3 wide. */}
        <section class="section">
          <div class="container">
            <h1 class="subtitle">
              <strong>Men's Department</strong>
            </h1>
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
