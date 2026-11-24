const data = {
  crypto: { USDT: 1600, BTC: 100000000 },
  giftcard: { Steam: 1200, Amazon: 1100 }
};

const cat = document.getElementById("cat");
const item = document.getElementById("item");
const qty = document.getElementById("qty");

function loadItems() {
  item.innerHTML = "";
  for (let k in data[cat.value]) {
    let opt = document.createElement("option");
    opt.value = k;
    opt.textContent = k;
    item.appendChild(opt);
  }
  calculate();
}

function calculate() {
  let rate = data[cat.value][item.value];
  let total = qty.value * rate;
  
  document.getElementById("rText").textContent = "₦" + rate.toLocaleString();
  document.getElementById("pText").textContent = "₦" + total.toLocaleString();
}

cat.onchange = loadItems;
item.onchange = calculate;
qty.oninput = calculate;

loadItems();