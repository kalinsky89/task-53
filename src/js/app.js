import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
var productsCnt=document.querySelectorAll('.product .price').length;
for(var i=0;i<productsCnt; i++){
  var price=document.querySelectorAll('.product .price')[i].textContent;
  var currentEl=document.querySelectorAll('.product')[i];
  currentEl.dataset.price=price;
}

});
