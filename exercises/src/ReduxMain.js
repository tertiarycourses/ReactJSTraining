import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ReduxHome from './ReduxHome'
import ReduxShows from './ReduxShowContainer'

const ReduxMain = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ReduxHome}/>
      <Route path='/shows' component={ReduxShows}/>
    </Switch>
  </main>
)

export default ReduxMain;
