import React from "react";
import BoardCard from '@/components/Global/Cards/BoardCard'
const headWebp = '/assets/images/headschool.webp';
import { bgSecond, headschool, bgButterfly } from "public/assets/icons";

const Registration = ({ route }) => {
  if (!route) {
    route = '/'
  }

  return (
    <div className="registration">
      <img src={bgButterfly} alt="bg-second" className="registration-bg-second" />
      <div className="registration-wrapper container">
        <h1 className="registration-wrapper-title">{`Enrolling now for Preschool\nand Kindergarten Classes`}</h1>
        <h4 className="registration-wrapper-desc">{`Our cooperative learning community brings together children, parents, and teachers in meaningful play. We develop collaborative relationships and explore environments, experiences, and activities that encourage curiosity and wonder. We value who children are, celebrate their unique gifts, believe in their capabilities, encourage their interests, and honor their feelings and ideas.`}</h4>
        <div className="registration-wrapper-button">
          LEARN MORE
        </div>
      </div>
    </div>
  );
};

export default Registration;
