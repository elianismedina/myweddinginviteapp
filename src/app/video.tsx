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
      >
        <source
          src="https://res.cloudinary.com/dxa54qfxx/video/upload/v1725883226/inviteeli_vmdm52.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoSection;
