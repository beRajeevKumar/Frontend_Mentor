const tl = gsap.timeline()
tl.from(".logo", {
    y: -30,
    delay: 1,
    duration: 1,
    opacity: 0
})
tl.from("div a", {
    y: -30,
    delay: 1,
    duration: 1,
    opacity: 0,
    stagger: 1
})

