import React, { PropTypes } from 'react';
import Card from './Card';

class Content extends React.Component {
  constructor(props, context) {
    super(props, context);
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
