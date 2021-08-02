let nav=document.querySelector('.navbar')
let overlay=document.querySelector('.overlay')

let logo=document.querySelector('#logo')
let logo_shadow=document.querySelector('.loading_shadow')

let a1=document.querySelector('.a1'),
a2=document.querySelector('.a2'),
a3=document.querySelector('.a3'),
a4=document.querySelector('.a4')


//Loading Complete Animation
    //Timeline
var done_tl = anime.timeline({
    easing:'easeInQuad',
    duration: 1000,
    autoplay:false,
    begin:()=>{
        logo_shadow.remove()
    }
});
    //Adding Elements
done_tl
.add({
  targets: '.a1',
  keyframes:[
    {translateX: -1*(a1.getBoundingClientRect().left-logo.getBoundingClientRect().left)}
  ],
  complete:(anim)=>{
      anim.animatables[0].target.remove()
  }
},0)
.add({
  targets: '.a2',
  keyframes:[
    {translateX: -1*(a2.getBoundingClientRect().left-logo.getBoundingClientRect().left)}
  ],
  complete:(anim)=>{
      anim.animatables[0].target.remove()
  }
},0)
.add({
  targets: '.a3',
  keyframes:[
    {translateX: -1*(a3.getBoundingClientRect().left-logo.getBoundingClientRect().left)}
  ],
  complete:(anim)=>{
      anim.animatables[0].target.remove()
  }
},0)
.add({
  targets: '.a4',
  keyframes:[
    {translateX: -1*(a4.getBoundingClientRect().left-logo.getBoundingClientRect().left)}
  ],
  complete:(anim)=>{
      anim.animatables[0].target.remove()
  }
},0)


// Loading Bounce Animation
    //Animation Constants
const loading_animation={
    duration:800,
    object_delay:`-=700`,
    translateY:[
        {value: -50, easing:'easeOutQuad'},
        {value: 0, easing: 'easeInQuad',delay:100}
    ]
}
    //Timeline
var loading_tl = anime.timeline({
    duration: loading_animation.duration,
    // loop:3,
    loop:0,
    complete:()=>{
        done_tl.add({
            targets: '#logo',
            rotateY: '2880deg',
            translateY: '-50vh',
            complete:(anim)=>{
                nav.style.visibility='visible'
                nav.style.top='0'
                overlay.style.visibility='visible'
                overlay.style.bottom='0'
                overlay.style.opacity='1'
                manager.element.style.visibility='visible'
                manager.element.style.bottom='0'
                manager.element.style.opacity='1'
                anim.animatables[0].target.parentNode.parentNode.remove()
            }
        })
        done_tl.play()
    }
});
    //Adding Elements
loading_tl
.add({
  targets: '.a1',
  translateY:loading_animation.translateY
})
.add({
  targets: '.a2',
  translateY:loading_animation.translateY
},loading_animation.object_delay)
.add({
  targets: '#logo',
  translateY:loading_animation.translateY
},loading_animation.object_delay)
.add({
  targets: '.a3',
  translateY:loading_animation.translateY
},loading_animation.object_delay)
.add({
    targets: '.a4',
    translateY:loading_animation.translateY
},loading_animation.object_delay);

