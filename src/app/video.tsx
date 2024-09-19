import React from "react";

const VideoSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <video
        width={500}
        height={700}
        preload="auto"
        autoPlay
        loop
        playsInline
        controls
        muted
      >
        <source
          src="https://res.cloudinary.com/dxa54qfxx/video/upload/v1726709617/invitefinal10_lgj0s5.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoSection;
