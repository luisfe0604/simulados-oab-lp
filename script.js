const track = document.getElementById("carousel");

let scrollAmount = 0;

function autoScroll() {
  scrollAmount += 1;

  if (scrollAmount >= track.scrollWidth / 2) {
    scrollAmount = 0;
  }

  track.style.transform = `translateX(-${scrollAmount}px)`;
  requestAnimationFrame(autoScroll);
}

autoScroll();
