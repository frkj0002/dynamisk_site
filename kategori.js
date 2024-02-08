// window.addEventListener("DOMContentLoaded", visKategorier);

// const urlParams = new URLSearchParams(window.location.search);
// console.log("urlParams", urlParams);
// const id = urlParams.get("id");
// // const id = 1165;
// const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

const urlParams = new URLSearchParams(window.location.search);
console.log("urlParams", urlParams);
const kategori = urlParams.get("category");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((res) => res.json())
  .then(visKategorier);

function visKategorier(kategorier) {
  // looper og kalder showProduct
  kategorier.forEach(showCategory);
}

function showCategory(category) {
  console.log("kategori");
  // fang template
  const template = document.querySelector("#kategorier_template").content;
  // lav en kopi
  const copy = template.cloneNode(true);
  // ændre indhold
  copy.querySelector("a").textContent = category.category;
  copy.querySelector("a").href = `produktliste.html?category=${category.category}`;
  //   copy.querySelector("h1").textContent = category.category;
  // appende (ændre)
  document.querySelector(".lettergroup").appendChild(copy);
}
