import Card from "./Card";

import { viyana, bloomvilla, bloominginn, cozzy } from "../assets/images";
import Image1 from "../assets/images/Viyana/Image1.jpg";
import Image2 from "../assets/images/Viyana/Image2.jpg";
import Image3 from "../assets/images/Viyana/Image3.jpg";
import Image4 from "../assets/images/Viyana/Image4.jpg";
import Image5 from "../assets/images/Viyana/Image5.jpg";
import Image6 from "../assets/images/Viyana/Image6.jpg";
import Image7 from "../assets/images/Viyana/Image7.jpg";
import Image8 from "../assets/images/Viyana/Image8.jpg";
import Image9 from "../assets/images/Viyana/Image9.jpg";
import Image10 from "../assets/images/Viyana/Image10.jpg";
import Image1bv from "../assets/images/BloomVilla/Image1.jpg";
import Image2bv from "../assets/images/BloomVilla/Image2.jpg";
import Image3bv from "../assets/images/BloomVilla/Image3.jpg";
import Image4bv from "../assets/images/BloomVilla/Image4.jpg";
import Image5bv from "../assets/images/BloomVilla/Image5.jpg";
import Image6bv from "../assets/images/BloomVilla/Image6.jpg";
import Image7bv from "../assets/images/BloomVilla/Image7.jpg";
import Image8bv from "../assets/images/BloomVilla/Image8.jpg";
import Image9bv from "../assets/images/BloomVilla/Image9.jpg";
import Image1bin from "../assets/images/BloomingInn/Image1.jpg";
import Image2bin from "../assets/images/BloomingInn/Image2.jpg";
import Image3bin from "../assets/images/BloomingInn/Image3.jpg";
import Image4bin from "../assets/images/BloomingInn/Image4.jpg";
import Image5bin from "../assets/images/BloomingInn/Image5.jpg";
import Image6bin from "../assets/images/BloomingInn/Image6.jpg";
import Image1c from "../assets/images/Cozy/Image1.jpg";
import Image2c from "../assets/images/Cozy/Image2.jpg";
import Image3c from "../assets/images/Cozy/Image3.jpg";
import Image4c from "../assets/images/Cozy/Image4.jpg";
import Image5c from "../assets/images/Cozy/Image5.jpg";

const PopularHotel = () => {
  const popularHotelData = [
    {
      images: [
        bloomvilla,
        Image1bv,
        Image2bv,
        Image3bv,
        Image4bv,
        Image5bv,
        Image6bv,
        Image7bv,
        Image8bv,
        Image9bv,
      ],

      title: "Hotel Bloom Villa",
      caption: "Near Anuradha Cinema Hall, Bamunimaidan, Guwahati",
      star: 4.9,
      price: "Rs 1500 Per Night(Min)",
      link: null,
      whatsapp: "8798377054", // Add WhatsApp number
      phone: "03613574559", // Add phone number
      touristsAttraction: [
        "10km from Kamakhya Temple",
        "3.8km from Guwahati Zoo",
        "24km from Guwahati Airport",
      ],
    },
    {
      images: [
        bloominginn,
        Image1bin,
        Image2bin,
        Image3bin,
        Image4bin,
        Image5bin,
        Image6bin,
      ],
      title: "Blooming Inn Guest House",
      caption: "Nongthymmia Near Apprila Showroom, Shillong",
      star: 4.8,
      price: "Rs 1500 Per Night(Min)",
      link: null,
      whatsapp: "9863192978", // Add WhatsApp number
      phone: "03643585223", // Add phone number
      touristsAttraction: [
        "2.8km from Police Bazar",
        "52.8km from Cherrapunji",
        "81km from Dawki",
      ],
    },
    {
      images: [cozzy, Image1c, Image2c, Image3c, Image4c, Image5c],
      title: "Cozy Blooms Guest House",
      caption: "Lumiablot Nongthymmia, Shillong",
      star: 4.8,
      price: "Rs 1500 Per Night(Min)",
      link: null,
      whatsapp: "9863192978", // Add WhatsApp number
      phone: "03643585223", // Add phone number
      touristsAttraction: [
        "2.8km from Police Bazar",
        "52.8km from Cherrapunji",
        "81km from Dawki",
      ],
    },
  ];

  return (
    <div className="md:container md:mx-auto rounded-lg mx-10 mt-36 max-md:mt-16">
      <h2 className="font-semibold text-4xl">Our most popular Hotels</h2>
      <div className="popular-head flex justify-between">
        <div className="mt-5">Most Loved Hotels by Guests Like You</div>
      </div>
      <div className="flex md:flex-row flex-col gap-4 mt-8 h-full w-full">
        {popularHotelData.map((data, index) => {
          return <Card key={index} addClass={"md:w-1/3"} {...data} />;
        })}
      </div>
    </div>
  );
};

export default PopularHotel;
