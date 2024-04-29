import React, { createContext, useContext, useState } from "react";

// Create the context
const DataContext = createContext();

// Create the provider
export const DataProvider = ({ children }) => {
  const [shouldFetch, setShouldFetch] = useState(false);
  const [posts, setPosts] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  // Function to toggle the shouldFetch state
  const toggleFetch = () => {
    setShouldFetch(!shouldFetch);
  };

  // Your fetch function
  async function Load() {
    const response = await fetch(`${apiUrl}/posts/list/`);
    const json = await response.json();
    setPosts(json);
    // setPostCompanyArray(json.company);
    // console.log(posts)
    // setDataArray(json)
    console.log('Fetching data...');
    return json;
  }

  // Context value containing shouldFetch state and toggleFetch function
  const dataContextValue = {
    shouldFetch,
    toggleFetch,
  };

  return (
    <DataContext.Provider value={dataContextValue}>
      {children}
    </DataContext.Provider>
  );
};

// Export DataContext
export { DataContext };
