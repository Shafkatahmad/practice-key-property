const product = {
  name: 'laptop',
  brande: 'lenovo',
  price: 1000
}

Object.entries(product).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});


const displayUsers = async() => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
  }
  catch(err) {
    console.error('error fetching data:', err);
  }
}