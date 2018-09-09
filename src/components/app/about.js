import React, { Component, PropTypes } from 'react'
import style from './style.css'


const Styles = {
  img: {
    marginTop: 35,
    maxWidth: 600
  },
  imgDescription: {
    fontSize: 12,
    paddingTop: 5,
    paddingLeft: 4
  }
}

class About extends Component {
  render() {
    // Very naive solution (but works for most cases. this is just a portfolio site)
    const isMobile = window.innerWidth <= 500 && window.innerHeight <= 900
    let containerWidth = isMobile ? 300 : 600

    return (
        <div className={style.primaryContainer} style={{ width: containerWidth}}>
            <h2>{'[ about ]'}</h2>
            <div className={style.about}>
              {'Here to tell stories.'}
            </div>
            <div className={style.about}>
              {'The more you '}<span className={style.emphasized}>{'care '}</span>{'the less you '}<span className={style.emphasized}>{'DO'}</span>{'.'}
            </div>
            <div style={{ paddingLeft: 8 }}>
              {'Know thyself.'}
            </div>
            {this.props.children}
            <div>
              <img style={Styles.img} src="JL/jl-haight-deux.jpg" />
              <div style={Styles.imgDescription}>{'Image taken by Lukas '}
                <span>
                  <a target="_new" href="https://instagram.com/kewlhandluke">@kewlhandluke</a>
                </span>
              </div>
            </div>
        </div>
    )
  }
}

About.propTypes = {
  children: PropTypes.node
}

export default About
