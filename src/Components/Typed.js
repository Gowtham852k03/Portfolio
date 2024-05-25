import React from 'react';
import Typewriter from 'typewriter-effect';

const Typed = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: ['<b style="color:rgb(160, 103, 250)">Web Developer', '<b style="color: rgb(121, 101, 250)">UI/UX Designer'],
          autoStart: true,
          loop: true,

          delay: 70,
          deleteSpeed: 20,
        }}
      />
    </div>
  )
}

export default Typed
