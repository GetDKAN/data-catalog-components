import React, { useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import SearchAPIContext from './SearchAPIContext';

const SearchAPIWrapper = ({rootUrl, children}) => {
  const [fulltext, setFulltext] = useState('');
  const [params, setParams] = useState({fulltext: fulltext})
  function fetchData() {
    return fetch(`${rootUrl}/search?fulltext=${fulltext}`).then(
      (res) => res.json(),
    )
  }

  const {status, data, error} = useQuery({
    queryKey: ['searchAPI', params],
    queryFn: () => fetchData(),
  });

  function search() {
    setParams({fulltext: fulltext})
  }

  return(
    <SearchAPIContext.Provider value={{
      status: status,
      data: data,
      searchFn: search,
      params: {
        fulltext: fulltext,
      },
      fulltext: fulltext,
      setFulltextFn: setFulltext,
    }}>
      {children}
    </SearchAPIContext.Provider>
  );
}

export default SearchAPIWrapper;
