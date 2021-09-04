const openButton = document.querySelector("#open-modal-btn");
const overlay = document.querySelector("#overlay");
const modal = document.querySelector("#modal");
const closeButton = document.querySelector("#close-modal-btn");

openButton.addEventListener("click", () => {
  modal.classList.add("open");
  overlay.classList.add("open");
});

closeButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

function closeModal() {
  modal.classList.remove("open");
  overlay.classList.remove("open");
}
