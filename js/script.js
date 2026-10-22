// Fade In Animation

window.addEventListener("scroll", () => {

document.querySelectorAll(".card").forEach(card => {

const top = card.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
card.classList.add("show");
}

});

});

// Contact Form Validation

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Message submitted successfully!");

form.reset();

});

}
