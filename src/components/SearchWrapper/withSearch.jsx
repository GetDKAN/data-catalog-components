import React from 'react';

export default function withSearch(OriginalComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        searchEngine: false,
      };
    }

    render() {
      return (
        <OriginalComponent
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...this.props}
        />
      );
    }
  };
}
