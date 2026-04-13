import { createContext, useState, useEffect,useMemo } from "react";
import axios from "axios";
import { fetchgetcartcount } from "../../src/Services/Api";
export const CakeContext = createContext(null);

export default function CakeProvider({ children }) {
 const [cartCount, setCartCount] = useState(0);
    const user_id = 2;
    const getCartCount = async () => {
    try {
      const response = await axios.get(`${fetchgetcartcount}/${user_id}`);
      setCartCount(response.data.data);
    } catch (error) {
      console.error("Error fetching cart count:", error);
    }
  };

  useEffect(() => {
    getCartCount(); // load once app starts
  }, []);
 const providerCountValue = useMemo(() => ({cartCount,setCartCount}), [cartCount,setCartCount])
return (
    <CakeContext.Provider value={providerCountValue}>
      {children}
    </CakeContext.Provider>
  );
} 