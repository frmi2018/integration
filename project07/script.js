const searchInput = document.querySelector('#search');
const searchResult = document.querySelector('.table-results');

// récupère des infos d'utilisateur sur le site randomuser

let dataArray;
async function getUsers() {
  const res = await fetch('https://randomuser.me/api/?nat=fr&results=50');
  const { results } = await res.json();

  dataArray = orderList(results);
  createUserList(dataArray);
}

getUsers();

// tri un tableau par ordre alphabétique

function orderList(data) {
  const orderedData = data.sort((a, b) => {
    if (a.name.last.toLowerCase() < b.name.last.toLowerCase()) {
      return -1;
    }
    if (a.name.last.toLowerCase() > b.name.last.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  return orderedData;
}

// créer une liste et l'affiche dans le DOM

function createUserList(usersList) {
  usersList.forEach((user) => {
    const listItem = document.createElement('div');
    listItem.setAttribute('class', 'table-item');
    listItem.innerHTML = `
        <div class="container-img">
        <img src=${user.picture.medium} />
        <p class="name">${user.name.last} ${user.name.first}</p>
      </div>
      <p class="email">${user.email}</p>
      <p class="phone">${user.phone}</p>

        `;

    searchResult.appendChild(listItem);
  });
}

searchInput.addEventListener('input', filterData);

// Recherche dans un tableau les caractères d'un input

function filterData(e) {
  searchResult.innerHTML = '';
  const searchedString = e.target.value.toLowerCase().replace(/\s/g, '');
  const filteredArr = dataArray.filter(
    (el) =>
      el.name.first.toLowerCase().includes(searchedString) ||
      el.name.last.toLowerCase().includes(searchedString) ||
      `${el.name.last + el.name.first}`
        .toLowerCase()
        .replace(/\s/g, '')
        .includes(searchedString) ||
      `${el.name.first + el.name.last}`
        .toLowerCase()
        .replace(/\s/g, '')
        .includes(searchedString)
  );

  createUserList(filteredArr);
}
