import React from "react";

const Image = props => {
  const { src } = props;
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundImage: `url("${src}")`,
        backgroundRepeat: "no-repeat",
        WebkitBackgroundSize: "cover",
        MozBackgroundSize: "cover",
        OBackgroundSize: "cover",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default Image;
