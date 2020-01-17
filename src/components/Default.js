import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h2 className="display-3">404</h2>
            <h2>error</h2>
            <h2>page not found</h2>
            <Link to="/">
              <h3>Click here to go back</h3>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
