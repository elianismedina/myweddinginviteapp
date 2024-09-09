import TimerSection from "./timer";
import VideoSection from "./video";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <VideoSection />
        <TimerSection />
      </main>
      <footer className="row-start-3   flex gap-6 flex-wrap items-center justify-center bg-primary-400 w-full">
        <p className="">Carlos & Elizabeth</p>
      </footer>
    </div>
  );
}
