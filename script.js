const inputItem = document.getElementById("inputItem"); // taking task

const add = document.getElementById("add"); // add button

const container = document.getElementById("container");

// list goes inside this div container

const deleteContainer = document.getElementById("delete-container");

let storeTodoItems = []; // storing todo
let storeDeleteItems = []; // storing deleted items

add.addEventListener("click", () => {
    if(inputItem.value == ""){
        alert("Please insert the item...")
        return;
    }
  if (localStorage.getItem("items") == null) {
    storeTodoItems.push(inputItem.value);

    localStorage.setItem("items", JSON.stringify(storeTodoItems));
  } else {
    storeTodoItems = JSON.parse(localStorage.getItem("items"));

    storeTodoItems.push(inputItem.value);

    localStorage.setItem("items", JSON.stringify(storeTodoItems));
  }
  loadItems();
  inputItem.value = "";
});

function loadItems() {
  storeTodoItems = JSON.parse(localStorage.getItem("items"));
  let str = "";
  storeTodoItems.forEach((element, index) => {
    let a = ` <tr>
            <td>${element}</td>
            <td><button class="btn" onclick = deleteItems(${index})>x</button></td>
            </tr>`;
    str += a;
  });
  container.innerHTML = str;
}

function deleteItems(index) {
  console.log("I am Click.");
  storeTodoItems = JSON.parse(localStorage.getItem("items"));

  let temp = storeTodoItems.splice(index, 1);

  storeDeleteItems.push(temp[0]);

  localStorage.setItem("deleteItems", JSON.stringify(storeDeleteItems));

  localStorage.setItem("items", JSON.stringify(storeTodoItems));

  loadItems();
  loadDeleteItems();
}

function loadDeleteItems() {
    console.log("Hello")
    storeDeleteItems = JSON.parse(localStorage.getItem("deleteItems"));
    let str = "";
    storeDeleteItems.forEach((element, index) => {
      let a = ` <tr>
              <td>${element}</td>
              <td><button class="btn" onclick = deleteItems1(${index})>x</button></td>
              </tr>`;
      str += a;
    });
    deleteContainer.innerHTML = str;
}

function deleteItems1 (index) {
    storeDeleteItems = JSON.parse(localStorage.getItem("deleteItems"));
    storeDeleteItems.splice(index,1);
    localStorage.setItem("deleteItems",JSON.stringify(storeDeleteItems));
    loadDeleteItems();
}