import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import style from './style.css'

class Portfolio extends Component {
  render() {
    // Very naive solution (but works for most cases. this is just a portfolio site)
    const isMobile = window.innerWidth <= 500 && window.innerHeight <= 900
    let containerWidth = isMobile ? 300 : 600

    return (
        <div className={style.primaryContainer} style={{ width: containerWidth }}>
            <h2>{'[ portfolio ]'}</h2>
            <ul style={{ marginLeft: '-20' }}>
              <li>{'• '}<Link to="/lunika">{'L\'únika - BTS'}</Link></li>
              <li>{'• '}<Link to="/cyberpunk">{'THE CYBERPUNK'}</Link></li>
              <li>{'• '}<Link to="/prisoner">{'THE PRISONER'}</Link></li>
              <li>{'• '}<Link to="/hippie-sabotage">{'Hippie Sabotage'}</Link></li>
              <li>{'• '}<Link to="/dennis-lloyd">{'Dennis Lloyd'}</Link></li>
              <li>{'• '}<Link to="/bota">{'BOTA'}</Link></li>
              <li>{'• '}<Link to="/smile-more">{'SMILE MORE'}</Link></li>
            </ul>
            {this.props.children}
        </div>
    )
  }
}

Portfolio.propTypes = {
  children: PropTypes.node
}

export default Portfolio
