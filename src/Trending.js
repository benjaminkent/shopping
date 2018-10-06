import React, { Component } from 'react'
import Data from './Data.json'

class Trending extends Component {
  render() {
    return (
      <>
        <section className="welcome">
          <h2>Welcome to the best shopping site in the entire Universe!</h2>
          <p>
            Find what tickles your fancy and have an awesome time while you're
            here. Thanks for visiting!
          </p>
        </section>
        <section class="section">
          <div class="container">
            <h2 className="subtitle">
              <i class="fas fa-arrow-circle-down arrow" />
              Trending Now
              <i class="fas fa-arrow-circle-down arrow" />
            </h2>
            <div class="columns is-multiline">
              <div class="column is-one-quarter">
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
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default Trending
