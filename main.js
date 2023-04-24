console.log("hello world");

//btn-start , open app 

const start = document.getElementById("btn-start");
const container = document.querySelector(".container");


start.addEventListener("click" , openApp => {
  container.classList.remove("hidden");
  start.style.display = "none";
});


// api key and connect to server


const btn = document.getElementById("btn");
const total = document.getElementById("total");

var myHeaders = new Headers();
myHeaders.append("apikey", "G6gEQ39wC2T3CkQFxJ9zDSefEdnkb3w6");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

btn.addEventListener("click" , () =>{

const amount = num1.value;
const baseCurrency = unit1.value;
const targetCurrency = unit2.value;
const url = `https://api.apilayer.com/exchangerates_data/convert?to=${targetCurrency}&from=${baseCurrency}&amount=${amount}`;

fetch(url , requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result);
    const convertedAmount = result.result;
    total.innerHTML = convertedAmount;

  })
  .catch(error => console.log('error', error));

  });







 



 
