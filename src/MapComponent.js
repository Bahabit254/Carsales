import React from 'react';

const MapComponent = () => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          title='Google Maps'
          width="100%"
          height="100%"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Nairobi&t=&z=10&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        >Our Location</iframe>
        <a href="https://2yu.co">2yu</a>
        <br />
        <style>{`
          .mapouter {
            position: relative;
            text-align: right;
            height: 100%;
            width: 100%;
          }
        `}</style>
        <a href="https://embedgooglemap.2yu.co/">html embed google map</a>
        <style>{`
          .gmap_canvas {
            overflow: hidden;
            background: none!important;
            height: 100%;
            width: 100%;
          }
        `}</style>
      </div>
    </div>
  );
};

export default MapComponent;
