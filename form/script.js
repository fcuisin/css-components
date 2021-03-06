const arrows = document.querySelectorAll(".fa-arrow-right");

function animatedForm() {

  const input = this.previousElementSibling;
  const parent = this.parentElement;
  const nextDiv = parent.nextElementSibling;

  if (input.type === "text" && validationUser(input)) {
    nextField(parent, nextDiv);
  } else if (input.type === "email" && validationEmail(input)) {
    nextField(parent, nextDiv);
  } else if (input.name === "job" && validationJob(input)) {
    nextField(parent, nextDiv);
  } else {
    parent.style.animation = "shaking 0.3s ease";
  }

  parent.addEventListener('animationend', () => {
    parent.style.animation = "";
  })

}

function validationUser(input) {

  if (input.value !== "" && input.value.length > 6) {
    return true;
  }

}

function validationEmail(email) {

  const regex = /^\S+@\S+\.\S+$/;

  if (regex.test(email.value)) {
    return true;
  }

}

function validationJob(job) {

  if (job.value !== "") {
    return true;
  }

}

function nextField(parent, nextDiv) {

  parent.classList.add("inactive");
  parent.classList.remove("active");
  nextDiv.classList.remove("inactive")
  nextDiv.classList.add("active")

}

arrows.forEach((arrow) => arrow.addEventListener('click', animatedForm));
