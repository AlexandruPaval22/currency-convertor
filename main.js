console.log("hello world");

//btn-start , open app 

const start = document.getElementById("btn-start");
const container = document.querySelector(".container");


start.addEventListener("click" , openApp => {
  container.classList.remove("hidden");
  start.style.display = "none";
})

/* api key and connect to server */


const baseCurrency = unit1.value.toUpperCase();
const targetCurrency = unit2.value.toUpperCase();
const amount = num1.value;

const btn = document.getElementById("btn");
const total = document.getElementById("total");


const apiKey = "WPhl5aywmvbZGGZxf6QhrZN7Jxh5cyLB";
const url = "https://api.currencylayer.com/live?access_key=${apiKey}&source=${baseCurrency}&currencies=${targetCurrency}";



btn.addEventListener("click" , ()=>{

  fetch(url)
  .then(response => response.json())
  .then(data => {
    const rate = data.quotes[`${baseCurrency}${targetCurrency}`];
    const convertedAmount = amount * rate;
    total.innerText = "${convertedAmount.toFixed(2)} ${targetCurrency";
  })
  .catch(error => console.log("error", error));

});



 
