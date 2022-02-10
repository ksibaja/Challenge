import React from "react";
import "./styles/Loading.css";

const Loading = () => {
  return (
    <div
      className="loader"
      style={{
        position: "absolute",
        left: "50%",
        top: "40%",
        transform: "translate(-50%, -50%)",
      }}
    >
      Loading...
    </div>
  );
};

export default Loading;
