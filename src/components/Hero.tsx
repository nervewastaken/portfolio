import { aboutMe } from "@/lib/content";
import ImageCard from "./ImageCard";

const Hero = () => {
  return (
    <section className="mt-[4.5rem]">
      <div className="grid grid-cols-2 justify-around gap-4">
        <div className="flex justify-center items-center">
          {/* <h1 className="lg:text-5xl">Hardik Malhotra</h1>
          <h6 className="lg:text-3xl">Full Stack Developer</h6> */}
          <p className=" text-justify lg:text-lg xl:text-1xl md:text-base ">{aboutMe}</p>
        </div>
        <div className="flex justify-center items-center">
          <ImageCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
