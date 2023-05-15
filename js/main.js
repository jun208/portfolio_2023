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
})

// main 텍스트 애니

const bracket = document.querySelectorAll("div.m_txt_ani>span");
console.log(bracket);
const lis = document.querySelectorAll('div.m_txt_ani>ul>li');
console.log(lis);

for(let i=0; i<lis.length; i++){
  lis[i].onfocus = lis[i].onmouseover = function() {
    for(let k=0; k<lis.length; k++){
      lis[k].classList.remove('on');
    }
    lis[i].classList.add('on');
    // clearTimeout(myAuto);

  }//onmouseover
  lis[i].onblur = lis[i].onmouseout = function(){
    myAuto = setTimeout(autoBanner,2000);
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

  autoBnn = setTimeout(autoBanner, 1500)
}

let autoBnn = setTimeout(autoBanner,1500);

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



