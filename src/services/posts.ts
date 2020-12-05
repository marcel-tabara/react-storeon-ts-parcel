import { Post } from './types'

export function apiGetPosts(): Promise<Post[]> {
  return fetch('https://jsonplaceholder.typicode.com/posts').then((response) => response.json())
}
