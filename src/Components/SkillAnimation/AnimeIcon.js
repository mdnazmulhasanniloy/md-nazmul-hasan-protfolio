// import css from "../../assets/skillBackground/css.svg";
// import firebase from "../../assets/skillBackground/firebase.svg";
// import html from "../../assets/skillBackground/html.svg";
// import js from "../../assets/skillBackground/js.svg";
// import mongodb from "../../assets/skillBackground/mongodb.svg";
// import node from "../../assets/skillBackground/node.svg";
// import react from "../../assets/skillBackground/react.svg";
// import tailwind from "../../assets/skillBackground/tailwind.svg";
import { SiFirebase, SiMongodb, SiTailwindcss } from "react-icons/si";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

export const animateIcons = [
  {
    class: "css",
    icons: (
      <svg
        className="icons"
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        fill="none"
        viewBox="0 0 54 54"
      >
        <path
          fill="#2196F3"
          d="M3.375 0l4.303 48.6L27 54l19.315-5.397L50.625 0H3.375z"
        ></path>
        <path
          fill="#FAFAFA"
          d="M41.426 15.893l-.544 6.105-1.64 18.303-12.241 3.385-.01.003-12.234-3.388-.854-9.572h5.994l.445 4.965 6.652 1.795.004-.003 6.662-1.795.908-8.273-20.952.058-.594-5.657 22.049-.26.445-6.054-23.085.064-.388-5.633h29.916l-.533 5.957z"
        ></path>
      </svg>
    ),
    title: "CSS",
  },
  {
    class: "js",
    icons: (
      <svg
        className="icons"
        xmlns="http://www.w3.org/2000/svg"
        id="Capa_1"
        width="55"
        height="55"
        viewBox="0 0 512 512"
      >
        <path fill="#ffdf00" d="M0 0h512v512H0z"></path>
        <path d="M343.934 400.002c10.313 16.839 23.731 29.216 47.462 29.216 19.935 0 32.67-9.964 32.67-23.731 0-16.498-13.084-22.341-35.027-31.939l-12.028-5.161c-34.719-14.791-57.783-33.321-57.783-72.493 0-36.084 27.494-63.553 70.461-63.553 30.59 0 52.582 10.646 68.429 38.522l-37.465 24.056c-8.249-14.791-17.148-20.618-30.964-20.618-14.092 0-23.024 8.94-23.024 20.618 0 14.434 8.94 20.277 29.582 29.217l12.028 5.152c40.879 17.53 63.959 35.401 63.959 75.581 0 43.317-34.028 67.048-79.726 67.048-44.682 0-73.549-21.293-87.674-49.201zm-169.96 4.169c7.558 13.41 14.434 24.747 30.964 24.747 15.807 0 25.779-6.185 25.779-30.232V235.089h48.112v164.246c0 49.818-29.208 72.493-71.843 72.493-38.522 0-60.83-19.936-72.176-43.947z"></path>
      </svg>
    ),
    title: "Js",
  },
  {
    class: "tailwind",
    icons: (
      <svg
        className="icons"
        xmlns="http://www.w3.org/2000/svg"
        width="58.3"
        height="35.2"
        fill="none"
        viewBox="0 0 65 39"
      >
        <path
          fill="#06B6D4"
          fill-rule="evenodd"
          d="M32.5 0c-8.665 0-14.081 4.333-16.25 13 3.251-4.332 7.042-5.956 11.373-4.874 2.476.617 4.232 2.41 6.2 4.395 3.173 3.235 6.876 6.976 14.927 6.976 8.665 0 14.081-4.333 16.25-13-3.248 4.335-7.039 5.96-11.373 4.875-2.476-.618-4.232-2.41-6.2-4.396C44.244 3.725 40.558 0 32.5 0zM16.25 19.497c-8.665 0-14.081 4.334-16.25 13 3.255-4.331 7.046-5.956 11.373-4.874 2.476.617 4.232 2.41 6.2 4.4C20.745 35.254 24.448 39 32.5 39c8.665 0 14.081-4.333 16.25-13-3.248 4.332-7.039 5.953-11.373 4.864-2.476-.618-4.232-2.41-6.2-4.396-3.173-3.235-6.876-6.981-14.927-6.981v.01z"
          clip-rule="evenodd"
        ></path>
      </svg>
    ),
    title: "Tailwind",
  },
  {
    class: "html",
    icons: (
      <svg
        className="icons"
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        x="0"
        y="0"
        enable-background="new 0 0 434.1 434.1"
        version="1.1"
        viewBox="0 0 434.1 434.1"
        xmlSpace="preserve"
        width="58"
        height="58"
      >
        <path fill="#fff" d="M82.7 44.3H362.2V366.7H82.7z"></path>
        <path
          fill="#FC490B"
          d="M41.1 23.7L68 367.6c.4 5.2 3.9 9.6 8.8 11.1l141.4 44.8c2.5.8 5.2.8 7.7 0l141.4-44.8c4.9-1.6 8.4-6 8.8-11.1L403 23.7c.6-7.4-5.3-13.7-12.7-13.7H53.8c-7.5 0-13.3 6.3-12.7 13.7zm293 106.7H159l5.3 48.8h166.1l-10.9 139-97.4 30.8-97.4-30.9-5.7-72.6h51.1v35.6l53.3 14.3 53-14.3 4.1-56.8H117.4L106.5 85.8h231.1l-3.5 44.6z"
        ></path>
      </svg>
    ),
    title: "Html",
  },
  {
    class: "node",
    icons: (
      <svg
        className="icons"
        xmlns="http://www.w3.org/2000/svg"
        id="Capa_1"
        width="58"
        height="58"
        viewBox="0 0 512 512"
      >
        <linearGradient
          id="XMLID_00000118357800129798447730000005862678814579567263_"
          x1="337.597"
          x2="156.289"
          y1="89.494"
          y2="459.361"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#3f873f"></stop>
          <stop offset="0.33" stop-color="#3f8b3d"></stop>
          <stop offset="0.637" stop-color="#3e9638"></stop>
          <stop offset="0.934" stop-color="#3da92e"></stop>
          <stop offset="1" stop-color="#3dae2b"></stop>
        </linearGradient>
        <linearGradient
          id="SVGID_1_"
          x1="225.787"
          x2="733.809"
          y1="282.815"
          y2="-92.539"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.138" stop-color="#3f873f"></stop>
          <stop offset="0.402" stop-color="#52a044"></stop>
          <stop offset="0.713" stop-color="#64b749"></stop>
          <stop offset="0.908" stop-color="#6abf4b"></stop>
        </linearGradient>
        <linearGradient
          id="SVGID_00000048489710280204197710000009720263475330385543_"
          x1="24.028"
          x2="487.275"
          y1="255.987"
          y2="255.987"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.092" stop-color="#6abf4b"></stop>
          <stop offset="0.287" stop-color="#64b749"></stop>
          <stop offset="0.598" stop-color="#52a044"></stop>
          <stop offset="0.862" stop-color="#3f873f"></stop>
        </linearGradient>
        <path
          id="XMLID_143_"
          fill="url(#XMLID_00000118357800129798447730000005862678814579567263_)"
          fill-rule="evenodd"
          d="M268.14 3.246a24.233 24.233 0 00-24.231 0L43.22 119.058a24.226 24.226 0 00-12.125 20.994v231.802c0 8.659 4.62 16.657 12.117 20.994L243.9 508.752a24.253 24.253 0 0024.247 0l200.642-115.905a24.258 24.258 0 0012.115-20.994v-231.81c0-8.659-4.62-16.657-12.123-20.986z"
          clip-rule="evenodd"
        ></path>
        <path
          fill="url(#SVGID_1_)"
          d="M469.18 119.058L267.93 3.246c-1.985-1.147-4.112-1.968-6.299-2.507L36.08 386.577c1.935 2.865 3.818 4.803 6.355 6.271l201.592 115.905c5.71 3.296 12.496 4.067 18.723 2.346L474.577 123.21a26.411 26.411 0 00-5.397-4.152z"
        ></path>
        <path
          fill="url(#SVGID_00000048489710280204197710000009720263475330385543_)"
          d="M469.293 392.848c5.848-3.384 9.989-9.312 11.148-16.265L261.631.739c-5.761-1.147-12.959-.486-18.143 2.507L43.59 118.361l215.947 393.404c3.082-.42 6.1-1.417 8.863-3.012z"
        ></path>
      </svg>
    ),
    title: "NodeJs",
  },
  {
    class: "firebase",
    icons: (
      <svg
        className="icons"
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        x="0"
        y="0"
        version="1.1"
        viewBox="0 0 95.39 131.07"
        width="50"
        height="50"
      >
        <path
          fill="#FFA000"
          d="M.05 105.75L16.18 2.52c.2-1.27 1.18-2.26 2.44-2.48s2.52.4 3.13 1.53l16.68 31.12 6.65-12.66c.51-.98 1.53-1.59 2.64-1.59s2.12.61 2.64 1.59l45.02 85.72H.05z"
        ></path>
        <path
          fill="#F57C00"
          d="M55.78 65.54L38.43 32.68.05 105.75l55.73-40.21z"
        ></path>
        <path
          fill="#FFCA28"
          d="M95.39 105.75L83.03 29.29c-.19-1.1-.97-2-2.03-2.34s-2.22-.06-3.01.73L.05 105.75l43.12 24.18a8.94 8.94 0 008.71 0l43.51-24.18z"
        ></path>
        <path
          fill="#fff"
          fill-opacity="0.2"
          d="M83.03 29.29c-.19-1.1-.97-2-2.03-2.34s-2.22-.06-3.01.73L62.52 43.19 50.36 20.03c-.51-.98-1.53-1.59-2.64-1.59s-2.12.61-2.64 1.59l-6.65 12.66L21.75 1.57C21.15.44 19.88-.18 18.62.04s-2.25 1.22-2.44 2.48L.05 105.75H0l.05.06.42.21 77.49-77.58c.79-.79 1.95-1.08 3.02-.74s1.85 1.24 2.03 2.35l12.25 75.77.12-.07-12.35-76.46zM.19 105.61L16.18 3.26c.19-1.27 1.18-2.27 2.44-2.48s2.52.4 3.13 1.53l16.68 31.12 6.65-12.66c.51-.98 1.53-1.59 2.64-1.59s2.12.61 2.64 1.59l11.92 22.66L.19 105.61z"
        ></path>
        <path
          fill="#A52714"
          fill-opacity="0.2"
          d="M51.89 129.2a8.94 8.94 0 01-8.71 0L.16 105.09l-.1.66 43.12 24.18a8.94 8.94 0 008.71 0l43.5-24.18-.11-.69-43.39 24.14z"
        ></path>
        <linearGradient
          id="b_1_"
          x1="-243.479"
          x2="-242.436"
          y1="345.28"
          y2="344.521"
          gradientTransform="matrix(95 0 0 -130.9998 23127.441 45253.934)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stop-color="#FFF" stop-opacity="0.1"></stop>
          <stop offset="0.14" stop-color="#FFF" stop-opacity="0.08"></stop>
          <stop offset="0.61" stop-color="#FFF" stop-opacity="0.02"></stop>
          <stop offset="1" stop-color="#FFF" stop-opacity="0"></stop>
        </linearGradient>
        <path
          id="b"
          fill="url(#b_1_)"
          d="M82.91 29.3c-.19-1.1-.97-2-2.02-2.34a2.953 2.953 0 00-3 .73L62.47 43.2 50.35 20.05c-.51-.98-1.53-1.59-2.63-1.59s-2.11.61-2.63 1.59l-6.63 12.66L21.84 1.6C21.24.47 19.98-.15 18.72.07s-2.24 1.22-2.43 2.48L.22 105.73l42.97 24.17a8.882 8.882 0 008.68 0l43.34-24.17-12.3-76.43z"
        ></path>
      </svg>
    ),
    title: "Firebase",
  },
  {
    class: "mongodb",
    icons: (
      <svg
        className="icons"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        image-rendering="optimizeQuality"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
        viewBox="0 0 598.88 1333.33"
        width="62"
        height="62"
      >
        <g fill-rule="nonzero">
          <path
            fill="#599636"
            d="M295.27 3.65l35.58 66.83c8 12.33 16.67 23.25 26.87 33.42 29.79 29.79 58.08 60.99 83.5 94.41 60.28 79.16 100.95 167.07 129.98 262.14 17.42 58.08 26.87 117.66 27.58 177.9 2.91 180.11-58.83 334.76-183.31 463.28-20.33 20.33-42.08 39.16-65.41 55.91-12.33 0-18.17-9.46-23.25-18.16-9.45-15.96-15.25-34.17-18.16-52.29-4.38-21.8-7.25-43.58-5.83-66.08v-10.16c-1-2.17-11.87-1002.07-7.54-1007.19v.01z"
          ></path>
          <path
            fill="#6cac48"
            d="M295.27 1.43c-1.46-2.91-2.91-.71-4.38.71.71 14.58-4.38 27.58-12.33 40-8.75 12.33-20.33 21.8-31.96 31.96-64.57 55.91-115.4 123.45-156.11 198.98C36.33 374.74 8.41 483.68.5 598.38c-3.62 41.37 13.09 187.36 26.13 229.48 35.58 111.82 99.49 205.52 182.27 286.84 20.33 19.58 42.08 37.74 64.58 55.2 6.54 0 7.25-5.83 8.74-10.17 2.85-9.28 5.06-18.76 6.54-28.34l14.58-108.9L295.26 1.43z"
          ></path>
          <path
            fill="#c2bfbf"
            d="M330.85 1201.77c1.46-16.67 9.46-30.5 18.17-44.29-8.75-3.62-15.25-10.83-20.33-18.87-4.38-7.25-8-15.96-10.83-23.96-10.17-30.5-12.33-62.5-15.25-93.66v-18.87c-3.62 2.91-4.38 27.58-4.38 31.25-2.03 32.85-6.54 65.8-13.08 98.05-2.17 13.08-3.62 26.12-11.67 37.74 0 1.46 0 2.91.71 5.09 13.08 38.5 16.67 77.7 18.87 117.66v14.58c0 17.41-.71 13.74 13.75 19.58 5.83 2.17 12.33 2.91 18.16 7.25 4.38 0 5.09-3.62 5.09-6.54l-2.17-23.96v-66.83c-.71-11.67 1.46-23.25 2.91-34.16l.05-.06z"
          ></path>
        </g>
      </svg>
    ),
    title: "Mongodb",
  },
  {
    class: "react",
    icons: (
      <svg
        className="icons"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-11.5 -10.232 23 20.463"
        width="58"
        height="58"
      >
        <circle r="2.05" fill="#61dafb"></circle>
        <g fill="none" stroke="#61dafb">
          <ellipse rx="11" ry="4.2"></ellipse>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
        </g>
      </svg>
    ),
    title: "React",
  },
];
