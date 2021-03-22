import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { Link } from "@reach/router";
import PublisherDatasetCountByName from "../PublisherDatasetCountByName";
import axios from 'axios';

function Organization(props) {
  const { name, description, imageUrl, searchUrl, alignment, datasetCount } = props;
  const image = <img alt={name || 'Organization Image'} src={imageUrl} />;
  const link = searchUrl ? searchUrl : `search/?publisher__name=${name}`;

  const [posts, setPosts] = useState();

  const fetchData = async () => {
    const { data } = await axios.get('http://demo.getdkan.org/data.json');
    console.log(data);
    console.log("Name", name);
    setPosts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="dc-org-block" style={{ textAlign: alignment }}>
      <Link to={link} className="dc-org-image" alt="Organization Logo">
        {image}
        <h3 className="dc-org-name">
          {name}
        </h3>
      </Link>
      {description && (
        <div className="dc-org-description">
          {description}
        </div>
      )}

      {posts && posts.dataset !== 'undefined' ? countDatasetsByName("State Economic Council", posts.dataset) : null}

      <PublisherDatasetCountByName datasetCount={datasetCount} />
    </div>
  );
}

export const countDatasetsByName = (publisher, datasets) =>  {
  // console.log("datasets", datasets);
  // return "foobar";
  const publishers = datasets.map((data, index, arr) => {return data.publisher; });
  const result =  publishers.filter((p) => {return p.name === publisher;})
   console.log("RES: ", result);
  if (typeof result !== 'undefined' && result.length) {
    return result.length;
  }
  return null;
};

Organization.defaultProps = {
  alignment: "center",
  name: "",
  description: "",
  imageUrl: "https://s3.amazonaws.com/dkan-default-content-files/files/group.png",
};

Organization.propTypes = {
  alignment: PropTypes.string,
  datasetCount: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  searchUrl: PropTypes.string,
};

export default Organization;
