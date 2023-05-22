// main.js

// 로딩애니

const loader = document.querySelector('div.loader');

setTimeout (() => loader.classList.add('on'), 3000)


/* svg 길이구하기 */

window.addEventListener('load', function(){
  const Layer1 = document.querySelector('#Layer_1');
  let pathes = document.querySelectorAll('path');
  pathes.forEach(function(path){
    let total_length = path.getTotalLength();
    console.log(total_length);
  })

// 원스크롤
const contents = document.querySelectorAll("div#container>div");
const sections = document.querySelectorAll("section");
console.log(contents);

let devHeight = window.innerHeight;

window.addEventListener('resize',() => {
  devHeight = window.innerHeight;
});

// for(let i=0; i<contents.length; i++){
//   contents[i].style.height =  `${devHeight}px`;
// }

// for(let i=0; i<sections.length; i++){
//   sections[i].addEventListener('wheel', e =>{
//     if(e.deltaY < 0){
//       let prev = e.currentTarget.previousElementSibling.offsetTop;
//       activation(prev)
//     }else if(e.deltaY > 0){
//       let next =e.currentTarget.nextElementSibling.offsetTop;
//       activation(next)
//     }
//   })
// }

let activation =(scrTop)=>{
  window.scroll({
    top:scrTop,
    left:0,
    behavior:'smooth'
  });
  for(let i=0; i<sections.length; i++){
    if(scrTop>=i*devHeight && scrTop<(i+1)*devHeight){
      activation(i,sections);
    }
  };
}


// main 텍스트 애니

const bracket = document.querySelectorAll("div.m_txt_ani>span");
console.log(bracket);
const lis = document.querySelectorAll('div.m_txt_ani>ul>li');

const ftxt = document.querySelector("div.m_txt_ani");
console.log(ftxt.innerText);

for(let i=0; i<lis.length; i++){
  lis[i].onfocus = lis[i].onmouseover = function() {
    for(let k=0; k<lis.length; k++){
      lis[k].classList.remove('on');
    }
    lis[i].classList.add('on');
    

  }//onmouseover
  lis[i].onblur = lis[i].onmouseout = function(){
    myAuto = setTimeout(autoBanner,3000);
  }//onmouseout



}


let bnnNum=0;
let lastNum = lis.length;

function autoBanner(){
  bnnNum++;
  if(bnnNum>=lastNum){
    bnnNum=0;
    
  }
  lis[bnnNum].onmouseover();


  // function activation(index,list){
  //   for(let el of lis){
  //     el.classList.remove('on');
  //   }
  // }
  // lis[i].classList.add('on');

  autoBnn = setTimeout(autoBanner, 2000)
}

let autoBnn = setTimeout(autoBanner,2000);

// function activation2(index,list){
//   for(let el of list){
//     el.classList.remove("on", "active");
//   }
//   list[index].classList.add("on", "active");
// }
// for(i=0; i<lis.length; i++){

//   lis[i].classList.add("on");
//   for(j=0; j<lis.length; j++){
//     lis[i].classList.remove("on");
//   }
  
  
// }  

//work 글씨 바뀌게
const workInner = document.querySelector("div.work_inner");
const workTit = workInner.querySelector("h2");
const articles = document.querySelectorAll("article");
console.log(workTit);

for(let el of articles){
  el.addEventListener("mouseenter", e => {
    let tit = e.currentTarget.querySelector("div.txt_box").innerText;
    console.log(tit);
    workTit.innerText = tit;
  //   let img = e.currentTarget.querySelector("div.img");
  //  img.style.filter = 'saturate(10%)';

  });

  el.addEventListener("mouseleave", e => {
    workTit.innerText = "Work";

  });
}

//work 롤링배너





});