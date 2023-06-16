import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../assets/img1.jpg';
import slide_image_2 from '../assets/img2.jpg';
import slide_image_3 from '../assets/img3.jpg';
import slide_image_4 from '../assets/img4.jpg';
import slide_image_5 from '../assets/img5.jpg';
import slide_image_6 from '../assets/img6.jpg';
import slide_image_7 from '../assets/img7.jpg';
import slide_image_8 from '../assets/img8.JPG';
import slide_image_9 from '../assets/img9.jpg';
import slide_image_10 from '../assets/img10.JPG';

function Home() {
  return (
    <div className='pt-14 mx-auto bg-black h-96 items-center sm:h-screen'>
      <div className=''>
        <h1 className="heading text-white text-center font-click py-5 text-2xl sm:text-4xl">Dikala rasa, Tumbuh bersama.</h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container w-1/2"
        >
          <SwiperSlide>
            <img src={slide_image_9} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_4} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_5} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_6} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide_image_7} alt="slide_image" />
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
      
    </div>
  )
}

export default Home