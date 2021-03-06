import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Data from './Data.json'

class ShirtsMain extends Component {
  render() {
    const department = this.props.match.params.category

    const allProducts = Data.filter(card => card.category === `${department}`)

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
              <Link to="/dogs">
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
            <h1 className="subtitle department">
              <strong class="department-name">{department} Department</strong>
            </h1>
          </div>
          {/* here is department navbar */}
          <div class="container tabs is-toggle is-toggle-rounded is-small">
            <ul>
              <li className="is-active">
                <Link to={`/${department}`}>
                  <span class="is-small" />
                  <span>All Products</span>
                </Link>
              </li>
              <li>
                <Link to={`/${department}/shirts`}>
                  <span class="is-small" />
                  <span>Shirts</span>
                </Link>
              </li>
              <li>
                <Link to={`/${department}/pants`}>
                  <span class="is-small" />
                  <span>Pants</span>
                </Link>
              </li>
              <li>
                <Link to={`/${department}/shoes`}>
                  <span class="is-small" />
                  <span>Shoes</span>
                </Link>
              </li>
            </ul>
          </div>
        </section>
        {/* cards go next in separate section. cards, three columns. all detail */}
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              {allProducts.map(card => {
                return (
                  <div className="column is-one-third">
                    <div className="card">
                      <div className="card-content">
                        <div className="content">
                          <strong>{card.description}</strong>
                        </div>
                        <div className="card-image">
                          <figure className="image is-4by4">
                            <Link
                              to={`/${department}/${card.product}/${card.id}`}
                            >
                              <img src={card.image} alt="Placeholder image" />
                            </Link>
                          </figure>
                        </div>
                      </div>
                      <div className="card-content">
                        <div className="content">
                          <p>Price: {card.price}</p>
                          <a href="#">
                            Rating: {card.rating}
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
