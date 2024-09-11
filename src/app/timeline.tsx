"use client";
import { itineraryData } from "@/lib/data";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimelineSection = () => {
  return (
    <div>
      <VerticalTimeline lineColor="">
        {itineraryData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.event}
              icon={item.icon}
              iconStyle={{
                background: "linear-gradient(145deg, #FFC0CB, #FF69B4)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.event}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.time}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default TimelineSection;
