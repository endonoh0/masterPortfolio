import * as React from "react";
import "./wood.scss";

function Moon(props) {
  return (
    <div id="contain-all-wood">
      <svg viewBox="0 0 400 400" width="100%" height="100%">

        <radialGradient id="_rgradient_0" fx=".5" fy=".5" cx=".5" cy=".5" r=".5" gradientTransform="translate(107.867 107.867) scale(184.265)" gradientUnits="userSpaceOnUse">
              <stop offset="88.69218161%" stop-color="#ffe" />
              <stop offset="100%" stop-color="#fff" />
        </radialGradient>

        <g id="mountain-group">
          <path d="M296.02 340.854l11.631-20.145 19.014 32.932 19.013 32.932H78.165l19.013-32.932 19.014-32.932 11.631 20.145 7.508-16.143 4.818 10.357 17.974-38.644 20.966 45.074 7.017 15.085 14.228-24.644 15.771 27.317 11.292 19.558 17.357-37.316 20.966-45.074 17.974 38.644 4.817-10.357 7.509 16.143z" id="mountain-5" fill="#ff5349" />
          <path d="M389.876 350.054l11.992-22.008 19.603 35.977L441.075 400H165.257l19.603-35.977 19.604-35.977 11.992 22.008 7.742-17.636 4.967 11.315 18.532-42.217 21.617 49.242 7.234 16.48 14.67-26.923 16.261 29.843 11.643 21.366 17.895-40.766 21.617-49.242 18.533 42.217 4.967-11.315 7.742 17.636z" id="mountain-4" fill="#171717" />
          <path d="M0 400h97.178l-19.603-96.75-19.604-96.749-11.992 59.183-7.742-47.426-4.967 30.427-18.533-113.529L0 225.437V400z" id="mountain-3" fill="#ff5349" />
          <path d="M400 400H296.02l20.976-79.41 20.976-79.41 12.831 48.577 8.284-38.927 5.314 24.974 19.83-93.182 15.769 74.1V400z" id="mountain-2" fill="#ff5349" />
          <path d="M325.749 331.638l17.391-30.122 28.43 49.242L400 400H0l28.43-49.242 28.43-49.242 17.391 30.122L85.478 307.5l7.204 15.486 26.876-57.782 31.349 67.398 10.492 22.556 21.275-36.849 23.582 40.845 16.884 29.244 25.953-55.796 31.349-67.398 26.876 57.782 7.204-15.486 11.227 24.138z" id="mountain-1" fill="000" />
        </g>
      </svg>
    </div>
  );
}

const MemoMoon = React.memo(Moon);
export default MemoMoon;
