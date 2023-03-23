import React from "react";
import blob1 from "../../assets/blobs/blob1.png";
import blob2 from "../../assets/blobs/blob2.png";
import blob3 from "../../assets/blobs/blob3.png";

const BlobAnimation = () => {
  const hasWindow = typeof window !== 'undefined';
  const width = hasWindow ? window.innerWidth : null;
  const height = hasWindow ? window.innerHeight : null;
  return (
    <>
      <div style={{ zIndex: -50, position: "fixed", top: height/3, left: width/2}}>
        <img src={blob1} alt="GoWork"  />
      </div>
      <div style={{ zIndex: -50, position: "fixed", top: height/6, left: width/6 }}>
        <img src={blob2} alt="GoWork" />
      </div>
      <div style={{ zIndex: -50, position: "fixed", top: height/1.5, left: width/10 }}>
        <img src={blob3} alt="GoWork" />
      </div>
    </>
  );
};

export default BlobAnimation;
