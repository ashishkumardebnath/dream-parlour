// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation } from "swiper/modules";

import "./Testimonial.css";
// import required modules
// import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="my-20 lg:px-28 mx-4">
      <h3 className="text-3xl text-center font-semibold ">Testimonial</h3>
      <p className="text-center -mt-2 mb-8 text-[#F63E7B] font-bold">
        ---------------------------------------------------
      </p>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={8}
          centeredSlides={false}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 2,
              slidesPerGroup: 1,
            },
          }}
          modules={[Keyboard, Scrollbar, Navigation]}
          className="mySwiper gap-5"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="bg-pink-50 shadow-xl p-8 rounded-lg">
                <div className="flex ">
                  <div className="w-20 h-20  ">
                    <img
                      className="rounded-full border-[#F63E7B] border-2"
                      src={review.image}
                      alt=""
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <div className="text-start ml-3">
                      <h2>{review.name}</h2>
                      <p>{review.country}</p>
                    </div>
                  </div>
                </div>
                <p className="text-start my-3">
                  {review.details.slice(0, 90)}
                  <Link>
                    <span className="text-[#F63E7B]"> see more....</span>
                  </Link>
                </p>
                <Rating
                  style={{ maxWidth: 130 }}
                  value={review.rating}
                  readOnly
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
