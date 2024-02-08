// fetch(`https://kea-alt-del.dk/t7/api/products/?limit=200&category=` + category)
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch(`https://kea-alt-del.dk/t7/api/products/?limit=200&category=` + category)
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  console.log("hej");
  // looper og kalder showProduct
  products.forEach(showProduct);
}

function showProduct(product) {
  //   console.log(product);
  // fang template
  const template = document.querySelector("#produkter_template").content;
  // lav en kopi
  const copy = template.cloneNode(true);

  // ændre indhold
  copy.querySelector("h2").textContent = product.productdisplayname;
  // copy.querySelector("#procent").textContent = discount;
  copy.querySelector(".underkategori").textContent = product.subcategory;
  copy.querySelector(".product_image").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(".maerke").textContent = product.brandname;
  copy.querySelector(".pris").textContent = "DKK " + product.price + " ,-";
  copy.querySelector("a").href = `produkt.html?id=${product.id}`;
  if (product.soldout) {
    // produktet er udsolgt
    copy.querySelector(".udsolgt_tekst").classList.remove("skjul");
    copy.querySelector(".product_image").classList.add("udsolgt");
  }

  if (product.discount) {
    copy.querySelector(".udsalg_procent").classList.remove("skjul");
    copy.querySelector(".udsalg_pris_efter").classList.remove("skjul");
    copy.querySelector(".udsalg_pris_efter").textContent = "DKK " + Math.round((product.price * (100 - product.discount)) / 100) + " ,-";
    copy.querySelector(".pris").classList.add("pris_før");
  }
  copy.querySelector("#procent").textContent = product.discount + "%";

  // appende (ændre)
  document.querySelector(".grid_1_1_1").appendChild(copy);
}

//   "gender": "Unisex",
//   "category": "Accessories",
//   "subcategory": "Bags",
//   "articletype": "Backpacks",
//   "season": "Fall",
//   "productionyear": 2010,
//   "usagetype": "Casual",
//   "productdisplayname": "Deck Navy Blue Backpack",
//   "price": 1299,
//   "discount": 55,
//   "brandname": "Puma",
//   "soldout": 0 */
