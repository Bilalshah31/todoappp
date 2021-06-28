// Getting Input and value by targeting id
var inputValue = document.getElementById("todoInput");

// Getting UL by targeting id
var todoList = document.getElementById("todoList");

function addTodo() {
    // Making check wether input value is empty or not

    if (inputValue.value !== "") {
        // Creating LI
        var li = document.createElement("li");
        li.setAttribute("class","list")
        // Creating INPUT
        var input = document.createElement("input");
        input.setAttribute("class","todoInput")
        // Disabling input and assigning input a value  
        input.disabled = true;
        input.value = inputValue.value;
        // Creating edit button
        var editButton = document.createElement("button");
        // Creating Text node fro Edit button
        var editText = document.createTextNode("Edit");
       editButton.setAttribute("class","editBtn");
        // Creating Delete Button
        var deleteButton = document.createElement("button");
        // Creating Text Node for Delete Button
        var deleteText = document.createTextNode("Delete");
        deleteButton.setAttribute("class","dltBtn");
        // Setting Onclick Attribute for delete button to delete one LI
        deleteButton.setAttribute("onclick", "deleteItem(this)");
        // Appending Text Nodes for Edit and Delete Buttons
        editButton.appendChild(editText);
        deleteButton.appendChild(deleteText);

        // editButton.appendChild(document.createTextNode("Edit"))

        // Adding a Event Listener for Edit Button to edit todo
        editButton.addEventListener("click", function () {
            if (editButton.innerHTML === "Edit") {
                input.disabled = false;
                editButton.innerHTML = "Update";
            } else {
                input.disabled = true;
                editButton.innerHTML = "Edit";
                alert("Successfully Updated")
            }
        });

        // Appending Input, Edit and Delete Buttons to LI
        li.appendChild(input);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        // Appending LI to UL with id: todoList
        todoList.appendChild(li);

        // Setting input value to Empty String after submission
        inputValue.value = "";
    } else {
        // showing alert on condition if input value is empty
        alert("Please Provide Valid Todo");
    }
}

// Creating function for deleting single LI
function deleteItem(event) {
    event.parentNode.remove();
}

// Creating function for deleting all LI
function deleteAll() {
    todoList.innerHTML = "";
    alert("Deleted Successfully");
}