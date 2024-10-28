let landingPag=document.querySelector('.landing-page');
let toggelSt=document.querySelector('.toggle-settings');
let settingsbox=document.querySelector('.settings-box');
let gear=document.querySelector('.settings-box i');
let colorsList=document.querySelectorAll('.colors-list li');
let mainColor= localStorage.getItem("color-option");
let randomBg=document.querySelectorAll('.random-backgrounds span');
let setIntervalId;
let random=true;
let localstorageItem=localStorage.getItem("bg-option");
let buletSpan = document.querySelectorAll(".bullets-option span");
let bulletesContainer=document.querySelector('.nav-bullets');
if(localstorageItem!==null){


if(localstorageItem=="true"){
    random=true
}else{
    random=false;
    // clearInterval(setIntervalId)
}
document.querySelectorAll('.random-backgrounds span').forEach(
    ele=>{
        ele.classList.remove("active")
    });
    if(localstorageItem === "true"){
        document.querySelector(".yes").classList.add("active")
    }else{
        document.querySelector(".no").classList.add("active") 
    }
}

if(mainColor!==null){
    document.documentElement.style.setProperty('--main-color',mainColor);
    colorsList.forEach(ele=>{
        ele.classList.remove('active');
        if(ele.dataset.color==mainColor){
            ele.classList.add('active')
        }
        
    })

};
let bulletOption=localStorage.getItem("bullet-option");
console.log(bulletOption)


colorsList.forEach(li=>{
li.onclick=function(e){
    document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
    localStorage.setItem("color-option",e.target.dataset.color);

    handleActive(e)
    }
}
);

if(bulletOption!==null){
    buletSpan.forEach(span=>{
        span.classList.remove("active");})
        if(bulletOption==="block"){
    bulletesContainer.style.display="block";
    document.querySelector('.bullets-option .yes').classList.add('active');
    console.log(document.querySelector('.bullets-option .yes'))
        }else{
            console.log(document.querySelector('.bullets-option .no'))
    bulletesContainer.style.display="none";
    document.querySelector('.bullets-option .no').classList.add('active');
        }
    }
    

randomBg.forEach(span=>{
    span.onclick=function(span){

    
        span.target.parentElement.querySelectorAll('.active').forEach(ele=>{
            ele.classList.remove('active');
            
        })
        span.target.classList.add('active');

        if(span.target.dataset.background==="yes"){
            random=true;
            bgOption()
            localStorage.setItem("bg-option","true");

        }else{
            random=false;
           clearInterval(setIntervalId) ;
           localStorage.setItem("bg-option","false");
        }

        }
    }
    );





toggelSt.onclick = function(){
    if(settingsbox.classList.contains("open"))
    {
        settingsbox.classList.remove("open")
        gear.classList.remove('fa-spin');
    }
    else{
        settingsbox.classList.add("open");
        gear.classList.add('fa-spin');
    }
    };
    
    function bgOption(){
        if(random){
 setIntervalId=setInterval(function () {
    let random = Math.floor(Math.random()*6);
    if(random===0){
        random===1;
    }else{
    landingPag.style.backgroundImage=`url(imgs/0${random}.jpg)`;
}
}, 1000);
        }

    }
    bgOption();
    let ourSkills=document.querySelector(".skills");
    window.onscroll=function(){
        let skillsOffsetTop =ourSkills.offsetTop;
        let outerHight=ourSkills.offsetHeight;
        let windowhight=this.innerHeight;
       let windowScrollTop=this.pageYOffset;
       if (windowScrollTop>(skillsOffsetTop+outerHight-windowhight)){
        let allSkills=document.querySelectorAll('.skill-box .skill-progress span');
        console.log(allSkills)
        allSkills.forEach(ele=>{
            ele.style.width=ele.dataset.progress;
        })
       }

    };
    let gallary= document.querySelectorAll('.images-box img');
   gallary.forEach(
    e=>{
       e.addEventListener("click",(img)=>{
        let overlay=document.createElement('div');
        overlay.className="popup-overlay";
        document.body.appendChild(overlay);
        let imgBox=document.createElement('div');
        imgBox.className='popup-box';
        if(e.alt !== null){
            let imgHeading =document.createElement('h3');
            let hText =document.createTextNode(e.alt);
            imgHeading.appendChild(hText);
            console.log(imgHeading)
            imgBox.appendChild(imgHeading)
        }
        let popupImg=document.createElement("img");
        popupImg.src=e.src;
        console.log(e.sr)
        imgBox.appendChild(popupImg);
        overlay.appendChild(imgBox);
        let closeBtn=document.createElement('span');
        closeBtn.className="close-button"
        let closeBtnText=document.createTextNode("x")
        closeBtn.appendChild(closeBtnText);
        imgBox.appendChild(closeBtn)
        closeBtn.addEventListener("click",function(){
            overlay.remove()
        })
        
       }) 
    }
   );
   let allBullets= document.querySelectorAll('.nav-bullets .bullet');
   let linkes =document.querySelectorAll('.links-container a');
  function autScroll(elments){
    elments.forEach((ele)=>{
        ele.addEventListener('click', function(e){
            document.querySelector(e.target.dataset.section).scrollIntoView(
                { behavior: "smooth", block: "end", inline: "nearest" }
            )
        })
       })
  }
  autScroll(allBullets)
  autScroll(linkes);
  function handleActive(ev){
    ev.target.parentElement.querySelectorAll('.active').forEach(element=>{
        element.classList.remove('active');
    });
    ev.target.classList.add('active');
  }


buletSpan.forEach(span=>{
    span.addEventListener("click",function(e){
        if(span.dataset.display==="show"){
            bulletesContainer.style.display='block';
            localStorage.setItem("bullet-option","block")
        }else{
            bulletesContainer.style.display='none';
            localStorage.setItem("bullet-option","none");
        }
        handleActive(e) 
    })
})
document.querySelector('.reset-options').onclick=function(){
    localStorage.clear();
    window.location.reload()
}
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {
  e.stopPropagation();
  this.classList.toggle("menu-active");
  tLinks.classList.toggle("open");

};
document.addEventListener("click", (e) => {

  if (e.target !== toggleBtn && e.target !== tLinks) {
    if (tLinks.classList.contains("open")) {
      toggleBtn.classList.toggle("menu-active");
      tLinks.classList.toggle("open");

    }

  }

}); 
tLinks.onclick = function (e) {
  e.stopPropagation();
}