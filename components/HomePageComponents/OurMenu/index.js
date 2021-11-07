import React, { useContext } from "react";

import { OurMenuCard } from "components";
import { Sort } from "@/components/Global";

import { AppContext } from "context/AppContext";

const sortIcon = "/assets/icons/icon-sort.svg";

export default function OurMenu() {
  const { isOpenSort, setIsOpenSort } = useContext(AppContext);

  const sortHandler = () => {
    setIsOpenSort(!isOpenSort);
  };

  return (
    <>
      {isOpenSort ? <Sort /> : null}
      <section className="our-menu container">
        <div className="our-menu-title">
          <div className="our-menu-title-sort" onClick={() => sortHandler()}>
            <img src={sortIcon} altf="sort" />
            &nbsp; Sort
          </div>
          <h3 className="our-menu-title-text">Explore Our Menu</h3>
        </div>
        <div className="our-menu-tab">
          <button className="our-menu-tab-button active">Mousse Cake</button>
          <button className="our-menu-tab-button">Cake Slice</button>
          <button className="our-menu-tab-button">Celebration Cake</button>
          <button className="our-menu-tab-button">Others</button>
        </div>
        <div className="our-menu-content">
          {[...Array(9)].map((item, index) => (
            <OurMenuCard key={index} />
          ))}
        </div>
        <div className="our-menu-load-more">Load More</div>
      </section>
    </>
  );
}
