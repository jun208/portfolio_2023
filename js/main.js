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
//work, info 버튼 클릭시 네이게이션 나오게 
const workBtn = document.querySelector("header ul>li:first-of-type>a")
console.log(workBtn)
const infoBtn = document.querySelector("header ul>li:last-of-type>a")
const navigation = document.querySelectorAll("nav>aside")

workBtn.addEventListener('click', () => {
 navigation[0].classList.add("on");
})

infoBtn.addEventListener('click', () => {
  navigation[1].classList.add("on");
})

//navigation 'x'버튼 클릭시 네이게이션 사라지게
const navCloseBtn = document.querySelectorAll("aside>div>button");

navCloseBtn[0].addEventListener('click', () => {
  navigation[0].classList.remove("on");
})

navCloseBtn[1].addEventListener('click', () => {
  navigation[1].classList.remove("on");
})

// 원스크롤
const contents = document.querySelectorAll("div#container>div");
const sections = document.querySelectorAll("section");
console.log(contents);
const header = document.querySelector("header");
console.log(header)
const footer = document.querySelector("footer");
let devHeight = window.innerHeight;

window.addEventListener('resize',() => {
  devHeight = window.innerHeight;
});

for(let i=0; i<contents.length; i++){
  contents[i].style.height =  `${devHeight}px`;
  if(contents[i] == contents[3]){
  contents[3].style.height = `${devHeight - footer.offsetHeight + 1 }px`;
}
}



let activation =(scrTop)=>{
  window.scroll({
    top:scrTop,
    left:0,
    behavior:'smooth'
  });

}

// let secWhite = bannerNum => {
//   if(contents[bannerNum].classList.contains("black")){
//     header.classList.add("white");
//   }else{
//     header.classList.remove("white");
//   }
// }

// header 배경 검정이면  글씨 흰색으로

window.addEventListener('scroll', () =>{
  let scroll= document.querySelector('html').scrollTop;

  if(scroll > 680 ){
    header.classList.add("white")
  }else{
    header.classList.remove("white");
  }
  
})


for(let i=0; i<contents.length; i++){
  contents[i].addEventListener('wheel', e =>{
    if(e.deltaY <  0){ //scroll up
      let prev = e.currentTarget.previousElementSibling.offsetTop;
      console.log(e.currentTarget);
      activation(prev);
    }else if(e.deltaY > 0){ //scroll down
      let next = e.currentTarget.nextElementSibling.offsetTop;
      console.log(next);
      activation(next);
    };

  })
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






//work 롤링글씨

let roller = document.querySelector(".rolling");
roller.classList.add("original")

let clone = roller.cloneNode(true);
clone.classList.add("clone");
document.querySelector("div.work_wrap").appendChild(clone);
console.log(clone);

document.querySelector(".original").style.left = '0px';
document.querySelector(".clone").style.left = roller.offsetWidth+'px';

let rollerWidth = roller.offsetWidth;
let betweenDistance = 1; //이동 크기

//롤링시작

function startRoller(){
  originalID = window.setInterval(betweenRollCallback, parseInt(1000/100), betweenDistance, document.querySelector(".original"));
  cloneID = window.setInterval(betweenRollCallback, parseInt(1000/100), betweenDistance, document.querySelector(".clone"));

}

//롤링정지

function stopRoller(){
  clearInterval(originalID);
  clearInterval(cloneID);
}

//마우스 오버 롤링 멈춤 , 마우스아웃 롤링 재시작
document.querySelector(".original").addEventListener("mouseover", () => {stopRoller()})
document.querySelector(".clone").addEventListener("mouseover", () => {stopRoller()})

document.querySelector(".original").addEventListener("mouseleave", () => {startRoller()})
document.querySelector(".clone").addEventListener("mouseleave", () => {startRoller()})

//인터벌 애니메이션
function betweenRollCallback(d, roller){
  let left = parseInt(roller.style.left);
  roller.style.left = (left - d) + 'px'; //이동

//조건부 위치 리셋
if(rollerWidth + (left - d) <= 0){
  roller.style.left= rollerWidth + 'px';
   }
  }
  startRoller(); //롤링 초기화


  //work h2 글씨 바뀜
const workInner = document.querySelector("div.work_inner");
const workTit = workInner.querySelector("h2");
const articles = document.querySelectorAll("article");
const workImg = document.querySelector("div.work_img_box");
console.log(workImg);
let workImgBoxCss = workImg.style;

for(let el of articles){
  el.addEventListener("mouseenter", e => {
    let tit = e.currentTarget.querySelector("h3").innerText;
    console.log(e.currentTarget);
    workTit.innerText = tit;
  //   let img = e.currentTarget.querySelector("div.img");
  //  img.style.filter = 'saturate(10%)';
    // let imgSrc= e.currentTarget.querySelector("img").getAttribute("src") ;
    // console.log(imgSrc);
    // workImg.setAttribute("src",`${imgSrc}`);


    //롤링배너 마우스오버시 img_box안에 해당 article 이미지 보이게, 마우스아웃시 사라지게 

    let imgBg = window.getComputedStyle(e.currentTarget.querySelector("div.img")).getPropertyValue("background");
    let imgW = window.getComputedStyle(e.currentTarget.querySelector("div.img")).getPropertyValue("width");
    let imgH = window.getComputedStyle(e.currentTarget.querySelector("div.img")).getPropertyValue("height");


    workImgBoxCss.setProperty("width", imgW);
    workImgBoxCss.setProperty("height", imgH);
    workImgBoxCss.setProperty("background", imgBg)
    // console.log(workImg);
  });

  el.addEventListener("mouseleave", e => {
    workTit.innerText = "Work";
    workImgBoxCss.setProperty("width", '');
    workImgBoxCss.setProperty("height", '');
    workImgBoxCss.setProperty("background", '')

  });
}







});