import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Data from './Data.json'

class ShirtsMain extends Component {
  render() {
    const type = this.props.match.params.category

    const shirts = Data.filter(
      card => card.category === `${type}` && card.product === 'Shirt'
    )

    console.log(shirts)

    return (
      <>
        <div className="tabs is-centered">
          <ul>
            <li>
              <Link to="/">
                <span className="icon is-small">
                  <i className="fas fa-home" />
                </span>
                <span>TUBSS Home</span>
              </Link>
            </li>
            <li>
              <Link to="/mens">
                <span className="icon is-small">
                  <i className="fas fa-male" />
                </span>
                <span>Mens</span>
              </Link>
            </li>
            <li>
              <Link to="/womens">
                <span className="icon is-small">
                  <i className="fas fa-female" />
                </span>
                <span>Womens</span>
              </Link>
            </li>
            <li>
              <Link to="dogs">
                <span className="icon is-small">
                  <i className="fas fa-paw" />
                </span>
                <span>Dogs</span>
              </Link>
            </li>
          </ul>
        </div>
        {/* mens department, will have header as intro. breadcrumbs for shirt, pant, shoe. columns, 3 wide. */}
        <section className="section">
          <div className="container">
            <h1 className="subtitle">
              <strong class="department-name">{type} Department</strong>
            </h1>
          </div>
          {/* here is department navbar */}
          <nav
            className="container breadcrumb has-arrow-separator"
            aria-label="breadcrumbs"
          >
            <ul>
              <li>
                <a href="#">Shirts</a>
              </li>
              <li className="is-active">
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
        {/* cards go next in separate section. cards, three columns. all detail */}
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              {shirts.map(card => {
                return (
                  <div className="column is-one-third">
                    <div className="card">
                      <div className="card-content">
                        <div className="content">
                          <strong>{card.description}</strong>
                        </div>
                        <div className="card-image">
                          <figure className="image is-4by4">
                            <img src={card.image} alt="Placeholder image" />
                          </figure>
                        </div>
                      </div>
                      <div className="card-content">
                        <div className="content">
                          <p>Price: {card.price}</p>
                          <a href="#">
                            Rating: {card.rating}{' '}
                            <i className="far fa-thumbs-up" />
                          </a>
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

export default ShirtsMain
