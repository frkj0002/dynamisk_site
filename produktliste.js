// function sidenVises() {
//   document.querySelector("#udsalg_procent").classList.add("skjul");
//   document.querySelector("#udsolgt_tekst").classList.add("skjul");
//   document.querySelector(".udsalg_pris_efter").classList.add("skjul");
// }

// sidenVises();

fetch("https://kea-alt-del.dk/t7/api/products")
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
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
  copy.querySelector(".underkategori").textContent = product.subcategory;
  copy.querySelector(".product_image").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
  copy.querySelector(".maerke").textContent = product.brandname;
  copy.querySelector("a").href = `produkt.html?id=${product.id}`;
  if (product.soldout) {
    // produktet er udsolgt
    copy.querySelector("article").classList.add("udsolgt_tekst");
    copy.querySelector("article").classList.add("udsolgt");
  } else {
    copy.querySelector("#udsolgt_tekst").classList.add("skjul");
    copy.querySelector("article").classList.remove("udsolgt");
  }
  if (product.discount) {
    copy.querySelector;
  }
  // appende (ændre)
  document.querySelector(".grid_1_1_1").appendChild(copy);
}

/* <article class="produkter">
                <div class="udsalg_procent">
                    <p>31%</p>
                </div>
                <div class="udsolgt_tekst">
                    <p>Udsolgt</p>
                </div>
                <div>
                    <a href="produkt.html">
                        <img src="https://kea-alt-del.dk/t7/images/webp/640/1542.webp" alt="sko" class="udsolgt">
                        <h2 class="udsolgt">Ballistic Rubber Shoe</h2>
                    </a>
                    <p class="udsolgt">Sko | Puma</p>
                    <div class="flex_pris">
                        <p class="udsalg_pris_efter udsolgt">DKK 2414,-</p>
                        <p class="udsalg_pris_før udsolgt">DKK 3499,-</p>
                        <button class="udsolgt">Køb</button>
                    </div>

                </div>
            </article> */

/* //   "id": 1525,
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
