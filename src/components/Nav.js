import React from 'react';
import { Link, IndexLink } from 'react-router';

class Nav extends React.Component {
	constructor (props) {
		super(props);
        this.state = {
            isOpen: false,
        };
        this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu (e){
		e && e.preventDefault();

		let current = !this.state.isOpen;
		this.setState({isOpen: current});
	}

	render () {
		return (
		  <nav className="navbar navbar-default">
		    <div className="container-fluid">
		        <div className="navbar-header">
		            <button type="button" className="navbar-toggle collapsed" id="nav-ani-icon" aria-expanded="false" 
		            		className={this.state.isOpen ? 'open navbar-toggle collapsed' : 'navbar-toggle collapsed'}
		            		onClick={this.toggleMenu}>
		                <span className="icon-bar"></span>
		                <span className="icon-bar"></span>
		                <span className="icon-bar"></span>
		            </button>
		            <a className="navbar-brand">
		                Eis
		            </a>
		        </div>
		        <div className={this.state.isOpen ? 'navbar-collapse' : 'collapse navbar-collapse'} id="main-menu">
		            <ul className="nav navbar-nav">
		                <li className="nav-item">
		                	<IndexLink to="/">Home</IndexLink>   
		                </li>
		                <li className="nav-item">
		                	<Link to="/about">About</Link>    
		                </li>
		            </ul>
		        </div>
	    	</div>
		  </nav>
		);
	}
}

export default Nav;

/*
<nav className="main-nav">
	    <IndexLink to="/">Home</IndexLink>
	    <Link to="/about">About</Link>
	  </nav>
*/