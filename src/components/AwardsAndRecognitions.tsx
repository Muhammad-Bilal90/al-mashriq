import AwardsBG from "../../public/awardsBackground.jpg";
import Awards1 from "../../public/awards1.png";
import Awards2 from "../../public/awards2.png";
import Awards3 from "../../public/awards3.png";
import Awards4 from "../../public/awards4.png";
import Awards5 from "../../public/awards5.png";
import Awards6 from "../../public/awards6.png";
import Awards7 from "../../public/awards7.png";
import Awards8 from "../../public/awards8.png";
import Awards9 from "../../public/awards9.png";
import Awards10 from "../../public/awards10.png";
import Awards11 from "../../public/awards11.png";
import Awards12 from "../../public/awards12.png";
import Image, { StaticImageData } from "next/image";
import { Phone } from "lucide-react";
import { MapPin } from "lucide-react";
import { Mail } from "lucide-react";
import Footer from "@/layout/Footer/Footer";

let AWARD_IMAGES = [
  Awards1,
  Awards2,
  Awards3,
  Awards4,
  Awards5,
  Awards6,
  Awards7,
  Awards8,
  Awards9,
  Awards10,
  Awards11,
  Awards12,
];

const AwardsAndRecognitions = () => {
  return (
    <div
      className="relative w-full snap-center flex flex-col justify-between"
      style={{ backgroundImage: `url(${AwardsBG.src})` }}
    >
      <div className="w-full sm:max-w-[540px] md:max-w-[720px] lg:max-w-[1140px] px-[15px] py-[90px] mx-auto">
        <h3 className="tracking-[2px] text-white font-normal text-[34px] text-center mb-[30px] leading-[1.2]">
          Awards & Recognitions
        </h3>
        <div className="flex flex-wrap justify-center">
          {AWARD_IMAGES.map((award: StaticImageData, index: number) => (
            <div className="p-2 md:p-6" key={index}>
              <Image
                src={award}
                alt="Awards-Image"
                height={200}
                width={200}
                className="w-[93px] h-20"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center pt-[70px] min-[992px]:mx-[4.5%]">
          <div className="text-center mb-8">
            <span className="text-white font-normal leading-[1.2] text-base pb-[15px] px-[15px] border-b-[1px] border-solid border-[#ffffff1a]">
              GET IN TOUCH
            </span>
          </div>
          <div>
            <div className="w-full flex justify-between min-[992px]:justify-evenly px-4 lg:px-32">
              <p className="flex justify-between items-center leading-[2.2] font-normal text-white text-sm">
                <Phone className="text-3xl w-[1.35em] h-[1em] mr-[10px]" /> CALL
              </p>
              <p className="flex justify-between items-center leading-[2.2] font-normal text-white text-sm">
                <MapPin className="text-3xl w-[1.35em] h-[1em] mr-[10px]" />{" "}
                LOCATION
              </p>
              <p className="flex justify-between items-center leading-[2.2] font-normal text-white text-sm">
                <Mail className="text-3xl w-[1.35em] h-[1em] mr-[10px]" /> MAIL
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AwardsAndRecognitions;
