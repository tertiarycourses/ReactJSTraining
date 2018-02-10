import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import RouterApp from './RouterApp';

render((
  <BrowserRouter>
    <RouterApp />
  </BrowserRouter>
), document.getElementById('root'));
