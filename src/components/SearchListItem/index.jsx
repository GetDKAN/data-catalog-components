/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import excerpts from 'excerpts';
import TopicImage from '../../templates/TopicImage';
import TopicWrapper from '../../components/TopicWrapper';
import DataIcon from '../DataIcon';
import Text from '../Text';
import { Link } from '@reach/router';

const SearchListItem = ({
  className,
  item,
}) => {
  const { ref, title, description, publisher, format, theme, identifier } = item;

  function formats(distribution) {
    if (!distribution) {
      return null;
    }
    if(typeof distribution === 'object') {
      distribution = Object.entries(distribution);
      return distribution.map((dist) => {
        const type = dist[1].mediaType ? dist[1].mediaType.split('/') :'';
        const backup = type ? type[1] : 'data';
        const format = (dist[1].format) ? dist[1].format : backup;
        return (
          <div title={`format: ${dist.format}`}
            key={`dist-id-${identifier}-${Math.random() * 10}`}
            className="label"
            data-format={format}>{format}
          </div>
        );
      })
    }

    if(Array.isArray(distribution)) {
      return distribution.map((dist) => {
        const type = dist.mediaType ? dist.mediaType.split("/") : '';
        const backup = type ? type[1] : 'data';
        const format = (dist.format) ? dist.format : backup;
        return (
          <div title={`format: ${dist.format}`}
            key={`dist-id-${identifier}-${Math.random() * 10}`}
            className="label"
            data-format={format}>{format}
          </div>
        );
      });
    }
  }

  function themes(theme) {
    if (!theme) {
      return null;
    } else {
      return theme.map((topic) => {
        return(
          <TopicWrapper component={TopicImage} topic={topic}/>
        );
      })
    }
  }

  function publishers(publisher) {
    if (!publisher) {
      return null;      
    } else {
        return (
          <span>
            <DataIcon icon="group" height={20} width={20} />
            {publisher}
          </span>
        );
    }
  }

  return(
    <div className={className}>
      <h2><Link to={ref}>{title}</Link></h2>
      
      {publisher !== 'undefined' &&
        <div className="dc-item-publisher">
          {publishers(publisher)}
        </div>
      }

      {theme &&
        <div className="dc-item-theme">
          {themes(theme)}
        </div>
      }

      { description &&
        <div className="dc-item-description">
          <Text>
            {excerpts(description, {words: 35})}
          </Text>
        </div>
      }

      {format &&
        <div className="format-types">
          {formats(format)}
        </div>
      }

    </div>
  );
}

SearchListItem.defaultProps = {
  className: 'dc-search-list-item',
};

SearchListItem.propTypes = {
  className: PropTypes.string,
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SearchListItem;
