import React from 'react';
import PropTypes from 'prop-types';
import TopicIcon from '../../templates/TopicIcon';
import { Link } from "@reach/router";

class IconListItem extends React.PureComponent {

  render() {
    let content = '';

    if (this.props.image) {
      // Image provided as a url.
      content = (
        <Link to={this.props.link} className="dc-icon-link">
          <img src={this.props.image} alt={this.props.title} />
          <div>{this.props.title}</div>
        </Link>
      )
    }
    else {
      // Image provided by custom component.
      content = ( 
        <Link to={this.props.link} className="dc-icon-link">
          <TopicIcon 
            title={this.props.title} 
            size={this.props.size} 
            fill={this.props.color}
          />
          <div>{this.props.title}</div>
        </Link>
      )
    };

    return (
      <li key={this.props.identifier}>{content}</li>
    )
  }
}

IconListItem.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  identifier: PropTypes.string
};

export default IconListItem
