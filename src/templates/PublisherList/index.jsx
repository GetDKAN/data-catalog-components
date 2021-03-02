import React from 'react';
import PropTypes from 'prop-types';
import Organization from '../../components/Organization';

const PublisherList = ({ orgs, buttonTextPrefix }) => {

  return (
    <ul className="usa-card-group">
      {orgs.map((org) => (
        <Organization
          key={org.name}
          org={org}
          buttonText={buttonTextPrefix ? `${buttonTextPrefix} ${org.name}` : null}
          isCard
        />
      ))}
    </ul>
  );
}

PublisherList.defaultProps = {
  buttonTextPrefix: '',
};

PublisherList.propTypes = {
  /**
   * This is the content of the component. imageUrl are not required, but most organizations will have an icon to use. The search url should be a relative link starting with /.
   */
  orgs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    searchUrl: PropTypes.string,
  })).isRequired,
  /**
   * By default Organizations will set the button to "Search <name>"". Search can be changed with this prop to things like "Explore".
   */
  buttonTextPrefix: PropTypes.string,
};

export default PublisherList;
