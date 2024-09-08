export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <video
            width={300}
            height={300}
            controls
            preload="auto"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-lg"
          >
            <source
              src="https://res.cloudinary.com/dxa54qfxx/video/upload/v1725752193/invite_ab744a.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
