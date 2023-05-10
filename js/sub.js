// sub.js

const slideMove = document.querySelector("div.slide_move")
const video = document.querySelector("video");
const header = document.querySelector("header");

const main = document.querySelector("div.slide_fix");
console.log(main)

let mainHeight = main.clientHeight;
console.log(mainHeight)

// let devHeight = window.innerHeight;
let lastScrollTop=0; //마지막 스크롤값

window.addEventListener('scroll',()=>{
  let scroll = document.querySelector("html").scrollTop;
  let minusScroll = `${-scroll}`;
  console.log(scroll);
  // console.log(minusScroll)

  // slideMove.style.top  = `${mainHeight}+${minusScroll}px`

  // if(scroll==0){
  //   video.classList.remove("on")
  // }else{
  //   video.classList.add("on")
  // }
  if(scroll>=700){
    header.classList.add("on");
  }else{
    header.classList.remove("on");
  }

})