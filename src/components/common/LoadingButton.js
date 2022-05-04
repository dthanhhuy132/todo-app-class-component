import React, { Component } from "react";

class LoadingButton extends Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          margin: "auto",
          background: "transparent",
          display: "block",
        }}
        width="30px"
        height="30px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        className="button-loading-icon"
      >
        <g transform="translate(20 50)">
          <circle cx={0} cy={0} r={6} fill="#0a0a0a">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.29296875s"
              calcMode="spline"
              keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
              values="0;1;0"
              keyTimes="0;0.5;1"
              dur="0.78125s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
        <g transform="translate(40 50)">
          <circle cx={0} cy={0} r={6} fill="#858589">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.1953125s"
              calcMode="spline"
              keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
              values="0;1;0"
              keyTimes="0;0.5;1"
              dur="0.78125s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
        <g transform="translate(60 50)">
          <circle cx={0} cy={0} r={6} fill="#b6afaf">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="-0.09765625s"
              calcMode="spline"
              keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
              values="0;1;0"
              keyTimes="0;0.5;1"
              dur="0.78125s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
        <g transform="translate(80 50)">
          <circle cx={0} cy={0} r={6} fill="#d3d0cd">
            <animateTransform
              attributeName="transform"
              type="scale"
              begin="0s"
              calcMode="spline"
              keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
              values="0;1;0"
              keyTimes="0;0.5;1"
              dur="0.78125s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    );
  }
}

export default LoadingButton;
