console.log("it works");
const peopleTableContainerEl = document.querySelector(".peopleTableContainer");
const shipsTableContainerEl = document.querySelector(".shipsTableContainer");

const SWAPI_PEOPLE_URL = "https://swapi.dev/api/people";
const SWAPI_SHIPS_URL = "https://swapi.dev/api/starships";

function fetchPeople(url) {
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      renderPeopleTable(peopleTableContainerEl, data);
    });
}
function renderPeopleTable(peopleTableContainerEl, peopleData) {
  let peopleHTML = "";
  for (let person of peopleData.results) {
    peopleHTML += `
    <table>
    <tr>
      <td>${person.name}</td>
      <td>${person.height}</td>
      <td>${person.mass}</td>
      <td>${person.birth_year}</td>
      <td>${person.gender}</td>
      <td>${person.films.length}</td>
    </tr>
    </table>

    `;
  }

  peopleTableContainerEl.innerHTML = `
       <table>
          <thead>
          <tr>
      <th>Name</th>
      <th>Height</th>
      <th>Mass</th>
      <th>Birth Year</th>
      <th>Gender</th>
      <th>Appereances count</th>
    </tr>
          </thead>
          <tbody>
            ${peopleHTML}
          </tbody>
        </table>
    `;
}

fetchPeople("https://swapi.dev/api/people");

//SHIPS
function fetchShips(url) {
  fetch(SWAPI_SHIPS_URL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      renderPeopleTable(shipsTableContainerEl, data);
    });
}
function rendershipsTable(shipsTableContainerEl, shipsData) {
  let shipsHTML = "";
  for (let ship of shipsData.results) {
    shipsHTML += `
    <table>
    <tr>
      <td>${ship.name}</td>
      <td>${ship.model}</td>
      <td>${ship.manufacturer}</td>
      <td>${ship.cost_in_credits}</td>
      <td>${ship.passengers}</td>
      <td>${ship.starship_class}</td>
    </tr>
    </table>

    `;
  }

  shipsTableContainerEl.innerHTML = `
       <table>
          <thead>
          <tr>
      <th>Name</th>
      <th>Model</th>
      <th>Manufacturer</th>
      <th>Cost</th>
      <th>Passengers</th>
      <th>Class</th>
    </tr>
          </thead>
          <tbody>
            ${shipsHTML}
          </tbody>
        </table>
    `;
}

fetchShips("https://swapi.dev/api/starships");
