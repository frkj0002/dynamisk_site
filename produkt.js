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
}

function visProdukt(produkt) {
  console.log(produkt);
  document.querySelector("h3").textContent = produkt.productdisplayname;
  document.querySelector(".product_img").src = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
  document.querySelector(".underkategori").textContent = produkt.subcategory;
  document.querySelector(".maerke").textContent = produkt.brandname;
  document.querySelector(".pris").textContent = "DKK " + produkt.price + " ,-";

  if (produkt.discount) {
    document.querySelector(".udsalg_procent").classList.remove("skjul");
    document.querySelector(".udsalg_pris_før").classList.remove("skjul");
    document.querySelector(".udsalg_pris_før").classList.add("pris_før");
    document.querySelector("h4").classList.add("udsalg_pris_efter");
    document.querySelector("h4").textContent = "DKK " + Math.round((produkt.price * (100 - produkt.discount)) / 100) + " ,-";
  }
  document.querySelector("#procent").textContent = produkt.discount + "%";

  if (produkt.soldout) {
    document.querySelector(".udsolgt_tekst").classList.remove("skjul");
    document.querySelector(".product_img").classList.add("udsolgt");
  }
}

showProduct();
