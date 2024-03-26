import { useSwiper } from "swiper/react";

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <>
      <button onClick={() => swiper.slideNext()}>
        Slide to the next slide
      </button>
      <br />
      <button onClick={() => swiper.slidePrev()}>
        Slide to the previous slide
      </button>
      <br />
      <button onClick={() => swiper.slideTo(4)}>Slide to the 4th slide</button>
      <br />
    </>
  );
}
