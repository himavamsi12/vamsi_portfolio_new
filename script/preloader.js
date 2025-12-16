import gsap from "gsap";
import CustomEase from "gsap/CustomEase";

gsap.registerPlugin(CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

document.addEventListener("DOMContentLoaded", () => {
  const tl = gsap.timeline({
    delay: 0.3,
    defaults: { ease: "hop" }
  });

  const loader = document.querySelector(".loader");
  const counts = document.querySelectorAll(".count");

  // Rolling Numbers
  counts.forEach((count, index) => {
    const digits = count.querySelectorAll(".digit h1");
    tl.to(digits, { y: "0%", duration: 1, stagger: 0.075 }, index * 1);
    tl.to(digits, { y: "-100%", duration: 1, stagger: 0.075 }, index * 1 + 1);
  });

  // Spinner Fade
  tl.to(".spinner", { opacity: 0, duration: 0.3 });

  // Word Reveal
  tl.to(".word h1", { y: "0%", duration: 1 }, "<");

  // Divider Expansion
  tl.to(".divider", {
    scaleY: "100%",
    duration: 1,
    onComplete: () =>
      gsap.to(".divider", { opacity: 0, duration: 0.3, delay: 0.3 })
  });

  // Word Exit
  tl.to("#word-1 h1", { y: "100%", duration: 1, delay: 0.3 });
  tl.to("#word-2 h1", { y: "-100%", duration: 1 }, "<");

  // Block Wipe
  tl.to(
    ".block",
    {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
      duration: 1,
      stagger: 0.1
    },
    "<"
  );

  // Remove Loader
  tl.to(loader, {
    opacity: 0,
    duration: 0.6,
    pointerEvents: "none",
    onComplete: () => loader.remove()
  });
});
