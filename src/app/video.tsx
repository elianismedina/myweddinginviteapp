import React from "react";

const VideoSection = () => {
  return (
    <div className="">
      <video
        width={500}
        height={700}
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
        controls
      >
        <source
          src="https://res.cloudinary.com/dxa54qfxx/video/upload/v1725884088/inviteelicarlos_hbozir.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoSection;
