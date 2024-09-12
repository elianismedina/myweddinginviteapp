"use client";
import CeremoniaSection from "./ceremonia";
import ConfirmSection from "./confirm";
import DresscodeSection from "./dresscode";
import MensajeSection from "./mensaje";
import RecepcionSection from "./recepcion";
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
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center bg-primary-950 w-full text-primary-400 p-2 text-sm">
        <p>Carlos & Elizabeth wedding invite</p>
      </footer>
    </div>
  );
}
