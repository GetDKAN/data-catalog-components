import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';
import defaultTheme from '../../theme/default';
import SearchInput from '../../components/SearchInput';

const Hero = ({
  alignment,
  title,
  intro,
  image,
}) => {
  const [query, setQuery] = useState('');
  const background = image
    ? `url(${image})`
    : `linear-gradient(${defaultTheme.primaryDark}, ${defaultTheme.primary})`;
  function handleSubmit(event) {
    event.preventDefault();
    navigate(`/search?q=${query}`);
  }

  return (
    <div className="dc-hero" style={{ backgroundImage: background }}>
      <div className={`block ${alignment}`}>
        <h1 className="hero-title">{title}</h1>
        <p>{intro}</p>
        <form onSubmit={(event) => handleSubmit(event)}>
          <SearchInput
            onChangeFunction={(event) => setQuery(event.target.value)}
            onResetFunction={() => setQuery('')}
            showSubmit
            value={query}
            resetContent="Clear"
          />
        </form>
      </div>
    </div>
  );
};

Hero.defaultProps = {
  alignment: 'center',
  title: 'Welcome to DKAN',
  intro: 'DKAN is an open-source data management platform. It treats data as content so that you can easily publish, manage, and maintain your open data no matter the size of your team or the level of technical expertise.',
  image: '',
};

Hero.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.string,
  alignment: PropTypes.string,
  image: PropTypes.string,
};

export default Hero;
