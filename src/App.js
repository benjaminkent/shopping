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
        {/* navigation bar, stay on page === not component */}
        <div className="tabs is-centered">
          <ul>
            <li className="is-active">
              <a>
                <span className="icon is-small">
                  <i className="fas fa-home" />
                </span>
                <span>TUBSS Home</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fas fa-male" />
                </span>
                <span>Men</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fas fa-female" />{' '}
                </span>
                <span>Women</span>
              </a>
            </li>
            <li>
              <a>
                <span className="icon is-small">
                  <i className="fas fa-paw" />{' '}
                </span>
                <span>Dog</span>
              </a>
            </li>
          </ul>
        </div>
        {/* welcome section and cards for trending items. this section
            will be dynamically created and will sever as the home page */}
        <Trending />
        {/* footer here, stays on main page === not component */}
        <footer class="footer">
          <div class="content has-text-centered">
            <p>
              Made with <i class="fas fa-heart" /> in St Petersburg, FL. 2018
              Benjamin Kent,
              <a href="http://benjaminkent.io/"> benjaminkent.io</a>
            </p>
          </div>
        </footer>
      </div>
    )
  }
}

export default App
