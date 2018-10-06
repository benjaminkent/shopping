import React, { Component } from 'react'
import './App.css'
import Data from './Data.json'

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
        {/* navigation bar */}
        <div className="tabs is-centered">
          <ul>
            <li className="is-active">
              <a>
                <span className="icon is-small">
                  <i className="fas fa-home" />{' '}
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
        {/* welcome section */}
        <section className="welcome">
          <h2>Welcome to the best shopping site in the entire Universe!</h2>
          <p>
            Find what tickles your fancy and have an awesome time while you're
            here. Thanks for visiting!
          </p>
        </section>
        {/* cards, this part of the page will be dynamically created with components, will route to other components */}
        <section class="section">
          <div class="container">
            <div class="columns is-multiline">
              <div class="column">
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by4">
                      <img src={Data[5].image} alt="Placeholder image" />
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="content">An amazing article of clothing</div>
                  </div>
                </div>
              </div>
              <div class="column is-one-quarter">
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by4">
                      <img src={Data[10].image} alt="Placeholder image" />
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="content">An amazing article of clothing</div>
                  </div>
                </div>
              </div>
              <div class="column is-one-quarter">
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by4">
                      <img src={Data[7].image} alt="Placeholder image" />
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="content">An amazing article of clothing</div>
                  </div>
                </div>
              </div>
              <div class="column is-one-quarter">is-one-quarter</div>
              <div class="column is-one-quarter">is-one-quarter</div>
              <div class="column is-one-quarter">is-one-quarter</div>
              <div class="column is-one-quarter">is-one-quarter</div>
              <div class="column is-one-quarter">is-one-quarter</div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default App
