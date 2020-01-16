import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <p>
          <label>
            Bravo ! Entre ton prénom :
           
          </label>
          <button type="submit">J’ai gagné !</button>
        </p>
      </div>
    )
  }
}


export default Header