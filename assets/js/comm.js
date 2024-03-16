// wave, bounce effect
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(selector, random(4.5, 6.5), {
    y: size,
    scale: 1.1,
    repeat: -1, // -1 무한반복
    yoyo: true, // 애니메이션 되돌아오기(설정안할 시 끊김)
    ease: Power1.easeInOut, // 타이밍함수
    delay: random(0, delay), // 지연시간
  });
}
floatingObject(".wave_wrap", 0, 40);
floatingObject(".cir-wrap", 0, 60);

function bouncingBall(selector, delay) {
  gsap.to(selector, random(2.5, 4.5), {
    scaleY: 0.9, // 추가: 작아지는 효과
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}

// bouncingBall(".cir-wrap", 0);
bouncingBall(".bounce_cir1", 0);
bouncingBall(".bounce_cir2", 0);

// footer title
gsap.registerPlugin(ScrollTrigger);
gsap.to(".ft-logo", {
  scrollTrigger: {
    trigger: ".ft-logo", // 모션이 어느 지점에서 시작되는지
    // markers: true,
    start: "top 50%", // 모션이 시작되는 지점 (trigger의 상대 위치 / 뷰포트의 절대 위치)
    end: "bottom 23%", // 모션이 끝나는 지점
    scrub: true, // 스크롤의 양방향으로 모션을 재생 (스크롤 다운하다가 업 하면 원래대로 돌아감)
  },
  y: 123.3,
  duration: 0.7,
});