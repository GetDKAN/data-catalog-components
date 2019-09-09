/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';
import Wrapper from './Wrapper';
import excerpts from 'excerpts';
import TopicImage from '../IconListItem/TopicImage'

class SearchListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  formats(distribution) {
    if (!distribution) {
      return null;
    }
    else {
      let i = 0;
      return distribution.map((dist) => {
        i++
        const format = dist.format === undefined ? '' : dist.format.toLowerCase();
        return <div title={`format: ${dist.format}`}
          key={`dist-id-${dist.identifier}-${i}`}
          className="label"
          data-format={format}>{format}</div>
      })
    }
  }

  themes(theme) {
    if (!theme) {
      return null;
    }
    else {
      let i = 0;
      return theme.map(function(topic) {
        i++
        // if (topic.icon) {
        //   return <div key={`dist-${topic.identifier}-${i}`}>
        //     <img src={topic.icon} height="16px" width="16px" alt={topic.alt} /> 
        //     {topic.title}
        //   </div>
        // }
        // else {
          return <div key={`dist-${topic.identifier}-${i}`}>
            <TopicImage title={topic.title} height="16" width="16" fill="#A7AAAC"/>
            {topic.title}
          </div>
          
        //}
        
      })
    }
  }

  render() {

    const item = this.props.item;
    const description = excerpts(item.description, {words: 35});
    const formats = this.formats(item.format);
    const themes = this.themes(item.theme);

    // Put together the content of the repository
    const content = (
      <Wrapper key={`wrapper-${item.identifier}`} className="search-list-item">
        <a href={item.ref}>
          <h2>{ item.title }</h2>
        </a>
        <div className="item-theme">
          {themes}
        </div>
        <div className="item-description">
          {description}
        </div>
        <div className="item-org">
          <strong>organization:</strong> {item.publisher}
        </div>
        <div className="format-types">
          {formats}
        </div>
      </Wrapper>
    );

    return (
      <ListItem key={`repo-list-item-${item.identifier}`} item={content} />
    );
  }
}

SearchListItem.defaultProps = {
  item: {
    "identifier": 1234,
    "title": "This is a title",
    "description": "I am an item",
    "modified": "1/12/2018",
    "publisher": "Publish Inc."
  },
};

SearchListItem.propTypes = {
  item: PropTypes.object,
};

export default SearchListItem;
