import React from "react";

const VideoSection = () => {
  return (
    <div className="">
      <video
        width={500}
        height={600}
        controls
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
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
