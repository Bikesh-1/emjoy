const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

document.querySelector('#page1').style.position = 'fixed';

scroll.on('scroll', (position) => {
    const svg = document.querySelector("#page3 #brand-bottom #brand-bottom-left #svg");
    
    const rotation = 150 - (position.scroll.y * 0.1);


    if (rotation >= 0) {
        svg.style.transform = `rotateY(${rotation}deg)`;
        svg.style.position = "fixed"; 
    }
});


scroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
        return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


const tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#main", 
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true,
        ease: 'power1.inOut'
    }
});

tl.from("#page4 #top p:nth-child(1)", { scale: 0, opacity: 0, duration: 1, x: -100 })
  .from("#page4 #top p:nth-child(2)", { scale: 0, opacity: 0, duration: 1, x: -100 })
  .from("#page4 #top p:nth-child(3)", { scale: 0, opacity: 0, duration: 1, x: -100 })
  .from("#page4 #top p:nth-child(4)", { scale: 0, opacity: 0, duration: 1, x: -100 })
  .from("#page4 #top p:nth-child(5)", { scale: 0, opacity: 0, duration: 1, x: -100 })
  .from("#page4 #bottom p:nth-child(1)", { scale: 0, opacity: 0, duration: 1, y: 100 })
  .from("#page4 #bottom p:nth-child(2)", { scale: 0, opacity: 0, duration: 1, y: 100 })
  .from("#page4 #bottom p:nth-child(3)", { scale: 0, opacity: 0, duration: 1, y: 100 })
  .from("#page4 #bottom p:nth-child(4)", { scale: 0, opacity: 0, duration: 1, y: 100 })
  .from("#page4 #bottom p:nth-child(5)", { scale: 0, opacity: 0, duration: 1, y: 100 });

ScrollTrigger.addEventListener("refresh", () => scroll.update());
ScrollTrigger.refresh();

const videoTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: "#page6 video",
        scroller: "#main",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        // markers: true
    }
});

videoTimeline.to("#pages video", {
    x: "50%",
    y: "100%",
    duration: 1,
    ease: "power1.inOut",
});

gsap.from("#pages #page7 #txt-7", { 
    y: 100,
    opacity: 0, 
    duration: 3, 
    // delay: 5,
    scrollTrigger: {
        trigger: "#pages #page7",
        scroller: "#main",
        start: "top 20%",
        end: "top 60%",
        pin: true,  
        // scrub: true,
        // markers: true
    }
});

const tlPage9 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page9",
        scroller: "#main", 
        markers: true,
        start: "top 0%",
        end: "bottom 0%",
        scrub: 1,
        pin: true,
        ease: 'linear'
    }
});

tlPage9.from("#page9 #page9-middle1 p:nth-child(1)", { scale: 0, opacity: 0, duration: 2, y: 100, stagger: 0.6 })
       .from("#page9 #page9-middle1 p:nth-child(2)", { scale: 0, opacity: 0, duration: 2, y: 100, stagger: 0.6 })
       .from("#page9 #page9-middle2 p:nth-child(1)", { scale: 0, opacity: 0, duration: 2, y: 100, stagger: 0.6 })
       .from("#page9 #page9-middle2 p:nth-child(2)", { scale: 0, opacity: 0, duration: 2, y: 100, stagger: 0.6 })
       .from("#page9 #page9-middle2 p:nth-child(3)", { scale: 0, opacity: 0, duration: 2, y: 100, stagger: 0.6 })
       .from("#page9 #page9-middle3 p:nth-child(1)", { scale: 0, opacity: 0, duration: 2, y: 100, stagger: 0.6 })
       .from("#page9 #page9-middle3 p:nth-child(2)", { scale: 0, opacity: 0, duration: 2, y: 100, stagger: 0.6 })
       .to("#page9 #page9-middle1 p:nth-child(1)", { scale: 1, opacity: 1, duration: 2, y: 0, stagger: 0.6 })
       .to("#page9 #page9-middle1 p:nth-child(2)", { scale: 1, opacity: 1, duration: 2, y: 0, stagger: 0.6 })
       .to("#page9 #page9-middle2 p:nth-child(1)", { scale: 1, opacity: 1, duration: 2, y: 0, stagger: 0.6 })
       .to("#page9 #page9-middle2 p:nth-child(2)", { scale: 1, opacity: 1, duration: 2, y: 0, stagger: 0.6 })
       .to("#page9 #page9-middle2 p:nth-child(3)", { scale: 1, opacity: 1, duration: 2, y: 0, stagger: 0.6 })
       .to("#page9 #page9-middle3 p:nth-child(1)", { scale: 1, opacity: 1, duration: 2, y: 0, stagger: 0.6 })
       .to("#page9 #page9-middle3 p:nth-child(2)", { scale: 1, opacity: 1, duration: 2, y: 0, stagger: 0.6 })
       

ScrollTrigger.refresh();

