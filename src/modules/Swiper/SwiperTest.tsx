import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SlideNextButton from "./SwiperInnerComponentTest";
import SlideTitle from "./SwiperSlideInnerComponentTest";

const SwiperTest = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50} // Padding between each element
      slidesPerView={1} // Determines how many slides are rendered on screen
      navigation // Adds buttons to switch to the next swipe
      //   pagination={{ clickable: true }} // Adds a radio
      //   scrollbar={{ draggable: true }} // Adds a scrollbar to the swiper container
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        {({ isActive }) => (
          <div>Slide 1 is {isActive ? "active" : "not active"}</div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <div>Slide 2 is {isActive ? "active" : "not active"}</div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => (
          <div>Slide 3 is {isActive ? "active" : "not active"}</div>
        )}
      </SwiperSlide>
      <SwiperSlide>
        <SlideTitle />
      </SwiperSlide>
      <SlideNextButton />
      {/* I might take away the navigation option if the user is on mobile */}
      {/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ? (
        <p>Mobile</p>
      ) : (
        <p>Not Mobile</p>
      )}
    </Swiper>
  );
};

export default SwiperTest;
