const bill = document.getElementById("bill");
const tip = document.getElementById("tip");

const calc = document.getElementById("calc");

const tot = document.querySelector(".tot");






const calculateTotal = () => {
    let tipTemp = (tip.value/100) * bill.value;
    let total = Number(bill.value) + tipTemp;
    console.log(total);

    tot.textContent = "₹ " + total;

}