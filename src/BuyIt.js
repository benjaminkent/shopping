import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Data from './Data.json'

class BuyIt extends Component {
  render() {
    const id = this.props.match.params.id

    const product = Data[id].product
    const department = Data[id].category
    const description = Data[id].description
    const rating = Data[id].rating
    const price = Data[id].price
    const imageURL = Data[id].image

    console.log(id)

    return (
      <>
        {/* final buy item page. 2 columns. image left. description, price, rate, buy button and size selector on right */}

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
        <section className="section buy-it-main">
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <div className="card">
                  <div className="card-content">
                    <div className="card-image">
                      <figure className="image is-4by4">
                        <img src={imageURL} alt="Placeholder image" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-half">
                <div className="card">
                  <div className="card-content">
                    <div className="content">
                      <h1>
                        <strong className="buy-item-name">
                          {department} {product}
                        </strong>
                      </h1>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="content">{description}</div>
                  </div>
                  <footer className="card-footer">
                    <a href="#" className="card-footer-item">
                      {price}
                    </a>
                    <a href="#" className="card-footer-item">
                      {rating}
                      <i className="far fa-thumbs-up thumbs-up" />
                    </a>
                  </footer>
                </div>
                <div className="buy">
                  <select className="size">
                    <option value="choose-size">Choose your Size</option>
                    <option value="x-small">Extra Small</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="x-large">Extra Large</option>
                  </select>
                  <a className="button is-success">
                    Add to
                    <i className="fas fa-shopping-cart" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default BuyIt
