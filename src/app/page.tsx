"use client";
import CeremoniaSection from "./ceremonia";
import ConfirmSection from "./confirm";
import MensajeSection from "./mensaje";
import TimerSection from "./timer";
import VideoSection from "./video";
import localFont from "next/font/local";

const myFont = localFont({
  src: [
    {
      path: "./fonts/PlayfairDisplay-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PlayfairDisplay-Bold.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/PlayfairDisplay-BlackItalic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/PlayfairDisplay-BoldItalic.woff",
      weight: "700",
      style: "italic",
    },
  ],
});

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen gap-16]">
      <main className={myFont.className}>
        <VideoSection />
        <TimerSection />
        <ConfirmSection />
        <MensajeSection />
        <CeremoniaSection />
      </main>
      <footer className="row-start-3   flex gap-6 flex-wrap items-center justify-center bg-primary-400 w-full">
        <p>Carlos & Elizabeth</p>
      </footer>
    </div>
  );
}
