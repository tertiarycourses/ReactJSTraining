import React from 'react'
import { Link } from 'react-router-dom'

const ReduxHeader = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/shows'>Shows</Link></li>
        <li><Link to='/people'>People</Link></li>
      </ul>
    </nav>
  </header>
)

export default ReduxHeader;
