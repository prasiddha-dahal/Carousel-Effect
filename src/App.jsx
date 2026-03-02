import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const images = [
  "https://picsum.photos/id/1018/800/400",
  "https://picsum.photos/id/1015/800/400",
  "https://picsum.photos/id/1019/800/400"
];

export default function Carousel() {
  return (
    <div className="w-[800px] mx-auto rounded-2xl overflow-hidden shadow-lg">
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        speed={500}
        className="w-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt="slide"
              className="w-full h-[400px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}