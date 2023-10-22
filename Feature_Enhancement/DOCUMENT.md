# Feature Enhancement
The following features added in the code :-

## Add User
Any number of users can be added to the list using this feature. First we have to enter the value at input text and then click on **Add** button to add the user in the list.

### Implementation
Select the input box and if the value inside the input is empty and add button is pressed then display a alert, asking to enter the user first. If the input is not empty then add the entered user in the users array and make input empty for the next time. Added Event Listener to the add button and passed adduser function to it.
Called the displayUsers function to display the new users list.

    function addUser() {
       const inputBox  =  document.querySelector(".input-box");
       if(inputBox.value  ===  ""){
           alert("Enter User First!");
       }else{
           const  users  =  fetchUsers();
           users.push(inputBox.value);
           // Add new user in the user array
           updateUser(users);
           
           inputBox.value  =  "";
           displayUsers(users);
       }
    }
    
## Delete User
Clicking on the delete button next to every user make the user delete from the list.

### Implementation
Added event listener to the delete button and passed the index of user to the **deleteUser** function. In the **deleteUser** function, deleted the element from the array with index same as argument index after that updated and displayed users.

    function  deleteUser(index) {
       const  users  =  fetchUsers();
       users.splice(index, 1);
       updateUser(users);
       displayUsers(users);
    }

## Search User
Implemented the search feature which filters the users array based on the input given.

### Implementation
Selected the value from the **search-box**. Used filter method of arrays in users array that filtered the array according to the value in the **search-box**. Both search-box text and users are converted to lower case for better search. Added **keyup** eventlistener to the search-box for precise search in the users array.

    function  searchUser() {
       let  search  =  document.querySelector(".search-box").value;
       const  users  =  fetchUsers();
       const  filteredUsers  =  users.filter((user) => user.toLowerCase().includes(search.toLowerCase()));
       displayUsers(filteredUsers);
    }
