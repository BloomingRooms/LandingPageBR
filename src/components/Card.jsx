import { IconStar, IconStarDisable } from "../assets/icons";
import { FaWhatsapp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Ensure you import Swiper styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Whatsapp from "../assets/images/whatsapp.png";
import Fone from "../assets/images/fone.png";

const Card = ({
  images,
  title,
  caption,
  star,
  price,
  whatsapp,
  phone,
  addClass,
  touristsAttraction,
}) => {
  console.log(images);

  const list = touristsAttraction.map((attraction, index) => {
    return <li className="text-gray-600">{attraction}</li>;
  });

  return (
    <div
      className={
        `rounded-2xl bg-[#FAFAFA] flex flex-col overflow-hidden max-h-full shadow-md shadow-gray-400 ` +
        addClass
      }
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              className="object-cover w-full h-[400px]" // Ensure images fit
              src={image}
              alt={`Hotel ${title} Image ${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="content mt-6 pb-9 pl-4 pr-4 flex-grow">
        <div className="caption text-[#24AB70] text-xs mb-2 font-semibold h-4">
          {caption}
        </div>
        <div className="title text-2xl font-semibold  pt-6 h-[6rem] overflow-hidden">
          {title}
        </div>
        <div className="info flex mt-2 items-center gap-4">
          <div className="pay text-md">{price}</div>
          <div className="vertical-line"></div>
          <div className="flex">
            {[...Array(Math.floor(star))].map((e, i) => {
              return <img src={IconStar} alt="Icon Star" />;
            })}
            {[...Array(5 - Math.floor(star))].map((e, i) => {
              return (
                <img
                  className="icon-star-disable"
                  src={IconStarDisable}
                  alt="Icon Star"
                />
              );
            })}
          </div>
          <div className="text-md">{star}</div>
        </div>
      </div>
      <div className="flex flex-col w-full pl-4 text-[14px] mb-10">
        <p className="font-bold text-[15px] mb-3">
          Distance from popular Landmarks
        </p>
        <ul className="list-disc pl-3">{list}</ul>
      </div>
      <div className="buttons pl-4 space-x-2 mb-4 flex justify-center items-center">
        <a
          href={`https://wa.me/${whatsapp}`}
          className="whatsapp-button text-white font-bold py-2 px-4 rounded"
        >
          <img src={Whatsapp} className="h-8 w-8"></img>
        </a>
        <a
          href={`tel:${phone}`}
          className="call-button text-white font-bold py-2 px-4 rounded"
        >
          <img src={Fone} className="h-8 w-8"></img>
        </a>
      </div>
    </div>
  );
};

export default Card;
