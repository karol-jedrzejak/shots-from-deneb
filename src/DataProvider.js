// React Components
import { useState } from "react";
import { createContext } from "react";

// Create Context
export const DataContext = createContext({ state: {}, actions: {} });

function DataProvider({ children }) {
  const [inside, setInside] = useState(false);
  const [mobile, setMobile] = useState(false);

  const value = {
    state: { inside, mobile },
    actions: { setInside, setMobile },
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export default DataProvider;
