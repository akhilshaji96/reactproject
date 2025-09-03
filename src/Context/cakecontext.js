import { createContext, useState, useEffect,useMemo } from "react";
export const CakeContext = createContext(null);

export default function CakeProvider({ children }) {
 const [cartCount, setCartCount] = useState(0);
  const providerCountValue = useMemo(() => ({cartCount,setCartCount}), [cartCount,setCartCount])
return (
    <CakeContext.Provider value={providerCountValue}>
      {children}
    </CakeContext.Provider>
  );
} 