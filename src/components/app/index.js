import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import style from './style.css'

let navLinkStyle = {
  fontSize: '18',
  textDecoration: 'none',
  fontWeight: 'bold',
  letterSpacing: '2',
  color: 'black'
}

let navActiveLinkStyle = {
  color: 'yellow',
  backgroundColor: 'black',
  padding: '1px 6px'
}

let rootLinkStyle = {
  textDecoration: 'none',
  fontWeight: 'bold',
  color: 'black'
}


class App extends Component {
  render() {
    return (
        <div>
            <h1 className={style.header}><Link to="/" style={rootLinkStyle}>{'./jared'}</Link></h1>
            <div>
              <ul>
                  <li style={{ float: 'left'}}>
                    <Link to="/portfolio" style={navLinkStyle} activeStyle={navActiveLinkStyle}>{'portfolio'}</Link>
                  </li>
                  <li style={{ float: 'left'}}>
                    <Link to="/about" style={navLinkStyle} activeStyle={navActiveLinkStyle}>{'about'}</Link>
                  </li>
                  <li style={{ float: 'left'}}>
                    <Link to="/brands" style={navLinkStyle} activeStyle={navActiveLinkStyle}>{'brands'}</Link>
                  </li>
              </ul>
            </div>
            {this.props.children}
            <div>
              <ul className={style.footer}>
                <li><a target="_new" href="https://instagram.com/jaredlamont">instagram</a></li>
                <li><a target="_new" href="https://www.youtube.com/channel/UCWGOLBcOWqu8UXEOl2D1dCQ">youtube</a></li>
                <li><a target="_new" href="https://vimeo.com/user9611647">vimeo</a></li>
                <li><a href="mailto:jaredlamont90@gmail.com">email</a></li>
              </ul>
            </div>
        </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node
}

export default App
