const scriptURL =
  "https://script.google.com/macros/s/AKfycbwVWbZmA7Z_FcnYjVNwVzpFbZ2bDTbmPpkn3SLP-t310gLnWOl1lgSX2HgULGMRQ2xw/exec";

const form = document.forms["contract-form"];
const submitBtn = document.querySelector(".form-container .submit-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitBtn.classList.add("loading");
  submitBtn.disable = true;
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => alert("Done"))
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});

const inputs = document.querySelectorAll("input");
const nextBtns = document.querySelectorAll(".next-btn");
nextBtns.forEach((nextBtn, index) => {
  let realIndex = index + 2;
  nextBtn.addEventListener("click", () => {
    if (inputs[index].value != "") {
      form.classList.remove(`state-${realIndex - 1}`);
      form.classList.add(`state-${realIndex}`);
    } else {
      alert("Please enter your infomation");
    }
  });
});
