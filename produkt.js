window.addEventListener("DOMContentLoaded", showProduct);

const urlParams = new URLSearchParams(window.location.search);
console.log("urlParams", urlParams);
const id = urlParams.get("id");
// const id = 1165;
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

function showProduct() {
  console.log("Vis mig");

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      visProdukt(json);
    });

  // .then((res) => res.json())
  // .then(visProdukt);
}

function visProdukt(produkt) {
  console.log(produkt);
  document.querySelector("h3").textContent = produkt.productdisplayname;
  document.querySelector(".product_img").src = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
  document.querySelector(".underkategori").textContent = produkt.subcategory;
  document.querySelector(".maerke").textContent = produkt.brandname;
  document.querySelector(".pris").textContent = "DKK " + produkt.price + " ,-";
  //document.querySelector(".product_img").alt = produkt.productdisplayname;
}

showProduct();
