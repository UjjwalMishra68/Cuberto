MouseFollower.registerGSAP(gsap);
const loco = () => {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });
}
loco()
const cursor = new MouseFollower();

Shery.makeMagnet(".magnet,.nav-left img", {
});
Shery.hoverWithMediaCircle(".main-headings h1,.page3 h1", {
    videos: ["./0.mp4", "./2.mp4", "./3.mp4"]
})
Shery.imageEffect(".images", {
    style: 4,
    config: { "uColor": { "value": false }, "uSpeed": { "value": 0.6, "range": [0.1, 1], "rangep": [1, 10] }, "uAmplitude": { "value": 1.5, "range": [0, 5] }, "uFrequency": { "value": 4.05, "range": [0, 10] }, "geoVertex": { "range": [1, 64], "value": 32 }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.6332534586906203 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.99, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2], "_gsap": { "id": 15 } }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } },
    gooey: true,
});
gsap.to(".elem", {
    y: "-300%",
    scrollTrigger: {
        trigger: ".scroll-image",
        pin: true,
        scroller: ".main",
        start: "top top",
        end: "bottom bottom",
        endTrigger: "#elem4",
        scrub: 1,
    }
})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: false,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
gsap.to(".circle-video img", {
    rotation: "360",
    ease: Linear.easeNone,
    repeat: -1,
    duration: 10,
});
Shery.makeMagnet(".circle-video")

