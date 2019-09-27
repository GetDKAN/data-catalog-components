/* eslint-disable */
import React from 'react'
import StyledLink from './StyledLink'
import TopicImage from './TopicImage'

class IconListItem extends React.PureComponent {

  render() {
    let content = '';;

    if (this.props.image) {
      // Image provided as a url.
      content = (
        <StyledLink href={this.props.link}>
          <img src={this.props.image} alt={this.props.title} />
          <div>{this.props.title}</div>
        </StyledLink>
      )
    }
    else {
      // Image provided by custom component.
      content = ( 
        <StyledLink href={item.ref}>
          <TopicImage 
            title={this.props.title} 
            size={this.props.size} 
            fill={this.props.color}
          />
          <div>{this.props.title}</div>
        </StyledLink>
      )
    };

    return (
      <li key={this.props.index}>{content}</li>
    )
  }
}

export default IconListItem
