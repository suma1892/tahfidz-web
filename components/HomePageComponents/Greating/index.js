import React from "react";
import BoardCard from '@/components/Global/Cards/BoardCard'
const headWebp = '/assets/images/headschool.webp';

const Greating = ({ route }) => {
  if (!route) {
    route = '/'
  }

  return (
    <div className="greating container">
        <img src={headWebp} alt="head-school" style={{height: 400, width: 500}} />

        <div className="greating-text-wrapper">
          <h1 className="greating-title">Sambutan Kepala Sekolah</h1>
          <h1 className="greating-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum varius velit et facilisis. Morbi eu velit sed sapien bibendum faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum varius velit et facilisis. Morbi eu velit sed sapien bibendum faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum varius velit et facilisis. Morbi eu velit sed sapien bibendum faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum varius velit et facilisis. Morbi eu velit sed sapien bibendum faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum varius velit et facilisis. Morbi eu velit sed sapien bibendum faucibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum varius velit et facilisis. Morbi eu velit sed sapien bibendum faucibus.</h1>
          <div className="greating-button">
            <h1 className="greating-button-text">read more</h1>
          </div>
        </div>
    </div>
  );
};

export default Greating;
