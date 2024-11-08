const input = document.getElementById("in");

const cont = document.getElementById("con");

const ul = document.createElement("ul");

const add = document.getElementById("add");

document.addEventListener('keypress', (event) => {
    if(event.key === "Enter"){
        event.preventDefault();
        display();
    }
})

const display = () => {

    if(input.value === ""){
        alert("Enter Task..");
    }
    else{
        const li = document.createElement("li");
    const check = document.createElement("input");
    const delete_btn = document.createElement("button");
    const p = document.createElement("p");
    const span = document.createElement("span");
    const label = document.createElement("label");

    delete_btn.className = "btn";
    let text = document.createTextNode(input.value);

    check.type = "checkbox";

    console.log(input.value);
    delete_btn.appendChild(document.createTextNode("X"))

    p.appendChild(text);

    label.appendChild(check);
    label.appendChild(span);

    li.appendChild(label);
    li.appendChild(p);
    li.appendChild(delete_btn)
    ul.appendChild(li);

    cont.appendChild(ul)




    const ul1 = document.querySelector("ul");

    const li1 = ul1.querySelectorAll("li");
    const btn = document.querySelectorAll(".btn");

    btn.forEach(button => {
        button.addEventListener('click', () => {
            const list_item = button.parentElement;
            list_item.remove();



        })
    });

    input.value = "";

    }
    
}











