document.addEventListener("DOMContentLoaded",function(){
// Slide in from the left
gsap.from("#floatingImage", {
    x: "-100vw",        
    duration: 1.5,      
    ease: "power2.out", 
    onComplete: Floating 
});

// Floating 
function Floating() {
    gsap.to("#floatingImage", {
        y: 20,            
        duration: 2,     
        ease: "sine.inOut",
        yoyo: true,       
        repeat: -1        
    });
}
})
