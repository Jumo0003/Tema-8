const listURL = "https://kea-alt-del.dk/t7/api/products";
const listContainer = document.querySelector("#productListContainer");

function getProducts() {
  fetch(listURL).then((res) => res.json().then((products) => showProducts(products)));
}

function showProducts(products) {
  // Start med tom container
  listContainer.innerHTML = "";

  // products er et array af objekter
  products.forEach((product) => {
    listContainer.innerHTML += `
      <article class="productCard">
        
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Produkt 1" />
          <div class="tekst">
          <h3>${product.productdisplayname}</h3>
           <p> ${product.gender}</p><p>${product.category}</p><p>${product.subcategory}</p>
        <p>Pris: ${product.price}</p>
        <p> ${product.discount}</p>
        <p> ${product.brandname}</p>
        <a href="produkt.html">Køb</a>
</div>
      </article>
    `;
  });
}

getProducts();
