import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <section class="hero is-success">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">The Universe's Best Shopping Site</h1>
            </div>
          </div>
        </section>
        <div class="tabs is-centered">
          <ul>
            <li class="is-active">
              <a>
                <span class="icon is-small">
                  <i class="fas fa-home" />{' '}
                </span>
                <span>TUBSS Home</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon is-small">
                  <i class="fas fa-male" />
                </span>
                <span>Men</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon is-small">
                  <i class="fas fa-female" />{' '}
                </span>
                <span>Women</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon is-small">
                  <i class="fas fa-paw" />{' '}
                </span>
                <span>Dog</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default App
