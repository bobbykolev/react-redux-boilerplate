import React, { PropTypes } from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className="card">
      	{this.props.title && <header><div className={this.props.color}></div><h2>{this.props.title}</h2></header>}
        {this.props.children}
      </div>
    );
  }
}

Card.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string,
  color: PropTypes.string
};

export default Card;  