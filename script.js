const form = document.getElementById("catForm");
const catContainer = document.getElementById("cat-container");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const catName = document.getElementById("catName").value;
  const imageUrl = document.getElementById("catImg").value;

  let validatedUrl;
  try {
    validatedUrl = new URL(imageUrl);
  } catch (error) {
    alert(
      "Invalid image URL. Please enter a valid one that starts with https://"
    );
    return;
  }

  const catCard = document.createElement("div");
  catCard.className = "cat-card";

  catCard.innerHTML = `<img src="${validatedUrl.href}" alt="${catName}" onerror="this.src='https://placekitten.com/300/200';">
   <h3>${catName}</h3>
   <button class="delete-btn">Delete</button>
   <button class="edit-btn">Edit Name</button>`;

  catCard.querySelector(".delete-btn").addEventListener("click", () => {
    catCard.remove();
  });

  catCard.querySelector(".edit-btn").addEventListener("click", () => {
    const nameHeading = catCard.querySelector("h3");
    nameHeading.contentEditable = "true";
    nameHeading.focus();

    nameHeading.addEventListener("keydown", function handler(e) {
      if (e.key === "Enter") {
        e.preventDefault();
        nameHeading.contentEditable = "false";
        nameHeading.removeEventListener("keydown", handler);
      }
    });

    nameHeading.addEventListener("blur", function handler() {
      nameHeading.contentEditable = "false";
      nameHeading.removeEventListener("blur", handler);
    });
  });

  catContainer.appendChild(catCard);

  form.reset();
});
