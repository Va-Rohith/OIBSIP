const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const filterOption = document.querySelector(".filter-todo");

function addTask() {
    if (inputBox.value === "") {
        alert("You must write something in the TaskBox to Add!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        let trashIcon = document.createElement("i");
        trashIcon.className = "fas fa-trash";
        trashIcon.style.marginLeft = "5px";

        let span = document.createElement("span");
        span.appendChild(trashIcon);

        li.appendChild(span);
        listContainer.append(li);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "I") {
        e.target.parentElement.parentElement.remove();
        saveData();
    }
});

filterOption.addEventListener("change", filterTodo);

function filterTodo() {
    const todos = listContainer.querySelectorAll("li");

    todos.forEach(function (todo) {
        switch (filterOption.value) {
            case "completed":
                if (todo.classList.contains("checked")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "incomplete":
                if (!todo.classList.contains("checked")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            default:
                todo.style.display = "flex";
        }
    });
}

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
