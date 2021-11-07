import React from 'react'
import Carousel from "react-multi-carousel"
import { CardSpecialPromo } from 'components'

const SpecialInfoComponent = () => {

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 2,
      partialVisibilityGutter: 60
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
  };

  return (
    <section className="special-info">
      <div className="container">
        <h1 className="special-info__title">Special Info & Promotions</h1>
        <div className="special-info__card-contain">
          <Carousel
            responsive={responsive}
            swipeable={false}
            draggable={false}
            showDots={false}
            ssr={true}
            infinite={false}
            containerClass="carousel-container"
            partialVisbile={true}
            minimumTouchDrag={80}
          >
            <CardSpecialPromo />
            <CardSpecialPromo />
            <CardSpecialPromo />
            <CardSpecialPromo />
            <CardSpecialPromo />
          </Carousel>
         
        </div>
      </div>
    </section>
  )
}

export default SpecialInfoComponent