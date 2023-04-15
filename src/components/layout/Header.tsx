import logo from "/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/shared/Wrapper";
import React from "react";

const Header = () => {
  return (
    <header className=" z-10 shadow-lg bg-[#0d6a9c] ">
      <Wrapper>
        <div className="flex justify-between py-5 sticky top-0 items-center text-white">
          {/* logo */}
          <div>
            {/* <h2 className="text-xl font-bold">panaverse dao</h2> */}
            <Image src={logo} alt="Panaverse Dao logo" />
          </div>
          {/* navigation bar */}
          <ul className="flex space-x-8 font-semibold">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
             
              {
                <div className="flex">
                  <Link href={"/"}>Course</Link>
                  <select id="course" name="course" className="text-black">
                    <option>WMD</option>
                    <option>AI</option>
                    <option>CNC</option>
                    <option>IOT</option>
                    <option>GB</option>
                    <option>NPA</option>
                  </select>
                </div>
              }
             
              {/* <Link href={"https://www.panaverse.co/"}>Courses</Link> */}
            </li>
            <li>
              <Link href={"https://portal.piaic.org"}>Sign up</Link>
            </li>
            <li>
              <Link href={"https://www.piaic.org/"}>About us</Link>
            </li>
          </ul>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
