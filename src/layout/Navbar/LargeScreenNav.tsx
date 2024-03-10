import Image from "next/image";
import Logo from "../../../public/ayana-holding-logo.png";
import AlMASHRIQ_LOGO from "../../../public/logo-almashriq.png";

const LargeScreenNav = () => {
  return (
    <header className="hidden group h-[100px] md:flex items-center fixed top-0 w-full mx-auto px-12 bg-transparent space-y-3 z-30 opacity-100">
      <div className="w-full flex items-center justify-between space-x-3 transition duration-500 ease-in-out delay-150">
        {/* <div className="absolute group-hover:invisible cursor-pointer text-white">
          |||
        </div> */}
        <button className="h-full bg-transparent flex border-none p-0 top-0 m-0 items-center justify-center absolute z-[1] transition-opacity duration-[0.35s] ease delay-200 group-hover:opacity-0">
          {/* group-hover transition-opacity duration-[0.35s] ease delay-150 group-hover:transition-opacity group-hover:duration-[0.35s] group-hover:ease group-hover:delay-150 */}
          <span className="w-[1px] h-4 bg-white mr-2 group-hover:translate-x-0 transition-all duration-[0.25s] ease delay-0"></span>
          <span className="w-[1px] h-4 bg-white mr-2 group-hover:translate-x-2 transition-all duration-[0.25s] ease delay-0"></span>
          <span className="w-[1px] h-4 bg-white mr-2 group-hover:translate-x-4 transition-all duration-[0.25s] ease delay-0"></span>
        </button>
        <ul className="flex opacity-0 group-hover:opacity-100 gap-4 transition-all duration-[0.35s] ease delay-300 relative z-30 -translate-x-[10px] group-hover:translate-x-0">
          <li className=" text-white cursor-pointer group-hover:opacity-100 text-sm tracking-[1.6px] mr-4 p-[5px]  transition-all duration-[0.25s] ease delay-0 group-hover:transition-all group-hover:duration-[0.25s] group-hover:ease group-hover:delay-150 font-normal">
            Home
          </li>
          <li className=" text-white cursor-pointer group-hover:opacity-100 text-sm tracking-[1.6px] mr-4 p-[5px] transition-all duration-[0.25s] ease delay-0 font-normal">
            About Us
          </li>
          <li className=" text-white cursor-pointer group-hover:opacity-100 text-sm tracking-[1.6px] mr-4 p-[5px] transition-all duration-[0.25s] ease delay-0 font-normal">
            Companies
          </li>
        </ul>
        <div className="text-lg pt-1 cursor-pointer">
          <Image
            src={AlMASHRIQ_LOGO}
            alt="LOGO"
            width={300}
            height={300}
            className="w-[184px]"
          />
        </div>
        {/* <h1 className="cursor-pointer text-white text-3xl font-extrabold -tracking-tighter">
          TITLE
        </h1> */}
        <ul className="flex invisible group-hover:visible gap-4 transition-all duration-[0.35s] ease relative z-[2] -translate-x-[10px] group-hover:transition-all group-hover:duration-[0.35s] group-hover:ease group-hover:0 group-hover:translate-x-0">
          <li className="invisible text-white cursor-pointer group-hover:visible text-sm tracking-[1.6px] mr-4 p-[5px]  transition-all duration-[0.25s] ease delay-0 group-hover:transition-all group-hover:duration-[0.25s] group-hover:ease group-hover:delay-0 font-normal">
            Projects
          </li>
          <li className="invisible text-white cursor-pointer group-hover:visible text-sm tracking-[1.6px] mr-4 p-[5px] transition-all duration-[0.25s] ease delay-0 font-normal">
            Our Services
          </li>
          <li className="invisible text-white cursor-pointer group-hover:visible text-sm tracking-[1.6px] mr-4 p-[5px] transition-all duration-[0.25s] ease delay-0 font-normal">
            Careers
          </li>
        </ul>
      </div>
    </header>
  );
};

export default LargeScreenNav;
