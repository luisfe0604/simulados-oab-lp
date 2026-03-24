const track = document.getElementById("carousel");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const close = document.getElementById("closeModal");

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

document.querySelectorAll(".carousel img").forEach((img) => {
  img.addEventListener("click", () => {
    modal.classList.add("active");
    modalImg.src = img.src;
  });
});

close.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
