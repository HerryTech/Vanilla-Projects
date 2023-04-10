const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const list = document.querySelector(".grocery-list");
const container = document.querySelector(".grocery-container");
const alert = document.querySelector(".alert");
const submitBtn = document.querySelector(".submit-btn");
const clearBtn = document.querySelector(".clear-btn");

let editElement;
let editFlag = false;
let editID = "";

form.addEventListener("submit", addItem);

window.addEventListener("DOMContentLoaded", showLocalStorage);


function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    if(value !== "" && !editFlag){
        createListItem(id, value);
       container.classList.add("show-container");
       displayText("Item added succesfully", "success");
       addToLocalStorage(id, value);
       setToDefault();
    }else if(value!== "" && editFlag){
        editElement.innerHTML = value;
        displayText("Item edited", "success");
        editLocalStorage(editID, value);
        setToDefault();
    }else{
        displayText("Add an item", "danger");
    }
    
};

//editing
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.previousElementSibling;
    grocery.value = editElement.innerHTML;
    submitBtn.textContent = "edit";
    editFlag = true;
    editID = element.dataset.id;
}

//deleting
function deleteItem(e){
const element = e.currentTarget.parentElement.parentElement;
list.removeChild(element);
const id = element.dataset.id;
if(list.children.length === 0){
    container.classList.remove("show-container");
}

displayText("item deleted", "danger");
setToDefault();
deleteFromLocalStorage(id);

}

//clear all items
clearBtn.addEventListener("click", clearAllItems);

function clearAllItems() {
    list.innerHTML = "";
    displayText("all items cleared", "danger");
    container.classList.remove("show-container");
    setToDefault();
    localStorage.removeItem("list");
}

function displayText(text, color){
    alert.textContent = text;
    alert.classList.add(`alert-${color}`);
    function removeAlert(){
        alert.textContent = "";
        alert.classList.remove(`alert-${color}`) ;
    }
    setTimeout(removeAlert, 1000);
}

function setToDefault(){
    grocery.value = "";
    editFlag = false;
    submitBtn.innerHTML = "submit";
    editID = "";
}


function addToLocalStorage(id, value){
    const grocery = { id, value };
    let items = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
    
    items.push(grocery);

    localStorage.setItem("list", JSON.stringify(items));
}

function editLocalStorage(id, value){
    let items = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];

    items = items.map(function(item){
        if(item.id === id){
            item.value = value;
        }
        return item;
    });
    localStorage.setItem("list", JSON.stringify(items));
}

function deleteFromLocalStorage(id){
    let items = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];

    items = items.filter(function (item) {
        if(item.id !== id){
            return item;
        }
    });
    localStorage.setItem("list", JSON.stringify(items));
}

//Show localStorage to window
function showLocalStorage(){
    let items = localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
    if (items.length > 0) {
        items.forEach(function (item) {
          createListItem(item.id, item.value);
        });
        container.classList.add("show-container");
      }
}

//to avoid repetition
function createListItem(id, value){
    const element = document.createElement("div");
        let attr = document.createAttribute("data-id");
        attr.value = id;
        element.setAttributeNode(attr);
        element.classList.add("grocery-item");
        element.innerHTML = `<p class="title">${value}</p>
               <div class="btn-container">
                 <button type="button" class="edit-btn">
                   <i class="fas fa-edit"></i>
                 </button>
                 <button type="button" class="delete-btn">
                   <i class="fas fa-trash"></i>
                 </button>
                </div>
              `;
       
    const editBtn = element.querySelector(".edit-btn");
    editBtn.addEventListener("click", editItem);
    const deleteBtn = element.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteItem);

       list.appendChild(element);
}
