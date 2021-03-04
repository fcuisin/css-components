const arrows = document.querySelectorAll(".fa-arrow-right");

function animatedForm() {

  const input = this.previousElementSibling;
  const parent = this.parentElement;
  const nextDiv = parent.nextElementSibling;

  if (input.type === "text" && validationUser(input)) {
    nextField(parent, nextDiv);
  }

}

function validationUser(input) {

  if (input.value === "" || input.value.length < 6) {
    input.parentElement.style.backgroundColor = "#eabf9f";
    input.style.backgroundColor = "f0a500";
  } else {
    return true;
  }

}

function nextField(parent, nextDiv) {

  parent.classList.add("innactive");
  parent.classList.remove("active");
  nextDiv.classList.remove("innactive")
  nextDiv.classList.add("active")

}

arrows.forEach((arrow) => arrow.addEventListener('click', animatedForm));
