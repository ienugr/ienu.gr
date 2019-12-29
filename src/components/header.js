import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: this.props.isOpen,
    }
    
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu = () => {
    this.setState(state => {
      return {
        isOpen: !state.isOpen,
      }
    })
  }

  navLinks = () => {
    return this.props.siteLinks.map((link) => (
      <Link to={ link } key={ link } className="block px-2 py-1 text-gray-200 hover:bg-gray-700 rounded capitalize sm:ml-2">
        { link }
      </Link>
    ))
  }

  render() {
    return (
      <header className="bg-gray-800 sm:flex sm:justify-start shadow-md">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="text-gray-200 font-bold text-xl tracking-wide uppercase">
            <Link to="/">{ this.props.siteTitle }</Link>
          </div>
          <div className="sm:hidden">
            <button 
              className="text-gray-200 bg-gray-700 px-3 py-1 rounded"
              onClick={ this.toggleMenu }>
              { this.state.isOpen ? "Close" : "Menu" }
            </button>
          </div>
        </div>
        <div className={ (this.state.isOpen ? "block" : "hidden") + " px-2 pt-2 pb-4 sm:flex sm:pb-2 sm:items-center" }>
          { this.navLinks() }
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteLinks: PropTypes.array,
}

Header.defaultProps = {
  siteTitle: ``,
  siteLinks: [],
  isOpen: false,
}

export default Header
