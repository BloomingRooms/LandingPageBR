import Button from "./Button";
import { LogoBR } from "../assets/images";

const Navbar = () => {
  return (
    <nav className="flex sm:justify-center sm:items-center md:justify-start ">
      <img
        src={LogoBR}
        className="px-4 w-[500px] h-[120px] object-cover   "
        alt=""
        srcset=""
      />

      {/* <div>
        <ul className="flex gap-8 max-sm:hidden">
          <li><a href="#booking">Booking</a></li>
          <li><a href="#facilities">Facilities</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#location">Location</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div> */}
      {/* <div>
        <Button addClass="">Book Now</Button>
      </div> */}
    </nav>
  );
};

export default Navbar;
