import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Navbar = ({ homeClick}) => {
  return (
  	<div className='sticky-nav'>
  		<nav className="pa3 pa4-ns dib fixed w-100 top" 
  			style={{position: 'absolute', top: 0, flex: 1, alignSelf: 'stretch', right: 0, left:0}}>
  			<h1><a onClick={homeClick} className="link black" title="Home">Mixed Drinks</a></h1>
  			<div className="tc pb3">
			  	<Link to="/home" onClick={homeClick}>Home</Link>	
			    <Link to="/about">About</Link>			    
  			</div>
		</nav>
	</div>
	)
    
}

export default Navbar;
