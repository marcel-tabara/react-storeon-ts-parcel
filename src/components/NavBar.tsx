import * as React from 'react'

const NavBar = () => {
  return (
    <div className="topnav">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/counter">Counter</a>
        </li>
        <li>
          <a href="/posts">Posts</a>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
