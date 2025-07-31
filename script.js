const form = document.querySelector("#catForm");
const catContainer = document.querySelector("#cat-container");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const catName = document.querySelector("#catName");
  const imgURL = document.querySelector("#catImg");

  const catCard = document.createElement("div");
  catCard.classList.add("cat-card");

  catCard.innerHTML = `<img src"${imgURL}" alt="${catName}">
   <h3>${catName}</h3>
   <button class="delete-btn">Delete</button>`;

  const deleteBtn = catCard.document.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function () {
    catCard.remove();
  });

  catContainer.appendChild(catCard);

  form.requestFullscreen();
});
