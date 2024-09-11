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
                background: "#fef3c7",
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
                background: "linear-gradient(145deg, #451a03, #fef3c7)",
                fontSize: "1.5rem",
              }}
            >
              <p className="!mt-1 !font-normal text-primary-950 dark:text-white/75">
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
