import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './components/app'
import About from './components/app/about'
import Portfolio from './components/app/portfolio'
import Brands from './components/app/brands'

// Portfolio components which have their own page/presentation
import Lunika from './components/app/lunika'
import HippieSabotage from './components/app/hippie-sabotage'
import DennisLloyd from './components/app/dennis-lloyd'

import SmileMore from './components/app/smile-more'
import Bota from './components/app/bota'

import Prisoner from './components/app/prisoner'
import Cyberpunk from './components/app/cyberpunk'


render((
    <Router history={browserHistory}>
        <Route component={App} path="/">
          <Route component={About} path="/about" />
          <Route component={Brands} path="/brands" />
          <Route component={Portfolio} path="/portfolio" />
          <Route component={Lunika} path="/lunika" />
          <Route component={HippieSabotage} path="/hippie-sabotage" />
          <Route component={DennisLloyd} path="/dennis-lloyd" />
          <Route component={SmileMore} path="/smile-more" />
          <Route component={Bota} path="/bota" />
          <Route component={Cyberpunk} path="/cyberpunk" />
          <Route component={Prisoner} path="/prisoner" />
        </Route>
        <Route component={App} path="/about" />
    </Router>
), document.getElementById('app'))
