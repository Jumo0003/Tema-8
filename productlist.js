console.log("produktliste hentet");
const params = new URLSearchParams(window.location.search);
const Mycategory = params.get("category");

const listURL = Mycategory ? `https://kea-alt-del.dk/t7/api/products?category=${encodeURIComponent(Mycategory)}` : "https://kea-alt-del.dk/t7/api/products";
console.log(listURL);
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
            <div class="badges">
             ${product.soldout === 1 ? `<p class="badge soldout, soldout">Udsolgt</p>` : ""}
        ${product.price > 700 ? `<p class="badge fragt">Fri fragt</p>` : ""}
              ${product.discount > 0 ? `<p class="badge discount">Tilbud</p>` : ""}
                </div>
          <div class="tekst">
          <h3>${product.productdisplayname}</h3>
           <p> ${product.gender}</p>
    
           <p>${product.category}</p>
        
        <p> ${product.brandname}</p>
        <a href="product.html?id=${product.id}">Køb</a>
</div>
      </article>
    `;
  });
}

getProducts();
