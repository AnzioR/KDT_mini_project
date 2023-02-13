import React from 'react';
import style from './Main.module.css';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


function Main () {
  return (
    <div className={style.main}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{ clickable: true }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide>
          <NavLink>
            <img src="https://www.emart24.co.kr/image/NTAxOA==" alt=""/>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink>
            <img src="https://www.emart24.co.kr/image/MzM5OA==" alt=""/>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide>
          <NavLink>
            <img src="https://www.emart24.co.kr/image/NDg3Mg==" alt=""/>
          </NavLink>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Main;