"use client";
import TimerSection from "./timer";
import VideoSection from "./video";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <VideoSection />
        <TimerSection />
        <button
          onClick={async () => {
            const res = await fetch("/api/emails", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: "elianismedina05@outlook.com",
                firstName: "Elianis",
              }),
            });
            const data = await res.json();
            console.log(data);
          }}
          className="px-4 py-2 text-white bg-primary-900 rounded-md flex flex-row items-center justify-center gap-2"
        >
          Send email
        </button>
      </main>
      <footer className="row-start-3   flex gap-6 flex-wrap items-center justify-center bg-primary-400 w-full">
        <p className="">Carlos & Elizabeth</p>
      </footer>
    </div>
  );
}
