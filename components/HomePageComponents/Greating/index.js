import React from "react";
import BoardCard from '@/components/Global/Cards/BoardCard'
const headWebp = '/assets/images/headschool.webp';
import { bgSecond, headschool, bannerDonasi } from "public/assets/icons";
import { GreatingCard } from "./greatingCard";

const Greating = ({ route }) => {
  if (!route) {
    route = '/'
  }

  return (
    <div className="greating">
      <div className="greating-wrapper">

        <h1 className="greating-wrapper-title">Berita Terkini</h1>

        <div className="greating-wrapper-schedule">
          {[...Array(3)].map((res, i) => <GreatingCard key={i} />)}
        </div>

        <div className="greating-wrapper-schedule-button">
          Lainnya
        </div>
      </div>
    </div>
  );
};

export default Greating;
