console.log("it works");

const tableContainerEl = document.querySelector(".tableContainer");
const peopleEl = document.querySelector(".people");
const shipsEl = document.querySelector(".ship"); // Corrected selector to target the ship image
const planetsEl = document.querySelector(".planets");
const btnEl = document.querySelector(".closeBtn");

const SWAPI_PEOPLE_URL = "https://swapi.dev/api/people";
const SWAPI_SHIPS_URL = "https://swapi.dev/api/starships";
const SWAPI_PLANETS_URL = "https://swapi.dev/api/planets/";

//FETCH CHARACTERS
function fetchPeople(SWAPI_PEOPLE_URL) {
  fetch(SWAPI_PEOPLE_URL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      renderPeopleTable(tableContainerEl, data);
    });
}

peopleEl.addEventListener("click", function () {
  console.log("People clicked");
  fetchPeople(SWAPI_PEOPLE_URL);
});

// FETCH SHIPS
function fetchShips(SWAPI_SHIPS_URL) {
  fetch(SWAPI_SHIPS_URL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      renderShipsTable(tableContainerEl, data);
    });
}

shipsEl.addEventListener("click", function () {
  fetchShips(SWAPI_SHIPS_URL);
});

// FETCH PLANETS
function fetchPlanets(SWAPI_PLANETS_URL) {
  fetch(SWAPI_PLANETS_URL)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      renderPlanetsTable(tableContainerEl, data);
    });
}

planetsEl.addEventListener("click", function () {
  fetchShips(SWAPI_PLANETS_URL);
});

// RENDER CHARACTERS
function renderPeopleTable(peopleTableContainerEl, peopleData) {
  let peopleHTML = "";
  for (let person of peopleData.results) {
    peopleHTML += `
      <tr>
        <td>${person.name}</td>
        <td>${person.height}</td>
        <td>${person.mass}</td>
        <td>${person.birth_year}</td>
        <td>${person.gender}</td>
        <td>${person.films.length}</td>
      </tr>
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
          <th>Appearances count</th>
        </tr>
      </thead>
      <tbody>${peopleHTML}</tbody>
    </table>
    <button id="peoplePaginationPrev">Previous Page</button>
    <button id="peoplePaginationNext">Next Page</button>
  `;

  const peoplePreviousBtn = peopleTableContainerEl.querySelector(
    "#peoplePaginationPrev"
  );
  const peopleNextBtn = peopleTableContainerEl.querySelector(
    "#peoplePaginationNext"
  );

  if (!peopleData.previous) {
    peoplePreviousBtn.disabled = true;
  }

  if (!peopleData.next) {
    peopleNextBtn.disabled = true;
  }

  peoplePreviousBtn.addEventListener("click", function () {
    fetchPeople(peopleData.previous);
  });
  peopleNextBtn.addEventListener("click", function () {
    fetchPeople(peopleData.next);
  });
}

// RENDER SHIPS
function renderShipsTable(shipsTableContainerEl, shipsData) {
  let shipsHTML = "";
  for (let ship of shipsData.results) {
    shipsHTML += `
      <tr>
        <td>${ship.name}</td>
        <td>${ship.model}</td>
        <td>${ship.manufacturer}</td>
        <td>${ship.cost_in_credits}</td>
        <td>${ship.passengers}</td>
        <td>${ship.starship_class}</td>
      </tr>
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
      <tbody>${shipsHTML}</tbody>
    </table>
    <button id="shipsPaginationPrev">Previous Page</button>
    <button id="shipsPaginationNext">Next Page</button>
  `;

  const shipsPreviousBtn = shipsTableContainerEl.querySelector(
    "#shipsPaginationPrev"
  );
  const shipsNextBtn = shipsTableContainerEl.querySelector(
    "#shipsPaginationNext"
  );

  if (!shipsData.previous) {
    shipsPreviousBtn.disabled = true;
  }

  if (!shipsData.next) {
    shipsNextBtn.disabled = true;
  }

  shipsPreviousBtn.addEventListener("click", function () {
    fetchShips(shipsData.previous);
  });
  shipsNextBtn.addEventListener("click", function () {
    fetchShips(shipsData.next);
  });
}

// RENDER PLANETS
function renderPlanetsTable(planetsTableContainerEl, planetsData) {
  let planetsHTML = "";
  for (let planet of planetsData.results) {
    planetsHTML += `
      <tr>
        <td>${planet.name}</td>
        <td>${planet.population}</td>
        <td>${planet.climate}</td>
        <td>${planet.gravity}</td>
        <td>${planet.terrain}</td>
      </tr>
    `;
  }

  planetsTableContainerEl.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Population</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
        </tr>
      </thead>
      <tbody>${planetsHTML}</tbody>
    </table>
    <button id="planetsPaginationPrev">Previous Page</button>
    <button id="planetsPaginationNext">Next Page</button>
  `;

  const planetsPreviousBtn = planetsTableContainerEl.querySelector(
    "#planetsPaginationPrev"
  );
  const planetsNextBtn = planetsTableContainerEl.querySelector(
    "#planetsPaginationNext"
  );

  if (!planetsData.previous) {
    planetsPreviousBtn.disabled = true;
  }

  if (!planetsData.next) {
    planetsNextBtn.disabled = true;
  }

  planetsPreviousBtn.addEventListener("click", function () {
    fetchPlanets(planetsData.previous);
  });
  planetsNextBtn.addEventListener("click", function () {
    fetchPlanets(planetsData.next);
  });
}
