const params = new URLSearchParams(window.location.search);
const id = params.get("id");

console.log(id);

//const id = 1528;
const productURL = `https://kea-alt-del.dk/t7/api/products/${id}`;
const productcontainer = document.querySelector("#productContainer");

console.log(productcontainer);

function getData() {
  fetch(productURL).then((res) => res.json().then((data) => show(data)));
}

function show(data) {
  console.log("mine data er", data);
  productcontainer.innerHTML = `
 <article class="product1">
 <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="Produktbillede">
 <div class="tekst">
   <h2>${data.productdisplayname}</h2>
 <p>Pris: ${data.price}</p>
  <p>Lagerstatus; ${data.soldout}</p>
 <brand>${data.brandname}</brand>
 <a href="product.html">Add To Basket</a>
</div>
  `;
}

getData();
