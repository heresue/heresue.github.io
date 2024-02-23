// new Swiper(".swiper-container", {
//   direction: "vertical", // 수직 슬라이드
//   autoplay: true, // 자동 재생 여부
//   loop: true, // 반복 재생 여부
// });

function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(selector, random(4.5, 6.5), {
    y: size,
    repeat: -1, // -1 무한반복
    yoyo: true, // 애니메이션 되돌아오기(설정안할 시 끊김)
    ease: Power1.easeInOut, // 타이밍함수
    delay: random(0, delay), // 지연시간
  });
}
floatingObject(".wave_wrap", 0, 40);
// floatingObject(".floating2", 0.5, 15);
// floatingObject(".floating3", 1.5, 20);
