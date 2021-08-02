// // Page Manager
let onOtherProjects=false
document.querySelector('.project-list').addEventListener('mouseenter',()=>onOtherProjects=true)
document.querySelector('.project-list').addEventListener('mouseleave',()=>onOtherProjects=false)
let manager={
    element:document.querySelector('.page-manager'),
    indicator:document.querySelector('#o-page').getElementsByTagName('div'),
    pages:[],
    current:0,
    next:()=>{
        manager.indicator[manager.current].classList.remove('current-page')  
        if(manager.pages.length>manager.current+1) manager.current+=1              
        manager.indicator[manager.current].classList.add('current-page')      
        return manager.pages[manager.current]
    },
    previous:()=>{
        manager.indicator[manager.current].classList.remove('current-page')
        if(0<=manager.current-1) manager.current-=1  
        manager.indicator[manager.current].classList.add('current-page')       
        return manager.pages[manager.current]
    }
};
for (let i = 0; i < manager.element.children.length; i++) {
    const element = manager.element.children[i];
    manager.pages.push(element.id)
}   

window.addEventListener("wheel",(e)=>{
    if (onOtherProjects) return
    if (manager.element.style.opacity!='1') return
    if (e.deltaY>0){ //SCROLL UP        
        location.href=`#${manager.next()}`
    }else{ //SCROLL DOWN
        location.href=`#${manager.previous()}`
    }
})

window.onload=()=>{
    if (location.href!=location.origin+"/") location.href=location.origin
}


// // Featured Project Control

let featured={
    btns: document.querySelector('.show-btns').getElementsByTagName('button'),
    indicator:document.querySelector('.show-btns').getElementsByTagName('div'),
    showcase: document.querySelector('.show-case').getElementsByClassName('show'),
    current: 0,
    next:()=>{
        if (featured.current+1 > featured.indicator.length) return
        featured.indicator[featured.current].classList.remove('current-box')
        featured.showcase[featured.current].classList.remove('current-show')        
        featured.current+=1
        featured.indicator[featured.current].classList.add('current-box')
        featured.showcase[featured.current].classList.add('current-show')        

    },
    previous:()=>{
        if (featured.current-1 < 0) return
        featured.indicator[featured.current].classList.remove('current-box')
        featured.showcase[featured.current].classList.remove('current-show')        

        featured.current-=1
        featured.indicator[featured.current].classList.add('current-box')
        featured.showcase[featured.current].classList.add('current-show')        
    }
}
featured.btns[0].addEventListener('click',featured.previous)
featured.btns[1].addEventListener('click',featured.next)