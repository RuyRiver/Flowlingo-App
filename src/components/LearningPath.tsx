"use client";

import React from "react";
import UnitHeader from "./UnitHeader";
import LessonNodeComponent from "./LessonNodeComponent";
import Mascot from "./Mascot";

const LearningPath = () => {
  return (
    <div className="flex p-16 items-center justify-center gap-12 bg-white relative min-h-screen">
      <div className="flex w-[580px] flex-col items-start gap-5 relative">
        {/* Unit 1 */}
        <div className="flex flex-col items-start self-stretch relative">
          <UnitHeader
            unitNumber="Unit 1"
            title="Basics of Cadence"
            backgroundColor="#02D87E"
          />

          {/* Levels Container */}
          <div className="w-[580px] h-[622px] relative mt-5">
            {/* Unit Review - Bottom */}
            <LessonNodeComponent
              type="review"
              position={{ left: 255, top: 533 }}
            />

            {/* Story - Above Review */}
            <LessonNodeComponent
              type="story"
              position={{ left: 255, top: 444 }}
            />

            {/* Progress Check */}
            <LessonNodeComponent
              type="progress"
              position={{ left: 205, top: 348 }}
            />

            {/* Lesson with Lock */}
            <LessonNodeComponent
              type="lesson"
              position={{ left: 185, top: 257 }}
            />

            {/* Story */}
            <LessonNodeComponent
              type="story"
              position={{ left: 210, top: 172 }}
            />

            {/* Start Lesson */}
            <div className="absolute left-[241px] top-[67px] cursor-pointer transition-all duration-200 hover:scale-105">
              {/* Progress Ring */}
              <svg
                width="98"
                height="99"
                viewBox="0 0 98 99"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[98px] h-[98px] flex-shrink-0 transition-all duration-200 hover:drop-shadow-lg"
              >
                <path
                  d="M49 0.757812C61.9956 0.757812 74.459 5.9203 83.6482 15.1096C92.8375 24.2989 98 36.7622 98 49.7578C98 62.7534 92.8375 75.2168 83.6482 84.406C74.459 93.5953 61.9956 98.7578 49 98.7578C36.0044 98.7578 23.5411 93.5953 14.3518 84.406C5.16249 75.2168 0 62.7534 0 49.7578C0 36.7622 5.16249 24.2989 14.3518 15.1096C23.5411 5.9203 36.0044 0.757813 49 0.757812ZM49 8.59781C38.0837 8.59781 27.6145 12.9343 19.8955 20.6533C12.1765 28.3723 7.84 38.8415 7.84 49.7578C7.84 60.6741 12.1765 71.1433 19.8955 78.8623C27.6145 86.5813 38.0837 90.9178 49 90.9178C59.9163 90.9178 70.3855 86.5813 78.1045 78.8623C85.8235 71.1433 90.16 60.6741 90.16 49.7578C90.16 38.8415 85.8235 28.3723 78.1045 20.6533C70.3855 12.9343 59.9163 8.59781 49 8.59781Z"
                  fill="#E5E5E5"
                />
                <path
                  d="M49 4.84969C49 4.30617 49.113 3.76859 49.3319 3.2711C49.5508 2.7736 49.8707 2.32706 50.2714 1.95982C50.6721 1.59259 51.1448 1.31269 51.6594 1.13791C52.174 0.963125 52.7194 0.897274 53.2609 0.944537C64.7406 1.94657 75.5 6.96242 83.6482 15.1107C91.7965 23.259 96.8124 34.0183 97.8144 45.4981C97.8617 46.0395 97.7958 46.5849 97.621 47.0995C97.4462 47.6142 97.1663 48.0868 96.7991 48.4875C96.4319 48.8882 95.9853 49.2082 95.4878 49.427C94.9903 49.6459 94.4528 49.7589 93.9092 49.7589C92.9286 49.7589 91.9836 49.3914 91.2606 48.7288C90.5377 48.0662 90.0894 47.1567 90.0041 46.1798C89.1624 36.5368 84.9491 27.499 78.1045 20.6544C71.26 13.8099 62.2221 9.59655 52.5791 8.75484C51.6022 8.66957 50.6927 8.22123 50.0301 7.49829C49.3676 6.77535 49 5.83033 49 4.84969Z"
                  fill="#FFC800"
                />
              </svg>

              {/* Start Lesson Node */}
              <div className="absolute left-[14px] top-[14px]">
                <LessonNodeComponent
                  type="start"
                  position={{ left: 0, top: 0 }}
                />
              </div>

              {/* START Button */}
              <div className="absolute left-1/2 top-[-45px] transform -translate-x-1/2">
                <div className="flex p-[13.5px_14.4px_14.5px_14.6px] items-start rounded-[10px] border-2 border-[#E5E5E5] bg-white transition-all duration-200 hover:bg-flowlingo-green hover:border-flowlingo-green hover:shadow-md">
                  <div className="text-flowlingo-green text-center font-inter text-[15px] font-bold leading-[17px] tracking-[0.51px] uppercase transition-colors duration-200 hover:text-white">
                    START
                  </div>
                </div>
              </div>
            </div>

            {/* Connecting Path Lines */}
            <div className="w-[87px] h-9 flex-shrink-0 rounded-[100px] bg-[#E5E5E5] absolute left-[367px] top-[298px]"></div>

            {/* Mascot */}
            <Mascot />
          </div>
        </div>

        {/* Unit 2 */}
        <div className="flex flex-col items-start self-stretch relative mt-8">
          <UnitHeader
            unitNumber="Unit 2"
            title="EVM"
            backgroundColor="#CE82FF"
          />
        </div>

        {/* Unit 3 */}
        <div className="flex flex-col items-start self-stretch relative mt-8">
          <UnitHeader
            unitNumber="Unit 3"
            title="Order food and drink"
            backgroundColor="#00CD9C"
          />
        </div>
      </div>
    </div>
  );
};

export default LearningPath;
