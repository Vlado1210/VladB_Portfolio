import React from 'react'
import { Link} from 'react-router-dom';

const Navbar = () => {

    return (
    <div className='navbar'>
        <div className='logo'>
        <Link className="logo" to="/">
            <img src='https://imgur.com/YPqG8a0.png' alt='logo'/>
        </Link>
        </div>
    <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume"> Resume </Link>
    </div>
</div>
    )
}

export default Navbar