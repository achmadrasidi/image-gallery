const thumb = document.querySelectorAll(".thumb");
const hero = document.querySelector(".hero");

thumb.forEach(function (elm) {
  elm.addEventListener("click", function (e) {
    if (e.target.className == "thumb") {
      hero.src = e.target.src;
      hero.classList.add("fade");
      setTimeout(function () {
        hero.classList.remove("fade");
      }, 1000);
      thumb.forEach(function (thumb) {
        thumb.className = "thumb";
      });
      e.target.classList.add("active");
    }
  });
});
