import React from "react";
import "./Comments.css"

const Comments = () => {
  return (
    <div>
      <div className="comment">
        <div className="userInfo">
          <img src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1639423390/Amazonas/Ellipse_15_frvuf3.png" alt="" />
          <h3>Amazon Customer</h3>
        </div>
        <p>
          Electronic view finder is supposed to be the best, but from 5 minutes
          of playing with the camera, EVF is very disappointing - despite 120Hz
          refresh rate, the image is very choppy and laggy, almost like watching
          a retro video game - nauseating. That, and the build quality compared
          to 5D Mark III feels very cheap - too much plastic. There are some
          good features though, like auto-focus, high quality video, etc.
          UPDATE: The EVF appears to be definitely glitchy. Stuttering aside,
          2-3 times, when it was supposed to turn on by face proximity, it
          flashed a white thick line on its upper edge, and then remained dark.
          Maybe I got a defective unit.
        </p>
      </div>
      <div className="comment">
        <div className="userInfo">
          <img src="https://res.cloudinary.com/dtkdsolsz/image/upload/v1639423390/Amazonas/Ellipse_15_1_aslv7c.png" alt="" />
          <h3>Right Emboyo</h3>
        </div>
        <p>
          Long-time Canon DSLR user finally made the switch to mirrorless and
          now won't look back. Amazing piece of technology - focus system and
          low-light performance are astounding. Love that I can use my EF lenses
          with adapter and 24-105 f4 L "kit lens" is a worthy successor to its
          EF counterpart. My biggest quandary, like many, was whether I needed
          the extra pixels of the R5. Coming from a 20 MP original Canon 6D I'm
          comfortable with this sensor size. For my uses hits the sweet spot
          between image quality and speed/disk space. For birds-in-flight I do
          miss the extra crop room, but have a hard time justifying the extra
          $1,500 just for that.
        </p>
      </div>
    </div>
  );
};

export default Comments;
