let input = document.querySelector("#input");
let add_btn = document.querySelector("#add-btn");
let ulist = document.querySelector("#ulist");
let not_found_value = document.querySelector("small");

//function to create a new list and add them in unordered list
function addList() {
  if (input.value != "") {
    //creating elements to insert in html
    let newList = document.createElement("li");
    let new_para = document.createElement("p");
    let rmv_list = document.createElement("button");
    let edit_list = document.createElement("button");

    new_para.textContent = input.value;
    rmv_list.innerHTML = `<i class="fa fa-trash-o"></i>`;
    edit_list.innerHTML = `<i class="fa fa-edit"></i>`;
    new_para.classList.add("new_para");
    rmv_list.classList.add("btn");
    edit_list.classList.add("btn");

    newList.appendChild(new_para);
    newList.appendChild(edit_list);
    newList.appendChild(rmv_list);

    ulist.appendChild(newList);

    //function to remove list items
    rmv_list.addEventListener("click", () => {
      newList.remove();
    });

    // function to edit the text content in list
    edit_list.addEventListener("click", () => {
      input.value = new_para.innerText;
      newList.remove();
    });
    not_found_value.style.display = "none";
  } else {
    not_found_value.style.display = "block";
    setTimeout(() => {
      not_found_value.style.display = "none";
    }, 1500);
  }
  input.value = "";
}

add_btn.addEventListener("click", addList);
