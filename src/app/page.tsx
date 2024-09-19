"use client";
import CeremoniaSection from "./ceremonia";
import ConfirmSection from "./confirm";
import DresscodeSection from "./dresscode";
import GiftSection from "./gift";
import MensajeSection from "./mensaje";
import RecepcionSection from "./recepcion";
import ShareSection from "./share";
import SugerenciasSection from "./sugerencias";
import TimelineSection from "./timeline";
import TimerSection from "./timer";
import VideoSection from "./video";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen gap-16]">
      <main>
        <VideoSection />
        <TimerSection />
        <ConfirmSection />
        <MensajeSection />
        <CeremoniaSection />
        <RecepcionSection />
        <TimelineSection />
        <DresscodeSection />
        <GiftSection />
        <SugerenciasSection />
        <ShareSection />
      </main>
      <footer className={raleway.className}>
        <div className="flex flex-row items-center justify-center bg-primary-950 w-screen text-primary-300 p-2 text-md md:text-lg font-medium">
          <p>¡Nos vemos el 21 de Diciembre!</p>
        </div>
      </footer>
    </div>
  );
}
