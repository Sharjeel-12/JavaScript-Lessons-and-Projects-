import "./style.css";
import GameImg from "./rock-paper-scissors.png";
import { greeting } from "./greeting.js";

console.log(greeting);

let imgContainer=document.createElement("div");
imgContainer.setAttribute("id","imgContainer");

let img=document.createElement("img");
img.src=GameImg;

img.style.width="100%"
img.style.height="100%"


imgContainer.appendChild(img);
document.body.appendChild(imgContainer);