import { RouterEvents, RouterState } from '@storeon/router'
import { Route } from '../router/types'
import { Post } from '../services/types'
import { clearPosts, getPosts, getPostsFailure, getPostsRequest, getPostsSuccess } from './actions'

export type PostStatus = 'pending' | 'success' | 'error'

export interface CounterState {
  counter: number
}

export interface CounterEvents {
  inc: undefined
  dec: undefined
}

export interface PostsState {
  posts: {
    data: Post[]
    status: PostStatus
  }
}

export interface CreatePost extends Omit<Post, 'id'> {}

export interface PostsEvents {
  [getPosts]: undefined
  [getPostsSuccess]: Post[]
  [getPostsFailure]: undefined
  [getPostsRequest]: undefined
  [clearPosts]: undefined
}

export type State = PostsState & CounterState & RouterState<Route>
export type Events = PostsEvents & CounterEvents & RouterEvents<Route>
