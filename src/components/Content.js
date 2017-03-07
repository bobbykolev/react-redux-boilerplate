import React, { PropTypes } from 'react';
import Card from './Card';

class Content extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onResize = this.onResize.bind(this);
  }

  componentWillMount () {
    window.removeEventListener('resize', this.onResize);
    window.addEventListener('resize', this.onResize);
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
          <Card title={'Home'}>
            Card
          </Card>
      </div>
    );
  }
}

Content.propTypes = {
  data: PropTypes.object.isRequired
};

export default Content;
