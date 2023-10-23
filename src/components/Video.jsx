import React from "react";

const Video = () => (
  <div className="container pt-5 d-flex justify-content-center" id="video">
    <iframe
      src="https://player.vimeo.com/video/876892294?h=09a0587dc8&title=0&byline=0&portrait=0"
      width="390"
      height="690"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
      className="rounded video d-none d-lg-inline d-md-block d-block "
    ></iframe>
    <iframe
      src="https://player.vimeo.com/video/876892294?h=09a0587dc8&title=0&byline=0&portrait=0"
      width="400"
      height="500"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowfullscreen
      className="rounded video d-block d-md-none"
    ></iframe>
  </div>
);

export default Video;
