/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import excerpts from 'excerpts';
import TopicIcon from '../../templates/TopicIcon';
import DataIcon from '../DataIcon';
import Text from '../Text';
import { Link } from '@reach/router';
import {countBy} from 'lodash';


const SearchListItem = ({
  className,
  item,
}) => {
  const { ref, title, description, publisher, format, theme, identifier } = item;
  function formats(distribution) {
    if (!distribution) {
      return null;
    }
    if((typeof distribution === 'object') || (Array.isArray(distribution))) {
      const distributionWithUniqueFormats = getUniqueFormats(Object.entries(distribution));
      const counted = countBy(distribution, (d) => {
        return d.format;
      });

      return distributionWithUniqueFormats.map((dist) => {
        const type = dist.mediaType ? dist.mediaType.split('/') :'';
        const backup = type ? type : 'data';
        const format = (dist.format) ? dist.format : backup;
        return (
          <div title={`format: ${dist.format}`}
               key={`dist-id-${identifier}-${Math.random() * 10}`}
               className="label"
               data-format={format}>{counted[format]}x {format}
          </div>
        );
      });
    }
    return null;
  };

  function themes(theme) {
    if (!theme) {
      return null;
    } else {
      return theme.map((topic, idx) => {
        return(
          <div
            className="dc-topic-wrapper"
            key={idx}
          >
            <TopicIcon title={topic} height={16} width={16} />
            {topic}
          </div>
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

export const getUniqueFormats = (formats) => {
  let unique = [];
  return formats.reduce(
    (a, b) => {
      if (unique.indexOf(b[1].format) === -1) {
        unique.push(b[1].format);
        a.push(b[1]);
      }
      return a;
    }, []);
};

SearchListItem.defaultProps = {
  className: 'dc-search-list-item',
};

SearchListItem.propTypes = {
  className: PropTypes.string,
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SearchListItem;
