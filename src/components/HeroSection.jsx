import { ImageHotel } from "../assets/images";
import {
  IconSearch,
  IconCheckinout,
  IconLocation,
  IconPerson,
  IconWatchVideo,
} from "../assets/icons";
import "./herosection.css";
import Button from "./Button";
import Select from "react-select";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BgHero from "../assets/images/bg-hero.png";

const HeroSection = () => {
  const [location, setLocation] = useState(null);
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [roomFor, setRoomFor] = useState(null);

  const countryOptions = [
    { value: "no-selected", label: "Select...", isFixed: true },
    { value: "losangles", label: "Los Angles" },
    { value: "bali", label: "Bali" },
    { value: "sydney", label: "Sydney" },
    { value: "lombok", label: "Lombok" },
    { value: "yogya", label: "Yogyakarta" },
    { value: "singapore", label: "Singapore" },
    { value: "maldiv", label: "Maldiv" },
    { value: "tokyo", label: "Tokyo" },
    { value: "thailand", label: "Thailand" },
    { value: "tokyo", label: "Tokyo" },
  ];

  const roomOptions = [
    { value: "no-selected", label: "Select...", isFixed: true },
    { value: "1room1guest", label: "1 room, 1 guest" },
    { value: "1room2guests", label: "1 room, 2 guests" },
    { value: "1room3guests", label: "1 room, 3 guest" },
    { value: "2room1guest", label: "2 room, 1 guest" },
    { value: "2room2guests", label: "2 room, 2 guests" },
    { value: "2room3guests", label: "2 room, 3 guests" },
  ];

  function onSearchButtonClick(event) {
    const result = {
      location: location,
      checkInDate: checkInDate,
      checkOutDate: checkOutDate,
      roomFor: roomFor,
    };

    alert(JSON.stringify(result));
  }

  return (
    <>
      <div className="hero-section md:container bg-[#f6fcf9] max-md:pb-0 xl:pb-0 pb-11 relative md:mx-auto mt-2">
        <div className="columns-2 max-md:columns-1">
          <div className="hero-left px-6 md:py-10  mt-10">
            <h1 className="  md:pl-0 sm:text-center md:text-left md:text-4xl md:leading-[48px] lg:leading-[80px] lg:text-6xl font-semibold mt-3 text-3xl  font-sans">
              A Place Where Every Stay Blossoms
            </h1>
            <p className="hero-description text-xl text-[#555555] leading-8 mt-8 max-md:text-lg max-md:leading-6 text-justify">
              Welcome to your perfect escape, where every stay blooms with
              warmth and elegance. Whether you're seeking a peaceful retreat, an
              adventurous getaway, or a cozy space to recharge, we've got just
              the place for you.{" "}
            </p>
          </div>
          <div className="hero-right  p-6 ">
            <img
              src={BgHero}
              className="rounded-lg shadow-md"
              alt="Hotel image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
