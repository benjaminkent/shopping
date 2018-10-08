import React, { Component } from 'react'
import Data from './Data.json'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink
} from 'react-router-dom'
import { blue } from 'ansi-colors'

class ClothingItems extends Component {
  constructor(props) {
    super(props)

    this.state = {
      class: ''
    }
  }
  render() {
    const department = this.props.match.params.category
    const items = this.props.match.params.product

    const departmentItems = Data.filter(
      card => card.category === `${department}` && card.product === `${items}`
    )

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
              <strong className="department-name">
                {department} Department
              </strong>
            </h1>
          </div>
          {/* here is department navbar */}
          <div className="container tabs is-toggle is-toggle-rounded is-small">
            <ul>
              <li>
                <NavLink to={`/${department}`}>
                  <span className="is-small" />
                  <span>All Products</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/${department}/shirts`}
                  activeStyle={{
                    color: '#3273dc',
                    fontWeight: 'bold'
                  }}
                >
                  <span className="is-small" />
                  <span>Shirts</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/${department}/pants`}
                  activeStyle={{
                    color: '#3273dc',
                    fontWeight: 'bold'
                  }}
                >
                  <span className="is-small" />
                  <span>Pants</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/${department}/shoes`}
                  activeStyle={{
                    color: '#3273dc',
                    fontWeight: 'bold'
                  }}
                >
                  <span className="is-small" />
                  <span>Shoes</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </section>
        {/* cards go next in separate section. cards, three columns. all detail */}
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              {departmentItems.map(card => {
                return (
                  <div key={card.id} className="column is-one-third">
                    <div className="card">
                      <div className="card-content">
                        <div className="content">
                          <strong>{card.description}</strong>
                        </div>
                        <div className="card-image">
                          <figure className="image is-4by4">
                            <Link to={`/${department}/${items}/${card.id}`}>
                              <img src={card.image} alt="Placeholder image" />
                            </Link>
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

export default ClothingItems
