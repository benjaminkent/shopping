import React, { Component } from 'react'
import Data from './Data.json'

class BuyIt extends Component {
  render() {
    return (
      <>
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
        <section className="section buy-it-main">
          <div className="container">
            <div className="columns">
              <div className="column is-half">
                <div className="card">
                  <div className="card-content">
                    <div className="card-image">
                      <figure className="image is-4by4">
                        <img src={Data[0].image} alt="Placeholder image" />
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
                        <strong>
                          {Data[0].category} {Data[0].product}
                        </strong>
                      </h1>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="content">{Data[0].description}</div>
                  </div>
                  <footer className="card-footer">
                    <a href="#" className="card-footer-item">
                      {Data[0].price}
                    </a>
                    <a href="#" className="card-footer-item">
                      {Data[0].rating}
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
