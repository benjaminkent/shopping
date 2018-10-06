import React, { Component } from 'react'
import Data from './Data.json'

class Trending extends Component {
  render() {
    const featuredFilter = Data.filter(card => card.rating === 5)

    return (
      <>
        {/* navigation bar, component on top of page to be rendered. change for
            which page is active */}
        {/* welcome section and cards for trending items. this section
            will be dynamically created and will sever as the home page */}
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
        <section className="welcome">
          <h2>Welcome to the best shopping site in the entire Universe!</h2>
          <p>
            Find what tickles your fancy and have an awesome time while you're
            here. Thanks for visiting!
          </p>
        </section>
        <section className="section">
          <div className="container">
            <h2 className="subtitle">
              <i className="fas fa-arrow-circle-down arrow" />
              Trending Now
              <i className="fas fa-arrow-circle-down arrow" />
            </h2>
            <div className="columns is-multiline">
              {featuredFilter.map(card => {
                return (
                  <div key={card.id} className="column is-one-quarter">
                    <div className="card">
                      <div className="card-image">
                        <figure className="image is-4by4">
                          <img src={card.image} alt="Placeholder image" />
                        </figure>
                      </div>
                      <div className="card-content">
                        <div className="content">{card.description}</div>
                        <div className="content">
                          Rating: {card.rating}{' '}
                          <i className="far fa-thumbs-up" />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default Trending
