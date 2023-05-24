const header = document.querySelector("header");
const character = document.querySelector("div.rabbit_box")
const emoji = document.querySelector("div.emoji_box")
window.addEventListener('scroll',()=>{
  let scroll = document.querySelector("html").scrollTop;
  // let minusScroll = `${-scroll}`;
  console.log(scroll);
  // console.log(minusScroll)

  // slideMove.style.top  = `${mainHeight}+${minusScroll}px`

  if(scroll==0){
    character.classList.remove("on")
  }else{
    character.classList.add("on");
  }
  if(scroll>=700){
    header.classList.add("on");
  }else{
    header.classList.remove("on");
  }

})

// 

const links = document.querySelectorAll("div.work_link>ul>li>a")

links[0].addEventListener("click", e => {
  e.preventDefault();
  emoji.style.display ="none";
  character.style.display = "block";

})


links[1].addEventListener("click", e => {
  e.preventDefault();
  emoji.style.display ="block";
  character.style.display = "none";
})


