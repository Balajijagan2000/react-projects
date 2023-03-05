import React from 'react'

const Navbar = () => {
  return (
    <nav>

        <a href="/">

        <p className="brand">
          The
          <span>
            Cocktail
          </span>
          DB
        </p>

        </a>
        

        <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
        </ul>

    </nav>
  )
}

export default Navbar