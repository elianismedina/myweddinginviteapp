import React from "react";
import { PiChurchLight } from "react-icons/pi";

export const itineraryData = [
  {
    event: "Breakfast",
    location: "Hotel",
    time: "7:00 AM",
    icon: React.createElement(PiChurchLight, null),
  },
  {
    event: "Morning Hike",
    location: "Mountains",
    time: "9:00 AM",
    icon: React.createElement(PiChurchLight, null),
  },
  {
    event: "Lunch",
    location: "Cafe",
    time: "12:00 PM",
    icon: React.createElement(PiChurchLight, null),
  },
  {
    event: "Afternoon Swim",
    location: "Beach",
    time: "3:00 PM",
    icon: React.createElement(PiChurchLight, null),
  },
  {
    event: "Dinner",
    location: "Restaurant",
    time: "6:00 PM",
    icon: React.createElement(PiChurchLight, null),
  },
  {
    event: "Evening Drinks",
    location: "Bar",
    time: "9:00 PM",
    icon: React.createElement(PiChurchLight, null),
  },
] as const;
