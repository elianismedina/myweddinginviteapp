import React from "react";
import { PiChurchLight } from "react-icons/pi";
import { FaChampagneGlasses } from "react-icons/fa6";
import { MdFoodBank } from "react-icons/md";
import { LuPartyPopper } from "react-icons/lu";
import { FaGlassMartiniAlt } from "react-icons/fa";

export const itineraryData = [
  {
    event: "Ceremonia",
    time: "5:00 PM",
    icon: React.createElement(PiChurchLight, null),
  },
  {
    event: "Coctel de bienvenida",
    time: "6:00 PM",
    icon: React.createElement(FaGlassMartiniAlt, null),
  },
  {
    event: "Brindis",
    time: "7:00 PM",
    icon: React.createElement(FaChampagneGlasses, null),
  },
  {
    event: "Comida",
    time: "8:00 PM",
    icon: React.createElement(MdFoodBank, null),
  },
  {
    event: "Rumba",
    time: "9:00 PM",
    icon: React.createElement(LuPartyPopper, null),
  },
] as const;
