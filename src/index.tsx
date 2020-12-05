import * as React from 'react'
import { render } from 'react-dom'
import { StoreContext } from 'storeon/react'
import './assets/styles'
import NavBar from './components/NavBar'
import Router from './router'
import store from './store'

const App = () => (
  <StoreContext.Provider value={store}>
    <NavBar />
    <Router />
  </StoreContext.Provider>
)

const root = document.getElementById('root')
render(<App />, root)
