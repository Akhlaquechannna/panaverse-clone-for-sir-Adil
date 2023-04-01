import Wrapper from "@/components/shared/Wrapper";
import HeroPoster from "@/assets/images/Hero-Poster.png";
import Image from "next/image";
// components
import Button from "@/components/shared/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center">
          <div className="absolute left-0 top-[95vh] hidden sm:block 4xl:hidden -z-20">
            <div className="blur-[150px] -z-40 bg-[#3fa0d4] w-64 h-64 rounded-full "></div>
          </div>
          {/* left side */}
          <div className="flex-1">
            <h4 className="text-teal-700 font-bold text-xl mt-4 max-w-xl">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h4>
            <h1 className={`text-4xl sm:text-5xl font-bold leading-0 mt-4`}>
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <p className="mt-6 sm:text-1xl text-xl text-slate-700 max-w-lg">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
            </p>
            <p className="mt-2 text-xl text-slate-700 max-w-lg">
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </p>
            <div className="mt-4 mb-4">
            {/* <div><Link ></Link></div> */}
            <Link href="https://www.piaic.org/">
              <Button text={"Enroll now"}/>
              </Link>
              
              {/* <Link href={"https://www.panaverse.co"}></Link> */}
              {/* <br/>
              <Button text={"Signup"}/> */}
            </div>
            {/* <button className="flex pl-7 pr-7 pt-4 pb-4 mt-7 rounded-full text-lg text-white bg-teal-800">
              Learn more
            </button> */}
          </div>
          {/* Right side */}
          <div className="flex-1">
            <Image src={HeroPoster} alt="Hero Poster" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
