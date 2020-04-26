import React from "react";
import loadingGif from "../images/gif/wedding-loader.gif";
export default function Loading() {
  return (
    <div className="loading">
      <h4>Data Loading...</h4>
      <img src={loadingGif} alt="loading"></img>
    </div>
  );
}