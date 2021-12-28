import React from "react";
import { bgFlower, childrens } from "public/assets/icons";
import { CardPrograms } from "./CardPrograms";

const Programs = ({ route }) => {
  if (!route) {
    route = '/'
  }

  return (
    <div className="programs">
      <img src={bgFlower} alt="bg-flower" className="programs-bg-second" />
      <div className="programs-wrapper container">
        <h1 className="programs-wrapper-title">{`Our Programs`}</h1>
        <div className="programs-wrapper-info">
          <img src={childrens} alt="childrens" className="programs-wrapper-info-img" />
          <h4 className="programs-wrapper-desc">{`Our cooperative learning community brings together children, parents, and teachers in meaningful play. We develop collaborative relationships and explore environments, experiences, and activities that encourage curiosity and wonder. We value who children are, celebrate their unique gifts, believe in their capabilities, encourage their interests, and honor their feelings and ideas.`}
            <div className="programs-wrapper-button">
              LEARN MORE
            </div>
          </h4>
        </div>

        <div className="programs-wrapper-schedule">
          {[...Array(3)].map((res, i) =>
            <CardPrograms key={i} />
          )}


        </div>
      </div>
    </div>
  );
};

export default Programs;
