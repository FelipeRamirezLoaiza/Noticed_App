import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import ImagePair from "../ImagePair/ImagePair.jsx"
import "./ImageCarousel.css"

function ImageCarousel({ items }) {
  return (
    <div className="image-carousel">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        loop={true}
        spaceBetween={20}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <ImagePair
              image1={item.image1}
              image2={item.image2}
              alt1={item.alt1}
              alt2={item.alt2}
              linkText={item.linkText}
              linkTo={item.linkTo}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageCarousel