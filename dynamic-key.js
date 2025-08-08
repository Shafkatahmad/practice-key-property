// usefull when we don't know the key in advance. common in forms, user inputs, or APIs

// const key = 'email';
// const value = 'steve.john.com';

// const user;
// const user = {
  //   [key]: value
  // };
  
  // console.log(user);

  
  let localUser = {};
let users2;
const getName = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();

  for(const user of data) {
    if(user["username"]) {
      const pageUser = document.getElementById('username');
      localUser.username = user.username;
      pageUser.innerHTML = `Username that we got from the API is: ${localUser.username}`
      console.log(localUser); 
      return;
    }
  }
}

getName();