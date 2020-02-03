/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import excerpts from 'excerpts';
import TopicImage from '../../templates/TopicImage';
import DataIcon from '../DataIcon';
import Text from '../Text';
import { Link } from "gatsby";

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
        const format = (dist[1] === undefined) ? '' : dist[1].format.toLowerCase();
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
        const format = (dist.format === undefined) ? '' : dist.format.toLowerCase();
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
          <Link
            key={`dist-${topic.identifier}-${Math.random() * 10}`}
            to={"search?topics=" + topic.title}
          >
            <TopicImage title={topic.title} height="16" width="16"/>
            {topic.title}
          </Link>
        );
      })
    }
  }

  return(
    <Wrapper className={className}>
      <h2><Link to={ref}>{title}</Link></h2>
      
      {(publisher && publisher.name !== undefined) &&
        <div className="item-publisher">
          <DataIcon icon="group" height="20" width="20"/>
          <Text tag="i" value={publisher.name} />
        </div>

      }

      {theme &&
        <div className="item-theme">
          {themes(theme)}
        </div>
      }

      {description &&
        <Text className="item-description">
          {excerpts(description, {words: 35})}
        </Text>
      }

      {format &&
        <div className="format-types">
          {formats(format)}
        </div>
      }

    </Wrapper>
  );
}

SearchListItem.defaultProps = {
  className: 'search-list-item',
};

SearchListItem.propTypes = {
  className: PropTypes.string,
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SearchListItem;
