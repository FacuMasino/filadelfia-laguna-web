import * as React from "react";
const FacebookSvg = ({
  bgColor = "#000",
  width = 35,
  height = 35,
}: {
  bgColor?: string;
  width?: number;
  height?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 35 35"
  >
    <g clipPath="url(#a)">
      <path
        fill={bgColor}
        d="M17.4.6C8.122.6.6 8.161.6 17.486c0 8.466 6.205 15.457 14.288 16.679V21.962h-4.156v-4.439h4.156V14.57c0-4.89 2.37-7.036 6.414-7.036 1.936 0 2.96.145 3.445.21v3.874H21.99c-1.716 0-2.315 1.637-2.315 3.48v2.426h5.03l-.682 4.439h-4.348V34.2c8.2-1.117 14.526-8.165 14.526-16.714C34.2 8.162 26.678.6 17.4.6Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="none" d="M0 0h35v35H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default FacebookSvg;
