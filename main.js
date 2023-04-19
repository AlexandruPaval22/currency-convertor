console.log("hello world");

//btn-start , open app 

const start = document.getElementById("btn-start");
const container = document.querySelector(".container");


start.addEventListener("click" , openApp => {
  container.classList.remove("hidden");
  start.style.display = "none";
})



/*
// API key
const apiKey = "WPhl5aywmvbZGGZxf6QhrZN7Jxh5cyLB";

const num1 = document.getElementById("num1");
const unit1 = document.getElementById("unit1");
const unit2 = document.getElementById("unit2");
const total = document.getElementById("total");

//event click
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  
  const baseCurrency = unit1.value.toUpperCase();
  const targetCurrency = unit2.value.toUpperCase();
  const amount = num1.value;
  const url = `https://api.currencylayer.com/live?access_key=${apiKey}&source=${baseCurrency}&currencies=${targetCurrency}`;
  const convertedAmount = amount;

  // connect to API
  fetch(url)
    .then(response => response.json())
    .then(data => {
      
      
      if (baseCurrency === targetCurrency) {
        console.log(`${amount} ${baseCurrency} = ${convertedAmount} ${targetCurrency}`);
        total.innerHTML = `${amount} ${baseCurrency} = ${convertedAmount} ${targetCurrency}`;
      } else if (data.quotes && data.quotes.hasOwnProperty(`${baseCurrency}${targetCurrency}`)) {
        const exchangeRate = data.quotes[`${baseCurrency}${targetCurrency}`];
        const convertedAmount = amount * exchangeRate;
        console.log(`${amount} ${baseCurrency} = ${convertedAmount} ${targetCurrency}`);
        total.innerHTML = `${amount} ${baseCurrency} = ${convertedAmount} ${targetCurrency}`;
      } else {
        console.error(`Currency conversion rate not found for ${baseCurrency}-${targetCurrency}`);
      }

      //final result
      total.innerHTML = `${amount} ${baseCurrency} = ${convertedAmount} ${targetCurrency}`;
    })
    .catch(error => console.error(error));
});




//api key
//G6gEQ39wC2T3CkQFxJ9zDSefEdnkb3w6
*/

/*

const baseCurrency = unit1.value.toUpperCase();
const targetCurrency = unit2.value.toUpperCase();
const amount = num1.value;

var myHeaders = new Headers();
myHeaders.append("apikey", "WPhl5aywmvbZGGZxf6QhrZN7Jxh5cyLB");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch("https://api.apilayer.com/currency_data/convert?to=${targetCurrency}&from=${baseCurrency}&amount=${amount}", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
*/



 