import React, { Component, PropTypes } from 'react'
import style from './style.css'




class Lunika extends Component {

  render() {
    // Very naive solution (but works for most cases. this is just a portfolio site)
    const isMobile = window.innerWidth <= 500 && window.innerHeight <= 900
    let containerWidth = isMobile ? 300 : 600

    return (
        <div className={style.subnav} style={{ width: containerWidth }}>
            {this.props.children}

            <div style={{border: '0px solid'}}>

              <div style={{border: '0px solid red', textAlign: 'center'}}>

                <div
                  style={{
                    color: 'white',
                    backgroundColor: 'black',
                    fontSize: 24,
                    marginBottom: 15,
                    letterSpacing: 2
                  }}>
                  {'L\'ÙNIKA x THE HELLAJAM'}
                </div>

                <div className={style.contentWrapper}>
                  <video src="portfolio/lunika/LUNIKA HIGH.mp4" autoPlay={true} loop={true} muted={true}>
                  </video>
                </div>

                <div className={style.contentWrapper}>
                  <img src="portfolio/lunika/JAM-11-BNW-04838.jpg" alt="" />
                </div>


                <div className={style.contentWrapper}>
                  <table>
                    <tr>
                      <td>
                        <video src="portfolio/lunika/french-v02.mp4" autoPlay={true} loop={true} muted={true}>
                        </video>
                      </td>
                      <td>
                        <video src="portfolio/lunika/french-v02.mp4" autoPlay={true} loop={true} muted={true}>
                        </video>
                      </td>
                    </tr>
                  </table>
                </div>


                  <div className={style.contentWrapper}>
                    <img src="portfolio/lunika/FJ-04-04782.jpg" alt="img failed to load" />
                  </div>

                  <div className={style.contentWrapper}>
                    <img src="portfolio/lunika/FJ-16-BNW-04965.jpg" alt="img failed to load" />
                  </div>


                <div className={style.contentWrapper}>
                  <h2 style={{ fontFamily: 'helvetica light'}}>The more you <span className={style.italic}>care;</span> the less you <span className={style.italic}>do</span>.</h2>
                </div>

                <div className={style.contentWrapper}>
                  <video src="portfolio/lunika/jam - v1.mp4" autoPlay={true} loop={true} muted={true}>
                  </video>
                </div>

                <div>
                  <h1>BLUE HOUR</h1>
                </div>

                <div className={style.contentWrapper}>
                  <img src="portfolio/lunika/FRENCH-GRIZZLY-25-BNW-WAVE-03024.jpg" autoPlay={true} loop={true} muted={true}/>
                  <div>DSC03024.ARW</div>
                </div>

                <div className={style.contentWrapper}>
                  <img src="portfolio/lunika/FRENCH-GRIZZLY-28-STANDUP-BNW-03010.jpg" autoPlay={true} loop={true} muted={true}/>
                  <div>DSC03010.ARW</div>
                </div>

                <div className={style.contentWrapper}>
                  <img src="portfolio/lunika/FRENCH-GRIZZLY-11-CAR-LIT-03203.jpg" autoPlay={true} loop={true} muted={true}/>
                  <div>DSC03203.ARW</div>
                </div>

                <div className={style.contentWrapper}>
                  <img src="portfolio/lunika/FRENCH-GRIZZLY-01-TRUCK-03050.jpg" autoPlay={true} loop={true} muted={true}/>
                  <div>DSC03050.ARW</div>
                </div>

                <div>
                  <h1>SOBER</h1>
                  <h3>AND HIGH</h3>
                </div>

                <div className={style.contentWrapper}>
                  <img src="portfolio/lunika/FJ-07-04876.jpg" alt="" />
                </div>



                <div className={style.contentWrapper}>
                  <img style={{margin: '2px 3px'}} width="278"  src="portfolio/lunika/FJ-05-04863.jpg" alt="" />
                  <img style={{margin: '2px 3px'}} width="278"  src="portfolio/lunika/FRENCH-03-04768.jpg" alt="" />
                </div>

                <div>
                  <h1>FIELD OF DREAMS</h1>
                </div>

                <div className={style.contentWrapper}>
                  <video src="portfolio/lunika/FIELD OF DREAMS.mp4" autoPlay={true} loop={true} muted={true}>
                  </video>
                </div>

                <div>
                  <h1>
                    <a
                      style={{color:'black'}}
                      target="_new"
                      href="https:/www.instagram.com/thehellajam/">
                      {'@THEHELLAJAM'}
                    </a>
                  </h1>
                  <h3 style={{fontStyle: 'italic', fontFamily: 'arial'}}>BLUE FEEL</h3>
                </div>

                <div className={style.contentWrapper}>
                  <video src="portfolio/lunika/JAM - SHOES.mp4" autoPlay={true} loop={true} muted={true}>
                  </video>
                </div>

              </div>
            </div>
        </div>
    )
  }
}

Lunika.propTypes = {
  children: PropTypes.node
}

export default Lunika
