import Image from "next/image";
import Logo from "../../../public/ayana-holding-logo.png";
const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row  w-full lg:h-[84px] justify-between items-center py-[30px] lg:py-0 px-[15px] mx-auto lg:px-[7.5%] bg-[#222]">
      <div className="text-lg pt-1 cursor-pointer mb-5 lg:mb-0">
        <Image
          src={Logo}
          alt="LOGO"
          width={200}
          height={200}
          className="h-[25px] w-[82px]"
        />
      </div>
      <div>
        <p className="text-xs tracking-[1px] text-white mb-5 lg:mb-0">
          Developed and designed by Brand Capital © 2020
        </p>
      </div>
      <ul className="flex flex-col lg:flex-row justify-between items-center w-auto">
        <li className="text-xs mr-[10px] lg:mr-10 mb-5 lg:mb-0 tracking-[1px] text-center text-[#ffffffb3]">
          MEDIA
        </li>
        <li className="text-xs mr-[10px] lg:mr-10 mb-5 lg:mb-0 tracking-[1px] text-center text-[#ffffffb3]">
          CONTACT US
        </li>
        <li className="text-xs mr-[10px] lg:mr-10 mb-[10px] lg:mb-0 tracking-[1px] text-center text-[#ffffffb3]">
          TERMS AND CONDITIONS
        </li>
      </ul>
    </div>
  );
};

export default Footer;
