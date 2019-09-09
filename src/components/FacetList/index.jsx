/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';

import LI from './LI';
import H3 from './H3';

import FacetBlockDiv from './FacetBlockDiv';

function prepareLink(query, selectedFacets, facetKey, name, active = false) {
  let lData = {};
  if (query) {
    lData.q = query;
  }
  lData[facetKey] = name;
  // If the link is active remove so the link will "reset" the search.
  if (active) {
    selectedFacets = selectedFacets.filter((f) => {
      if (f.includes(name)) {
        delete lData[facetKey];
        return false;
      }
      return true;
    });
  }
  const facetData = selectedFacets.reduce((o, val) => {
    return { [val[0]] : val[1] };
  }, {});
  lData = Object.assign(lData, facetData);
  let link = Object.keys(lData).map(key => key + '=' + lData[key]).join('&');
  return '?' + link;
}

function FacetBlocks({ title, items, facetKey, selectedFacets, query, url, facetCallback, Link}) {
  let content = (<ul></ul>);
  // Removes other items in the active category. TODO: move to HOC.
  let filtered = items[facetKey].filter((item, facetCategory) => {
    let flagged = false;
    const facetName = item[0];
    selectedFacets.forEach((facet) => {
      const selectedFacetCategory = facet[0];
      const selectedFacetName = facet[1];
      if (facetName !== selectedFacetName && selectedFacetCategory === facetKey) {
        flagged = true;
      }
    });
    return !flagged;
  });
  content = filtered.map(function callback(facet, i) {
    const name = facet[0];
    var value = "(" + facet[1] + ")";
    let active = "";
    selectedFacets.forEach((facet) => {
      if (facetKey === facet[0] && name === facet[1]) {
        active = "active";
        value = ""
      }
    });

    let link = url + prepareLink(query, selectedFacets, facetKey, name, active);
    return <LI key={`facet-${i}`}><Link onClick={facetCallback} data-facet-type={facetKey} className={active} to={link}>{name} {value}</Link></LI>
  });

  return <FacetBlockDiv><H3>{title}</H3><ul className="list-group" key="items">{content}</ul></FacetBlockDiv>;

}

function FacetList({ facets, selectedFacets, facetsResults, query, facetCallback, url, Link }) {

  let content = (<div></div>);

  if (facets !== false) {
    let items = [];
    for (let facet in facets) {
      items.push(facet);
    }

    content = items.map((item) => {
      const facetListProps = {
        title: facets[item].label,
        items: facetsResults,
        selectedFacets,
        facetKey: item,
        url,
        facetCallback,
        Link,
        query
      }
      return <FacetBlocks key={item} {... facetListProps} />
    });

    return <div key="facets">{content}</div>;
  }

  return null;
}

FacetList.propTypes = {
  facets: PropTypes.object,
  selectedFacets: PropTypes.any,
  facetResults: PropTypes.any,
  query: PropTypes.string
};

export default FacetList;
