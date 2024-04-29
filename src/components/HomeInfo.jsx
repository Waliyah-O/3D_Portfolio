import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center"> {text}</p>
      <Link className="neo-brutalism-white neo-btn" to={link}>
        {btnText} <img className="w-4 h-4 object-contain" src={arrow} alt="" />
      </Link>
    </div>
  );
};

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Waliyah 👋</span>
      <br />A software Engineer from Nigeria
    </h1>
  ),
  2: (
    <InfoBox
      text={
        "worked with many companies and picked up many skills along the way"
      }
      link={"/about"}
      btnText={"Learn more"}
    />
  ),
  3: (
    <InfoBox
      text={
        "Led multiple projects to success over the years. Curious about the impact?"
      }
      link={"/projects"}
      btnText={"Visit my portfolio"}
    />
  ),
  4: (
    <InfoBox
      text={
        "Need a project done or looking for a dev? I'm just a few key strokes away"
      }
      link={"/contact"}
      btnText={"Let's talk"}
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;

// 	const renderContent = {
// 		1: (
// 			<h1>1</h1>
// 		),
// 		2: (
// 			<h1>2</h1>
// 		),
// 		3: (
// 			<h1>3</h1>
// 		),
// 		4: (
// 			<h1>4</h1>
// 		),
// }
