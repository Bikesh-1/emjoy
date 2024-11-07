// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Create a GSAP timeline for the scroll animation
const tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page9",
        start: "top 0%",
        end: "bottom 0%",
        scrub: 2,
        pin: true,
        markers: true // Optional: shows markers for debugging
    }
});

// Animation for paragraphs
tl1.from("#page9-middle p", { 
    scale: 0, 
    opacity: 0, 
    duration: 1, 
    y: 100, 
    stagger: 0.3 // Stagger for sequential animation
});

// Refresh ScrollTrigger to ensure the layout updates correctly
ScrollTrigger.refresh();
