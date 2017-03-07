import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Nav from './Nav';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onResize = this.onResize.bind(this);
  }

  componentWillMount () {
    window.addEventListener('resize', this.onResize);
    console.log('app')
    this.setState({
      windowWidth: window.innerWidth
    });
  }

  onResize () {
    this.setState({
      windowWidth: window.innerWidth
    });  
  }

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
