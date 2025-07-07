import React, { JSX } from "react";
import TodaysDetails from "../highlights/TodaysDetails";
import img from "../../assets/images/sun.gif";

const MainComponent: React.FC = (): JSX.Element => (
  <div className="container flex flex-col ">
    <div className="header">
    </div>
    <div className="days flex justify-between gap-4">
      {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
        <div
          key={index}
          className="day shadow-lg bg-white rounded-4xl text-center flex flex-1 h-50 items-center flex-col gap-5 justify-center "
        >
          <h1 className=" text-gray-400 font-semibold ">{day}</h1>
          <div className="weather text-center ">
            <img src={img} alt="Weather Icon" width={50} height={50} />
            <span className="mt-4">9°C</span>
          </div>
        </div>
      ))}
    </div>
    <div className="highlights">
      <TodaysDetails />
    </div>
  </div>
);

export default MainComponent;
