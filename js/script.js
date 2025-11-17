// capturar el ID donde pondremos los elementos
//  - Obtiene datos simulados de usuarios desde la API JSONPlaceholder `https://jsonplaceholder.typicode.com/users`. OK
//  - Agrega una edad aleatoria a cada usuario.
//  - Cada usuario tendrá una imagen asociada por `ID` (están en la carpeta assets/img) son extensión `.jpeg`  
//  - Muestra detalles específicos de cada usuario en la lista en el DOM: name, age, username, img, phone, email, company, address
//  - address tendrá estos datos como valor: usuario.address.street, usuario.address.suite, usuario.address.city
//  - Que funcione TOTO

const listaUsuarios = document.getElementById("listaUsuarios")

function getUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    const users = data.map(user => {
      const {id, address} = user
      return {...user,
        age: randomAge(18, 65),
        img: `./assets/img/${id}.jpeg`,
        address: `${address.street}, ${address.suite}, ${address.city}`,
      }
    }).map(user => {
      const {name, age, username, img, phone, email, company: {name: companyName}, address} = user
      const template = `
      <li>
        <div class="user-content">
          <div class="user-info">
            <h2><strong>Nombre:</strong> ${name}</h2>
            <p><strong>Edad:</strong> ${age}</p>
            <p><strong>Usuario:</strong> ${username}</p>
            <p><strong>Teléfono:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          <div class="user-image">
            <img src="${img}" alt="${name}" /> 
          </div>
        </div>
        <div class="user-company">
          <p><strong>Compañía:</strong> ${companyName}</p>
          <p><strong>Dirección:</strong> ${address}</p>
        </div>
      </li>
      `
      return template
    }).join("")
    listaUsuarios.innerHTML = users

  })
}

function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

getUsers()
function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getUsers();
