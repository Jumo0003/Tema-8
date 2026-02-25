let time = new Date().getHours();
console.log(time);

let min = new Date().getMinutes();
console.log(min);

let ur = document.querySelector("#container");
console.log(ur);

ur.innerHTML = `<h1>${time}:${min}</h1>`;
