import React from "react";

const Video = () => (
  <div className="container pt-5">
    <iframe
      src="https://player.vimeo.com/video/876892294?h=09a0587dc8&title=0&byline=0&portrait=0"
      width="640"
      height="1138"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
      className="rounded video "
    ></iframe>
  </div>
);

export default Video;
