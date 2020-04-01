import React from 'react';
import axios from "axios";
import Loader from "react-loader-advanced";
import LoadingSpin from "react-loading-spin";
import Organization from "../Organization";

export default class PublisherList extends React.Component {
  state = {
    publishers: [],
    show: true
  };

  async fetchData() {
    const { data } = await axios.get(
      // To do: Pass as a prop.
      `${process.env.DYNAMIC_API_URL}/metastore/schemas/publisher/items`
    );
    const publishers = Object.assign(data);
    console.log('publishers: ', publishers);

    this.setState({
      publishers: data,
      show: false
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <Loader
        hideContentOnLoad
        backgroundStyle={{ backgroundColor: "#f9fafb" }}
        foregroundStyle={{ backgroundColor: "#f9fafb" }}
        show={this.state.show}
        message={
          <LoadingSpin width={"3px"} size="30px" primaryColor={"#007BBC"} />
        }
      >
        <ul className="dc-publisher-list">
          { this.state.publishers.map(org => <Organization
            name={org.data.name}
            key={org.identifier}
            imageUrl={org.data.image}
            description={org.data.description}
          />)}
        </ul>
      </Loader>
    )
  }
}
