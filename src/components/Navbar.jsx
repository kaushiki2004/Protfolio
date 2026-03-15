import React from 'react'

const Navbar = () => {
  return (
    <header className='navbar'>
        <div className='inner'>
            <a  className= "logo" href="#hero">Kaushiki Dubey</a>
            <nav className='desktop'>
                <ul></ul>
            </nav>
            <a href="#contact" className='contact-btn group'>
                <div className='inner'>
                    <span>Contact Me</span>
                </div>
            </a>
        </div>
    </header>
  )
}

export default Navbar