import React from 'react'
import { useStoreon } from 'storeon/react'
import { clearPosts, getPosts } from '../store/actions'
import { PostsEvents, PostsState } from '../store/types'

const Posts = () => {
  const { dispatch, posts } = useStoreon<PostsState, PostsEvents>('posts')
  const onGet = () => dispatch(getPosts)
  const onClear = () => dispatch(clearPosts)
  const { data, status } = posts

  return (
    <>
      <div className="wrapper">
        {!data.length ? (
          <button onClick={onGet}>Get Posts</button>
        ) : (
          <button onClick={onClear}>Clear Posts</button>
        )}
      </div>
      {status === 'pending' ? (
        <div className="wrapper">Loading</div>
      ) : (
        <div>
          {posts.data &&
            posts.data.map(({ userId, id, title, body }) => {
              return (
                <>
                  <div>userId: {userId}</div>
                  <div>id: {id}</div>
                  <div>title: {title}</div>
                  <div>body: {body}</div>
                  <br />
                </>
              )
            })}
        </div>
      )}
    </>
  )
}

export default Posts
