// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// Loader Animation
var Loader = document.querySelector('#loader');
var loaderText = document.querySelector('#loader h1');

// Hide loader after a delay
setTimeout(() => {
    Loader.style.top = "-100vh";
}, 4000);

// Project Hover Interaction
var elemContainer = document.querySelector("#projects-wrapper");
var fixedBox = document.querySelector('#fixed-box');

// Display fixed box on project hover
elemContainer.addEventListener("mouseenter",function(){
    fixedBox.style.display = "block";
})
// Hide fixed box on project mouse leave
elemContainer.addEventListener("mouseleave",function(){
    fixedBox.style.display = "none";
})
// Change fixed box background on individual project hover
var elems = document.querySelectorAll('.elem');
elems.forEach(elem => {
    elem.addEventListener("mouseenter",function(){
        let imgURL = elem.getAttribute("img-data");
        fixedBox.style.backgroundImage = `url(${imgURL})`;
    })
});
// Section Highlighting and Image Update in "Our Work" section
var Design = document.querySelector('#Design');
var stick1 = document.querySelector('#s1');
var Project = document.querySelector('#Project');
var stick2 = document.querySelector('#s2');
var Execution = document.querySelector('#Execution');
var stick3 = document.querySelector('#s3');
var topWrap = document.querySelector('#top-wrap');
var page4Img = document.querySelector('#center-right');
var flag = 1;
// Update stick and content on section click
topWrap.addEventListener('click',function(details){
    if(details.target.textContent == "Design"){
        stick1.style.backgroundColor = "#FE350B";
        stick2.style.backgroundColor = "#94908b";
        stick3.style.backgroundColor = "#94908b";
        Design.style.color = "#EFEAE3";
        Project.style.color = "#94908b";
        Execution.style.color = "#94908b";
        let DesignImage = Design.getAttribute("img-data");
        page4Img.style.backgroundImage = `url(${DesignImage})`;
    }
    else if(details.target.textContent == "Project"){
        stick2.style.backgroundColor = "#FE350B";
        stick1.style.backgroundColor = "#94908b";
        stick3.style.backgroundColor = "#94908b";
        Project.style.color = "#EFEAE3";
        Design.style.color = "#94908b";
        Execution.style.color = "#94908b";
        let ProjectImage = Project.getAttribute("img-data");
        page4Img.style.backgroundImage = `url(${ProjectImage})`;
    }
    else if(details.target.textContent == "Execution"){
        stick3.style.backgroundColor = "#FE350B";
        stick2.style.backgroundColor = "#94908b";
        stick1.style.backgroundColor = "#94908b";
        Execution.style.color = "#EFEAE3";
        Project.style.color = "#94908b";
        Design.style.color = "#94908b";
        let ExecutionImage = Execution.getAttribute("img-data");
        page4Img.style.backgroundImage = `url(${ExecutionImage})`;
    }
    flag = 0;
});

if(flag){
    stick1.style.backgroundColor = "#FE350B";
    Design.style.color = "#EFEAE3";
    let DesignImage = Design.getAttribute("img-data");
    page4Img.style.backgroundImage = `url(${DesignImage})`;
}

// Swiper Initialization for "Who We Work With" Section
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

var a = document.querySelector('.WSC');

a.addEventListener('mouseover',function(){
    a.style.color = "#a7a4a0";
});

var menu = document.querySelector('#Menu-main');
var navImg = document.querySelector("nav img"); 
var fulldiv1 = document.querySelector("#full-div1"); 
var fullMain = document.querySelector('#full-scr-main');
var topLine = document.querySelector('#top-line');
var btmLine = document.querySelector('#btm-line');
var menuIcon = document.querySelector('#menu-icon');

var mflag=1;
menu.addEventListener('click',function(){  
    if(mflag){
        navImg.style.opacity = 0;
        fullMain.style.top = "0";
        topLine.style.rotate = "-45deg";
        btmLine.style.rotate = "45deg" ;
        topLine.style.transform = "translateY(1.2vw)";
        btmLine.style.transform = "translateY(-1.2vw)";

        mflag = 0;
    }
    else{
        navImg.style.opacity = 1;
        fullMain.style.top = "-100%";
        topLine.style.rotate = "0deg";
        btmLine.style.rotate = "0deg";
        menuIcon.style.gap = "1.5vw";
        topLine.style.transform = "translateY(1.9vw)";
        btmLine.style.transform = "translateY(-1.9vw)";
        mflag = 1;
    }
})



