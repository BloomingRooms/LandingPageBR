import { bloominginn } from "../assets/images";
import "./historysection.css";
import Button from "./Button";

const HistorySection = () => {
  return (
    <div className="history-section md:container bg-[#f6fcf9] relative md:mx-auto mt-36 max-md:mt-16  mb-10">
      <div className="flex columns-2 max-md:columns-1 max-md:flex-wrap max-sm:flex-wrap p-3">
        <div className="history-left w-100 h-100 relative">
          <img
            className="w-[220vh] h-[100%] max-2xl:w-[220vh] max-sm:rounded-lg sm:mx-[20px] md:rounded-md"
            src={bloominginn}
            alt="Discovery image"
          />
        </div>
        <div className="p-10 justify-center items-center sm:flex sm:flex-col ">
          <h1 className="md:pl-4 history-title leading-[80px] text-6xl font-semibold mt-3 max-md:text-2xl max-md:leading-[30px] max-2xl:text-[50px] max-sm:text-[30px] font-sans">
            Discover Our History
          </h1>
          <p className=" text-justify md:pr-24 text-xl text-[#555555] leading-8 mt-8 max-md:text-lg max-md:leading-6 max-sm:text-[20px]  md:pl-4 sm:items-center">
            Blooming Rooms began its journey with the iconic Blooming Inn in
            Shillong, providing warm hospitality in the heart of nature. Since
            then, we've expanded to three more locations, spreading our charm to
            Guwahati & Goa. Each of our hotels reflects the same dedication to
            comfort, offering a unique, memorable experience in every stay.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistorySection;
