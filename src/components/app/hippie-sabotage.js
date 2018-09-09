import React, { Component, PropTypes } from 'react'
import style from './style.css'

class HippieSabotage extends Component {
  render() {
    // Very naive solution (but works for most cases. this is just a portfolio site)
    const isMobile = window.innerWidth <= 500 && window.innerHeight <= 900
    let containerWidth = isMobile ? 300 : 600

    return (
        <div className={style.subnav} style={{ width: containerWidth }}>
          <div style={{border: '0px solid red', textAlign: 'center'}}>
            <div
              style={{
                color: 'white',
                backgroundColor: 'black',
                fontSize: 24,
                marginBottom: 15,
                letterSpacing: 2
              }}>
              {'HIPPIE SABOTAGE'}
            </div>
            <div>
              currently under dev
            </div>
              {this.props.children}
          </div>
        </div>
    )
  }
}

HippieSabotage.propTypes = {
  children: PropTypes.node
}

export default HippieSabotage
