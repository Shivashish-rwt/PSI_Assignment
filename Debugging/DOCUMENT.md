# List of bugs and fixed code

### Line No. 3  
  
    setTimout(() => {  
       callback([  
          { id: 1, name: 'Alice', },  
          { id: 2, name: 'Bob', },  
          { id: 3, name: 'Catherine', },  
       ]);  
    }, 1000);  
  
The setTimeout in the line no. 3 is spelled wrong instead of **setTimout** it should be **setTimeout**. After correcting it will, the callback function will now have users data in it as an array.

    setTimeout(() => {  
       callback([  
          { id: 1, name: 'Alice', },  
          { id: 2, name: 'Bob', },  
          { id: 3, name: 'Catherine', },  
       ]);  
    }, 1000);  
  
### Line No. 14

const userListDiv = document.querySelector('#userList');  
  
The div that contains the users list is selected using querySelector but the id name of div is wrong. Instead of **#userList** it should be **#usersList** then only it will select the div that displays users.

const userListDiv = document.querySelector('#usersList');

### Line No. 17

    userDiv.innerhtml = `${user.name}`;

The userDiv element is created to store the name of the users. To insert the text in the div Javascript provides innerHtml property. But it is spelled wrong in the code instead of **innerhtml** it should be **innerHtml**.

    userDiv.innerHTML = `${user.name}`;

### Line No. 23

    fetchUsers((user) => {  
        displayUsers(users)  
    });

The fetchUsers function is called to get fetch the users list. Then displayUsers function will insert the users list into the div. But fetchUsers function argument is **user** instead it should be **users**, which is the argument we are passing in the displayUsers function.

    fetchUsers((users) => {  
        displayUsers(users)  
    });  

After the above debugging, our code works fine and it display users list.

![](https://33333.cdn.cke-cs.com/kSW7V9NHUXugvhoQeFaf/images/650e50ca99d64d2f1a7e46ff1d6de957f376b51383e28953.png)
