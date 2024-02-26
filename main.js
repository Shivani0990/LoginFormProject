const wrapper = document.querySelector(".wrapper");
const signupHeader = document.querySelector(".signup header");
const loginHeader = document.querySelector(".login header");

loginHeader.addEventListener("click", () => {
    wrapper.classList.add("active");
    // console.log(loginHeader);
});

signupHeader.addEventListener("click", () => {
    wrapper.classList.remove("active");
    // console.log(signupHeader);
});
