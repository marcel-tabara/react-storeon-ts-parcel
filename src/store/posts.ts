import { StoreonModule } from 'storeon'
import { apiGetPosts } from '../services/posts'
import { clearPosts, getPosts, getPostsFailure, getPostsRequest, getPostsSuccess } from './actions'
import { PostsEvents, PostsState } from './types'

const initialState: PostsState = {
  posts: {
    status: 'success',
    data: [],
  },
}

export const postsModule: StoreonModule<PostsState, PostsEvents> = (store) => {
  store.on('@init', () => initialState)
  store.on(getPosts, async () => {
    store.dispatch(getPostsRequest)
    try {
      const data = await apiGetPosts()
      store.dispatch(getPostsSuccess, data)
    } catch (e) {
      store.dispatch(getPostsFailure)
    }
  })
  store.on(clearPosts, (state) => ({
    posts: {
      ...state.posts,
      data: [],
    },
  }))
  store.on(getPostsRequest, (state) => ({
    posts: {
      ...state.posts,
      status: 'pending',
    },
  }))
  store.on(getPostsSuccess, (state, payload) => {
    return {
      ...state,
      posts: {
        status: 'success',
        data: payload,
      },
    }
  })
  store.on(getPostsFailure, (state) => ({
    ...state,
    posts: {
      ...state.posts,
      status: 'error',
    },
  }))
}

export default postsModule
