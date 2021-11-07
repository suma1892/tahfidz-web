import React, { useContext } from "react";

import { AppContext } from "context/AppContext";

const CakeCategory = () => {
  const { showCakeCategory, setShowCakeCategory } = useContext(AppContext);

  return (
    <div
      className="cake-category"
      style={showCakeCategory ? { display: "inherit" } : { display: "none" }}
      onMouseLeave={() => setShowCakeCategory(false)}
    >
      <ul className="cake-category-menu">
        <li className="cake-category-menu-item">Mousse Cake</li>
        <li className="cake-category-menu-item">Cake Slice</li>
        <li className="cake-category-menu-item">Celebration Cake</li>
        <li className="cake-category-menu-item">Others</li>
      </ul>
    </div>
  );
};

export default CakeCategory;
