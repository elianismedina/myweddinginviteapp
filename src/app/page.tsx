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
    </div>
  );
}
