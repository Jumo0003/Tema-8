const id = 1528;
const productURL = "https://kea-alt-del.dk/t7/api/products/" + id;
const productcontainer = document.querySelector("#productContainer");

function getData() {
  fetch(productURL).then((res) => res.json().then((data) => show(data)));
}

function show(data) {
  productcontainer.innerHTML = `
 <article class="product1">
 <img src="https://kea-alt-del.dk/t7/images/webp/640/${1528}.webp" alt="Produktbillede">
 <div class="tekst">
   <h2>${data.productdisplayname}</h2>
 <p>Pris: ${data.price}</p>
  <p>Lagerstatus; ${data.soldout}</p>
 <brand>${data.brandname}</brand>
 <a href="produkt.html">Add To Basket</a>
</div>
  `;
}

getData();
