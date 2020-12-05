import { routerKey, RouterState } from '@storeon/router'
import React from 'react'
import { useStoreon } from 'storeon/react'
import Counter from '../pages/Counter'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Posts from '../pages/Posts'
import { Route } from './types'

const Router = () => {
  let { [routerKey]: route } = useStoreon<RouterState<Route>>(routerKey)

  if (route.match === false) {
    return <NotFound />
  }

  switch (route.match.page) {
    case 'home':
      return <Home />
    case 'counter':
      return <Counter />
    case 'posts':
      return <Posts />
    default:
      return <NotFound />
  }
}

export default Router
