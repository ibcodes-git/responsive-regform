const form = document.querySelector("form"),
      nextBtn = document.querySelector(".next"),
      backBtn = document.querySelector(".back"),
      submitBtn = document.querySelector(".submit"),
      allInput = document.querySelectorAll(".first input");

nextBtn.addEventListener("click", () => {
    allInput.forEach(input => {
        if(input.value != "") {
            form.classList.add("secActive");
        } else {
            form.classList.remove("secActive");
        }
    })
});
backBtn.addEventListener("click", () =>{
    form.classList.remove("secActive");
});
submitBtn.addEventListener("click", () => {
    alert("Form data submitted");
});