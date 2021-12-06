// HTML Elements
const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".menu");

// modal functionality
document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector(".modal").classList.contains("open-modal")
    ? document.querySelector(".modal").classList.remove("open-modal")
    : document.querySelector(".modal").classList.add("open-modal");
});
