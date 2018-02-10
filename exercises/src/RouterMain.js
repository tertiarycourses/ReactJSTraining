import React from 'react'
import { Switch, Route } from 'react-router-dom'
import RouterHome from './RouterHome'
import RouterContact from './RouterContact'

// The Main component renders one of the two provided
// Routes (provided that one matches). The /contact
// route will match any pathname that starts
// with /contact. The / route will only match
// when the pathname is exactly the string "/"
const RouterMain = () => (
  <main>
    <Switch>
      <Route exact path='/' component={RouterHome}/>
      <Route path='/contact' component={RouterContact}/>
    </Switch>
  </main>
)

export default RouterMain;
