import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // screen size
  const [isMobile, setIsMobile] = useState(false);
  const [isMedium, setIsMedium] = useState(false);
  const [showCakeCategory, setShowCakeCategory] = useState(false);
  const [showSearchResult, setShowSearchResult] = useState(true);
  const [isOpenSort, setIsOpenSort] = useState(false);

  useEffect(() => {
    setIsMobile(screen.width < 600);
    setIsMedium(screen.width < 995);
  }, []);

  return (
    <AppContext.Provider
      value={{
        isMobile,
        setIsMobile,
        isMedium,
        setIsMedium,
        showCakeCategory,
        setShowCakeCategory,
        showSearchResult,
        setShowSearchResult,
        isOpenSort,
        setIsOpenSort,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
