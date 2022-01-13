import React from "react";
import BoardCard from '@/components/Global/Cards/BoardCard'
const headWebp = '/assets/images/headschool.webp';
import { bgSecond, headschool, bgButterfly2 } from "public/assets/icons";
import { TeacherCard } from "./teacherCard";

const Teachers = ({ route }) => {
  if (!route) {
    route = '/'
  }

  return (
    <div className="teachers">
      {/* <img src={bgButterfly2} alt="bg-second" className="teachers-bg-second" /> */}
      <div className="teachers-wrapper container">
        <h1 className="teachers-wrapper-title">{`Our Incredible Teachers`}</h1>
        <h4 className="teachers-wrapper-desc">{`Our teachers are carefully selected for their training and experience, as well as for their commitment to working collaboratively with parents to enrich the early-childhood years.`}</h4>
        <div className="teachers-wrapper-schedule">
          {[...Array(3)].map((res, i) => <TeacherCard key={i} />)}
        </div>
        <div
          style={{
            marginBottom: 100
          }}
        />
      </div>
    </div>
  );
};

export default Teachers;
