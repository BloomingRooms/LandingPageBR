import {
  IconBreakfast,
  IconElectricity,
  IconExercise,
  IconOtherService,
  IconParkingArea,
  IconPrivateWorkspace,
  IconSwimmingpool,
  IconWifi,
} from "../assets/icons";
import Button from "./Button";
import "./facilitiessection.css";
import { TbAirConditioning } from "react-icons/tb";

const Facilities = () => {
  const dynamicFacilitiesData = [
    {
      icon: IconPrivateWorkspace,
      title: "Private Workspace",
      link: null,
    },
    {
      icon: IconParkingArea,
      title: "Parking Area",
      link: null,
    },
    {
      icon: IconBreakfast,
      title: "Breakfast",
      link: null,
    },
    {
      icon: IconWifi,
      title: " Wifi",
      link: null,
    },

    // {
    //   icon: IconSwimmingpool,
    //   title: "Swimming Pool",
    //   link: null
    // },
    {
      icon: IconOtherService,
      title: "AC Rooms",
      link: null,
    },
    // {
    //   icon: IconOtherService,
    //   title: "Other Service",
    //   link: null
    // },
  ];

  const FacilitiesBox = (props) => {
    return (
      <>
        <div
          className={`facilities-box flex justify-center items-center w-[193px] h-[193px] rounded-lg ${props.addClass}`}
        >
          <div className="">
            {/* <TbAirConditioning/> */}
            <img
              src={props.icon}
              className="mx-auto"
              alt={`${props.title} Icon`}
            />
            <p className="mt-6">{props.title}</p>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="md:container md:mx-auto max-md:mx-10 flex mt-36 max-md:flex-col">
        <div className="facilities-left w-2/6 h-full pr-8 max-md:w-full">
          <h2 className="leading-[50px] text-[40px] font-semibold max-md:text-2xl">
            We do provide our best facilities to you
          </h2>
          <p className="mt-5 text-[16ox] text-[#555555] leading-7 max-md:hidden">
            We take pride in offering the best facilities to enhance your stay.
            From modern amenities to exceptional service, we ensure you
            experience the highest level of comfort and convenience.{" "}
          </p>
          {/* <Button addClass={'mt-12 py-4 px-8 rounded-[36px] max-md:hidden'}>
            Contact Now
          </Button> */}
        </div>
        <div className="facilities-right w-4/6 grid grid-cols-4 gap-4 max-md:w-full max-sm:grid-cols-2 max-sm:gap-2 max-md:grid-cols-3 max-md:mt-7 max-lg:grid-cols-2 max-xl:grid-cols-3">
          {dynamicFacilitiesData.map((data, index) => {
            return (
              <FacilitiesBox
                key={index}
                icon={data.icon}
                title={data.title}
                addClass=""
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Facilities;
