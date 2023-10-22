// Simulated user data fetch function (meant to represent an API call)
function fetchUsers() {
    const users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [];
    return users;
}

// Update user to local storage
function updateUser(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

// Function to display users
function displayUsers(users) {
    const userListDiv = document.querySelector('#usersList');
    userListDiv.innerHTML = "";

    users.forEach((user, index) => {
        // To display user in the list
        const userDiv = document.createElement('div');
        userDiv.classList.add("user");
        userDiv.innerHTML = `${user}`;
        
        // To delete user from the list
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click", () => deleteUser(index));

        userDiv.appendChild(deleteButton);
        userListDiv.appendChild(userDiv);
    });
}

// Function to add user
function addUser() {
    const inputBox = document.querySelector(".input-box");
    if(inputBox.value === ""){
        alert("Enter User First!");
    }else{
        const users = fetchUsers();
        users.push(inputBox.value);
        // Add new user in the user array
        updateUser(users);

        inputBox.value = "";
        displayUsers(users);
    }
}

// Function to delete user
function deleteUser(index) {
    const users = fetchUsers();
    users.splice(index, 1);
    updateUser(users);
    displayUsers(users);
}

// Function to search user
function searchUser() {
    let search = document.querySelector(".search-box").value;
    const users = fetchUsers();
    const filteredUsers = users.filter((user) => user.toLowerCase().includes(search.toLowerCase()));

    displayUsers(filteredUsers);
}

// Adding eventListner to add button
const addButton = document.querySelector(".add-button");
addButton.addEventListener("click", addUser);

// Search Users
const searchBar = document.querySelector(".search-box");
searchBar.addEventListener("keyup", searchUser);

// Fetch and display users
const users = fetchUsers();
displayUsers(users);