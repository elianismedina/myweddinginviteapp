"use client";
import { itineraryData } from "@/lib/data";
import localFont from "next/font/local";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const raleway = localFont({
  src: "./fonts/Raleway-VariableFont_wght.ttf",
});

const TimelineSection = () => {
  return (
    <div className="bg-[url(https://res.cloudinary.com/dxa54qfxx/image/upload/v1726097978/timeline_01_iettyn.jpg)] opacity-60">
      <div className={raleway.className}>
        <VerticalTimeline lineColor="">
          {itineraryData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background: "#FFEEE3",
                  boxShadow: "none",
                  border: "1px solid rgba(69, 26, 3, 1)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid rgba(69, 26, 3, 1)",
                }}
                icon={item.icon}
                iconStyle={{
                  background: "linear-gradient(145deg, #451a03, #FFEEE3)",
                  fontSize: "1rem",
                }}
              >
                <h3 className="!font-bold text-primary-950 dark:text-white">
                  {item.event}
                </h3>
                <p className="!mt-1 !font-normal text-primary-950 dark:text-white/75">
                  {item.time}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default TimelineSection;
