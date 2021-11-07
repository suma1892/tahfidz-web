import { arrowIcon } from '@/assets/icons';
import React, { useState } from 'react';
import { ImgWithFallback } from '../..';

const productWebp = '/assets/images/cake-product.webp';
const product = '/assets/images/cake-product.png';
const heartIcon = '/assets/icons/icon-heart.svg';
const heartClickIcon = '/assets/icons/icon-heart-click.svg';
const student = '/assets/images/student.jpeg';
export default function BoardCard({ data, index, item }) {
  const [wishlist, setWishlist] = useState(false);
  return (
    <div className='board-card'>
      {item?.color?.includes('#') ? <div
        className='board-card-content'
        style={{
          background: item?.color
        }}
      >
        <div style={{ padding: 20, alignItems: 'center', justifyContent: 'center', height: '100%', paddingTop: '60%' }}>
          <h1 className="board-card-title">{item?.title}</h1>
          <h1 className="board-card-desc">{item?.desc}</h1>
          <div className="board-card-row">
            <h1 className="board-card-button">Lihat</h1>
            <img src={arrowIcon} style={{height: 20, width: 20}} alt="cart-icon" />
          </div>
        </div>
      </div> :
        <ImgWithFallback
          className='board-card-content'
          src={student}
          fallback={product}
          alt='product'
        />}
    </div>
  );
}
