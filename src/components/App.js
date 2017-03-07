import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Nav from './Nav';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div id="wrapper">
        	{this.props.children}
      	</div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
