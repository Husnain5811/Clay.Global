gsap.from('.video',{
    scale:0,
    duration:2,
    scrollTrigger :{
        trigger:".video",
        scroller:"body",
        top:"top 90%",
        end:"top 40%",
        scrub:true,
    }
    
})



function Child(){
   var list = document.querySelectorAll(".list")

   list.forEach(function(val){
      val.addEventListener("mouseenter" , function(){
         val.childNodes[3].style.opacity = "1";
         
      })
      val.addEventListener("mouseleave" , function(){
         val.childNodes[3].style.opacity = "0";
      })
   })
}

Child();
// ..................
function gethover (){
   var video = document.querySelector('.left video')
   var act = document.querySelector('.active')

   video.addEventListener('mouseenter' , function(){
      video.play();
     act.style.opacity = '1'
   })
   video.addEventListener('mouseleave' , function(){
      video.pause();
     act.style.opacity = '0'
   })
   
}
gethover();

// ................

function Enter(){

   var video = document.querySelector('.enter video')
   var second = document.querySelector(' .right .second')
   
   
   video.addEventListener('mouseenter' , function(){
      video.play();
      second.style.opacity = '1'
   })
   video.addEventListener('mouseleave' , function(){
      video.pause();
      second.style.opacity = '0'
   })
}
Enter();
// ..............

function video4(){
   var video = document.querySelector('.work video')
   var hover = document.querySelector('.text')
   var show = document.querySelector('.show')
   
   video.addEventListener('mousemove' , function(dets){
      hover.style.left = dets.x+"px"
      hover.style.top = dets.y+"px"
      hover.style.opacity = '1'
      show.style.opacity = '1'
   })
   video.addEventListener('mouseleave' , function(dets){
      hover.style.opacity = '0'
   })
   video.addEventListener('mouseleave' , function(){
      show.style.opacity = '0'
   })
   
   video.addEventListener('mouseenter' , function(){
      video.play();
   })
   video.addEventListener('mouseleave' , function(){
      video.pause();
   })
   
}
video4();


// ............................
function Even(){
   var video = document.querySelector('.even video')
   var odd = document.querySelector('.odd')
   
   video.addEventListener('mouseenter' , function(){
      video.play();
      odd.style.opacity = "1"
   })
   video.addEventListener('mouseleave' , function(){
      video.pause();
      odd.style.opacity = "0"
   })
}

Even();



var video = document.querySelector('.jun video')
var feb = document.querySelector('.feb')

video.addEventListener('mouseenter' , function(){
   video.play();
   feb.style.opacity = '1'
})
video.addEventListener('mouseleave' , function(){
   video.pause();
   feb.style.opacity = '0'
})

// ...................

gsap.from(".article", {
   scale:0,
   duration:1,
   y:-400,
   scrollTrigger :{
       trigger:".article",
       scroller:"body",
       top:"top 90%",
       end:"top 40%",
       scrub:true,
   }
})



// ...........................

const scroll = new LocomotiveScroll({
   el: document.querySelector('.con'),
   smooth: true
});



