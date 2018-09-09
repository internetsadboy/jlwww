import React, { Component, PropTypes } from 'react'
import style from './style.css'

class Brands extends Component {
  render() {
    return (
        <div className={style.primaryContainer}>
            <h2>{'[ brands // artists ]'}</h2>
            <ul style={{ marginLeft: '-20'}}>
                <li>
                  {'• '}<a href="https://twitch.com" target="_new">{'TWITCH'}</a>
                </li>
                <li>
                  {'• '}<a href="https://modernfertility.com/" target="_new">{'MODERN FERTILITY'}</a>
                </li>
                <li>
                  {'• '}<a href="http://hippiesabotage.com/" target="_new">{'HIPPIE SABOTAGE'}</a>
                </li>
                <li>
                  {'• '}<a href="http://dennislloydmusic.com/" target="_new">{'DENNIS LLOYD'}</a>
                </li>
                <li>
                  {'• '}<a href="https://lunikadesigns.com/" target="_new">{'L\'ÚNIKA DESIGNS (FRANCESCA GIOVACCHINI)'}</a>
                </li>
                <li>
                  {'• '}<a href="https://www.instagram.com/thehellajam" target="_new">{'JAYME SY D\'AMICO'}</a>
                </li>
                <li>
                  {'• '}<a href="https://www.instagram.com/shanberries" target="_new">{'SHAN BERRIES'}</a>
                </li>
            </ul>
            {this.props.children}
        </div>
    )
  }
}

Brands.propTypes = {
  children: PropTypes.node
}

export default Brands
