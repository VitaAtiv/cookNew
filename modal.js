// (() => {
//     const refs = {
//       openModalBtn: document.querySelector("[data-modal-open]"),
//       closeModalBtn: document.querySelector("[data-modal-close]"),
//       modal: document.querySelector("[data-modal]"),
//       body: document.querySelector("[lock]"),
//     };

//     refs.openModalBtn.addEventListener("click", toggleModal);
//     refs.closeModalBtn.addEventListener("click", toggleModal);

//     function toggleModal() {
//       refs.modal.classList.toggle("is-hidden");
//       refs.body.classList.toggle("lock")
//     }
//   })();

const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelector(".modal-btn-open");
const modalBtnClose = document.querySelector(".modal-btn-close");

const toggleModal = () => modal.classList.toggle("is-hidden");

modalBtnOpen.addEventListener("click", toggleModal);
modalBtnClose.addEventListener("click", toggleModal);

// const textEl = document.querySelector (".text")
// console.log(textEl);
// window.addEventListener("keydown", (event) => {
//   console.log(event);
//   textEl.textContent += event.key;
//   console.dir(textEl);
// })
