const modal = document.getElementById("contactModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close");

// открыть модалку
openBtn.onclick = function () {
  modal.style.display = "flex";
};

// закрыть по крестику
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// закрыть по клику вне окна
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
