import React, { Component } from 'react'
import Data from './Data.json'

class MensShoes extends Component {
  render() {
    const mensShoes = Data.filter(
      card => card.category === 'Mens' && card.product === 'Shoes'
    )

    return (
      <>
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
              <li className="is-active">
                <a href="#">Pants</a>
              </li>
              <li>
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
              {mensShoes.map(card => {
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

export default MensShoes
