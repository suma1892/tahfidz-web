import React from 'react'
import { teacher } from "public/assets/icons";

export const GreatingCard = () => {
    return (
        <div className="greating-wrapper-schedule-card">
            <img src={teacher} alt={'teacher'} className='greating-wrapper-schedule-card-img' />
            <div className='greating-wrapper-schedule-card-title-wrapper'>
                <h1 className='greating-wrapper-schedule-card-title-wrapper-desc'>Penerimaan Siswa Baru</h1>
                <h1 className='greating-wrapper-schedule-card-title-wrapper-desc2'>Penerimaan Siswa Baru di YITAS sudah resmi dibuka, silahkan daftarkan anak anda</h1>
            </div>


            {/* <h6 className='greating-wrapper-schedule-card-desc'>is masterful at developing strong relationships with her students, fostering independence and self-regulation, facilitating peer conflict resolution and enabling the children to solve problems. Her kindergarten curriculum is child-centered, academically rigorous and developmentally appropriate. She offers academic opportunities within a playful context, hearing the ideas and passions of her students and creating educational instruction that meets the needs of each child.</h6> */}

        </div>
    )
}
