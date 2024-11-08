const num = document.querySelectorAll(".num");
const input = document.querySelector(".result");
const ac = document.querySelector(".ac");
const eq = document.querySelector(".eq");

let sum = ""



num.forEach(div => {
    div.addEventListener('click', () => {
        if(input.textContent === "0"){
            input.textContent = div.textContent;
            sum += div.textContent;
        }
        else{
            input.textContent += div.textContent;
            sum += div.textContent;
        }
    });
});

ac.addEventListener('click', () => {
    sum = "0";
    input.textContent = "0";
});



eq.addEventListener('click', () => {

    try{
        let a = eval(sum)
    input.textContent = a;
    console.log(eval(sum));
    }
    catch(error){
        input.textContent = "Error";
        document.addEventListener('keydown', () => {
            input.textContent = "";
        }) 
        sum = '';
    }
})

