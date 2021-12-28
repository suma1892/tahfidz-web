import React from 'react'
import { teacher } from "public/assets/icons";

export const TeacherCard = () => {
    return (
        <div className="teachers-wrapper-schedule-card">
            <img src={teacher} alt={'teacher'} className='teachers-wrapper-schedule-card-img' />
            <h1 className='teachers-wrapper-schedule-card-title'>Ajeng S.P</h1>
            <h6 className='teachers-wrapper-schedule-card-desc'>is masterful at developing strong relationships with her students, fostering independence and self-regulation, facilitating peer conflict resolution and enabling the children to solve problems. Her kindergarten curriculum is child-centered, academically rigorous and developmentally appropriate. She offers academic opportunities within a playful context, hearing the ideas and passions of her students and creating educational instruction that meets the needs of each child.</h6>

        </div>
    )
}
