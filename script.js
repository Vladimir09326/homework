console.log("JavaScript подклюён!");

document.querySelector("#buy").addEventListener("click", function() {
    document.querySelector("#message").textContent = 
    "Вам понравился товар!";
});

document.querySelector("#details").addEventListener("click", function() {
    document.querySelector("#info").textContent = 
    "Это лучшие наушники, купите их!";
});

document.querySelector("#delivery").addEventListener("click", function() {
    document.querySelector("#delivery-info").textContent = 
    "Доставка по городу — 300 ₽";
});

document.querySelector("#clear").addEventListener("click", function() {
    document.querySelector("#message").textContent = "";
});
