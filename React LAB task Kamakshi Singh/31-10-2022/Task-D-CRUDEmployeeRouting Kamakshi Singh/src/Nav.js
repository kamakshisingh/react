import { Link } from 'react-router-dom';
import './Nav.css'


function Nav() {
    return ( 
        <div className='navbar'>
            <div className='nav-item'><Link to='/'>Home</Link></div>
            <div className='nav-item'><Link to='/add'>Add</Link></div>
            <div className='nav-item'><Link to='/updateall'>Update</Link></div>
            <div className='nav-item'><Link to='/delete'>Delete</Link></div>
        </div>
     );
}

export default Nav;