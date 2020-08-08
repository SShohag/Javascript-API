    
    
document.getElementById('submit').addEventListener('click', function(){
const title = document.getElementById('title').value;
const bodyContent = document.getElementById('bodyContent').value;
const post = { title:title, body:bodyContent, userId:1};
nowPostToServer(post);
})
    function nowPostToServer(postInfo){
        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(postInfo),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
      .then(data => console.log(data))
    }

    // function displayUser (users){
    //     const ul = document.getElementById('users-container');
    //     for (let i = 0; i < users.length; i++) {
    //         const element = users[i];
    //         const userList = element.name;
    //         const li = document.createElement('li');
    //         li.innerText = userList;
    //         ul.appendChild(li);
    //     }
    // }
    // const postInfo = {title: 'fooooo',body: 'barrrr',userId: 1}