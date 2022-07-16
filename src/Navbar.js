import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [darkmode, setDarkmode] = React.useState(false);
  const parent = document.body;
  const darkModeHandler = () => {
    parent.classList.toggle("dark-mode");
    setDarkmode((prevState) => !prevState);
  }
  return (
    <div>
      <nav>
        <span className="navhead">GOOGLE BOOKS</span>&nbsp;&nbsp;
        <span><Link to='/'>HOME</Link>
          <Link to='saved'>SAVED</Link></span>
        <span><button className="darkmode" onClick={darkModeHandler}>{darkmode ? 'Light Mode' : 'Dark Mode'}</button></span>
      </nav>
      <div className="bg-image"><h1>Google Books Search</h1><br /><h2>Search for and save books of interest.Built with React.</h2></div>

    </div>
  )
}

export default Navbar