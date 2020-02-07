import React from 'react';
import '../App.css';

const Navbar = ({ homeClick}) => {
  return (
  	<div className='sticky-nav'>
  		<nav className="pa3 pa4-ns dib fixed w-100 top" 
  			style={{position: 'absolute', top: 0, flex: 1, alignSelf: 'stretch', right: 0, left:0}}>
  			<h1><a onClick={homeClick} className="link black" href="#" title="Home">Mixed Drinks</a></h1>
  			<div className="tc pb3">
			    <a onClick={homeClick} className="link dim gray f6 f5-ns dib mr3" href="#" title="Home">Home</a>
			    <a className="link dim gray f6 f5-ns dib mr3" href="#" title="About">About</a>			    
  			</div>
		</nav>
	</div>
	)
    
}

export default Navbar;
