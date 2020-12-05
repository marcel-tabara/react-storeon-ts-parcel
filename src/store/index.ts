import { createRouter } from '@storeon/router'
import { createStoreon } from 'storeon'
import { storeonDevtools, storeonLogger } from 'storeon/devtools'
import { Route } from '../router/types'
import counterModule from './counter'
import postsModule from './posts'
import { Events, State } from './types'

const store = createStoreon<State, Events>([
  counterModule,
  postsModule,
  createRouter<Route>([
    ['/', () => ({ page: 'home' })],
    ['/counter', () => ({ page: 'counter' })],
    ['/posts', () => ({ page: 'posts' })],
  ]),
  process.env.NODE_ENV !== 'production' && storeonDevtools && storeonLogger,
])

export default store
