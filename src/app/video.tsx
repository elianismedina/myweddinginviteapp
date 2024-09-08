import React from "react";

const VideoSection = () => {
  return (
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
  );
};

export default VideoSection;
