import React from 'react';
import '../App.css';

const Navbar = ({homeClick}) => {
  return (
  	<div>
  		<nav className="pt3 pt4-ns pb-2 dib w-100 top navigation">
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
