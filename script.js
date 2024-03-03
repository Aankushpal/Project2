function loco() {
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

loco()

function valueSetter() {

  gsap.set("#nav h4", {  y: "-110%", opacity: 0 })
  gsap.set("#page1 .parent .chlid", {y: "100%" })
  gsap.set("#page1 .row .img", {opacity: 0 })

  document.querySelectorAll("#Visual>g").forEach(function(e) {
    var character = e.childNodes[1].childNodes[1]

    character.style.strokeDasharray = character.getTotalLength() + 'px'
    character.style.strokeDashoffset = character.getTotalLength() + 'px'
  })

}

function revealtospan() {
  var reveal = document.querySelectorAll(".reveal")

  reveal.forEach(function (elem) {

    var parent = document.createElement("span")
    var child = document.createElement("span")

    parent.classList.add("parent")
    child.classList.add("child")

    child.innerHTML = elem.innerHTML
    parent.appendChild(child)

    elem.innerHTML = ""
    elem.appendChild(parent)
  })
}

function loader() {
  var tl = gsap.timeline()
  tl.from("#loader .child span", {
    x: 100,
    opacity: 0,
    stagger: .3,
    delay: 1,
    duration: 1,
    ease: Power3.easeInOut
  })

  tl.to("#loader .parent .child", {
    y: "-105%",
    duration: .5,
    ease: Power3.easeInOut
  })


  tl.to("#in1", {
    height: 0,
    duration: 2,
    ease: Expo.easeInOut
  })

  tl.to("#in2", {
    height: "100%",
    duration: 1.5,
    delay: -2,
    ease: Expo.easeInOut
  })

  tl.to("#in3", {
    height: "100%",
    duration: 1.5,
    delay: -1.8,
    ease: Expo.easeInOut
  })

  tl.to("#loader", {
    height: 0,
    duration: 2,
    delay: -2,
    ease: Expo.easeInOut,
    onComplete: function() {
      animatehome()
    }
  })

}

function animatesvg() {

  gsap.to("#Visual>g>g>path , #Visual>g>g>polyline", {
    strokeDashoffset: 0,
    duration: 2,
    ease: Expo.easeInOut
  })
}

function animatehome() {

  var tl = gsap.timeline()

  tl.to("#nav h4", {
    y: 0,
    opacity: 1,
    stagger: .13,
    ease: Expo.easeInOut,
    onComplete: function() {
      animatesvg()
    }
  })
}

revealtospan()  
valueSetter()
loader() 


var page2 = document.querySelector("#page2")
var a1 = document.querySelector("#inr1 #a1")
var a2 = document.querySelector("#inr1 #a2")
var c1 = document.querySelector("#inr2 #c1")
var b1 = document.querySelector("#inr3 #b1")
var b2 = document.querySelector("#inr3 #b2")
var d1 = document.querySelector("#inr4 #d1")
var d2 = document.querySelector("#inr4 #d2")

var krsr = document.querySelector("#cursor")

a1.addEventListener("mousemove", function(dets){
  krsr.style.opacity = 1
  krsr.style.transform = `translate( ${dets.x - 400}px, ${dets.y - 50}px)`
  page2.style.backgroundColor = " rgba(145, 174, 204, 0.664)"
  a1.style.filter = "grayscale()"
})

a1.addEventListener("mouseleave", function(){
  krsr.style.opacity = 0
  page2.style.backgroundColor = "#f1f1f1"
  a1.style.filter = "grayscale(0)"
})

a2.addEventListener("mousemove", function(dets){
  krsr.style.opacity = 1
  krsr.style.transform = `translate( ${dets.x - 400}px, ${dets.y - 50}px)`
  page2.style.backgroundColor = " rgba(240, 128, 128, 0.808)"
  a2.style.filter = "grayscale()"
})

a2.addEventListener("mouseleave", function(){
  krsr.style.opacity = 0
  page2.style.backgroundColor = "#f1f1f1"
  a2.style.filter = "grayscale(0)"
})

c1.addEventListener("mousemove", function(dets){
  krsr.style.opacity = 1
  krsr.style.transform = `translate( ${dets.x - 400}px, ${dets.y - 50}px)`
  page2.style.backgroundColor = "rgba(192, 148, 119, 0.822)"
  c1.style.filter = "grayscale()"
})

c1.addEventListener("mouseleave", function(){
  krsr.style.opacity = 0
  page2.style.backgroundColor = "#f1f1f1"
  c1.style.filter = "grayscale(0)"
})

b1.addEventListener("mousemove", function(dets){
  krsr.style.opacity = 1
  krsr.style.transform = `translate( ${dets.x - 400}px, ${dets.y - 50}px)`
  page2.style.backgroundColor = " rgba(240, 128, 128, 0.808)"
  b1.style.filter = "grayscale()"
})

b1.addEventListener("mouseleave", function(){
  krsr.style.opacity = 0
  page2.style.backgroundColor = "#f1f1f1"
  b1.style.filter = "grayscale(0)"
})

b2.addEventListener("mousemove", function(dets){
  krsr.style.opacity = 1
  krsr.style.transform = `translate( ${dets.x - 400}px, ${dets.y - 50}px)`
  page2.style.backgroundColor = "rgba(204, 154, 62, 0.753)"
  b2.style.filter = "grayscale()"
})

b2.addEventListener("mouseleave", function(){
  krsr.style.opacity = 0
  page2.style.backgroundColor = "#f1f1f1"
  b2.style.filter = "grayscale(0)"
})

d1.addEventListener("mousemove", function(dets){
  krsr.style.opacity = 1
  krsr.style.transform = `translate( ${dets.x - 400}px, ${dets.y - 50}px)`
  page2.style.backgroundColor = "rgba(4, 81, 95, 0.664)"
  d1.style.filter = "grayscale()"
})

d1.addEventListener("mouseleave", function(){
  krsr.style.opacity = 0
  page2.style.backgroundColor = "#f1f1f1"
  d1.style.filter = "grayscale(0)"
})

d2.addEventListener("mousemove", function(dets){
  krsr.style.opacity = 1
  krsr.style.transform = `translate( ${dets.x - 400}px, ${dets.y - 50}px)`
  page2.style.backgroundColor = "lightyellow"
  d2.style.filter = "grayscale()"
})

d2.addEventListener("mouseleave", function(){
  krsr.style.opacity = 0
  page2.style.backgroundColor = "#f1f1f1"
  d2.style.filter = "grayscale(0)"
})