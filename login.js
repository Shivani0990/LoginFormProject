const wrapper = document.querySelector(".wrapper")
singupHeader = document.querySelector(".singup header");
loginHeader = document.querySelector(".login header");

loginHeader.addEventListener("click", () => {
    wrapper.classList.add("active")
    // console.log(loginHeader);
});

singupHeader.addEventListener("click", () => {
    wrapper.classList.remove("active")
});