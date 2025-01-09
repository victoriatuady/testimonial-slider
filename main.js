const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const paragragh = document.getElementById("paragraph");
const nameTag = document.querySelector(".testimonial-name h4");
const positionTag = document.querySelector(".testimonial-name p");
const profileImage = document.querySelector(".testimonial-image");

// Define the testimonial data
const testimonials = [
  {
    name: "Tanya Sinclair",
    image: "img/image-tanya.jpg",
    position: "UX Engineer",
    text: `" I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. " `,
  },
  {
    name: "John Tarkpor",
    image: "img/image-john.jpg",
    position: "Junior Front-end Developer",
    text: `" If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. " `,
  },
];

//Initialize the current testimonial index
let currentIndex = 0;

//Function to update the testimonial
function updateTestimonial() {
  const currentTestimonial = testimonials[currentIndex];

  profileImage.src = currentTestimonial.image;
  nameTag.textContent = currentTestimonial.name;
  positionTag.textContent = currentTestimonial.position;
  paragragh.textContent = currentTestimonial.text;
}

//Function to handle the previous button click
function prevBtn() {
  currentIndex--;
  if (currentIndex <= 0) {
    currentIndex = 0;
  }
  updateTestimonial();
}

//Function to handle next button click
function nextBtn() {
  currentIndex++;
  if (currentIndex >= testimonials.length) {
    currentIndex = 0;
  }
  updateTestimonial();
}

// Add event listeners to buttons
prevButton.addEventListener("click", prevBtn);
nextButton.addEventListener("click", nextBtn);
