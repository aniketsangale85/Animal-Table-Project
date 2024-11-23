const bigCatsData = [
  {
    species: "Big Cat",
    name: "Tiger",
    size: "10 ft",
    location: "Asia",
    image: "images/tiger.jpg",
  },
  {
    species: "Big Cat",
    name: "Lion",
    size: "8 ft",
    location: "Africa",
    image: "images/lion.jpg",
  },
  {
    species: "Big Cat",
    name: "Leopard",
    size: "5 ft",
    location: "Africa and Asia",
    image: "images/leopard.jpg",
  },
  {
    species: "Big Cat",
    name: "Cheetah",
    size: "5 ft",
    location: "Africa",
    image: "images/cheetah.jpg",
  },
  {
    species: "Big Cat",
    name: "Caracal",
    size: "3 ft",
    location: "Africa",
    image: "images/caracal.jpg",
  },
  {
    species: "Big Cat",
    name: "Jaguar",
    size: "5 ft",
    location: "Amazon",
    image: "images/jaguar.jpg",
  },
];

const dogsData = [
  {
    species: "Dog",
    name: "Rottweiler",
    size: "2 ft",
    location: "Germany",
    image: "images/rottweiler.jpg",
  },
  {
    species: "Dog",
    name: "German Shepherd",
    size: "2 ft",
    location: "Germany",
    image: "images/german_shepherd.jpg",
  },
  {
    species: "Dog",
    name: "Labrador",
    size: "2 ft",
    location: "UK",
    image: "images/labrador.jpg",
  },
  {
    species: "Dog",
    name: "Alabai",
    size: "4 ft",
    location: "Turkey",
    image: "images/alabai.jpg",
  },
];

const bigFishData = [
  {
    species: "Big Fish",
    name: "Humpback Whale",
    size: "15 ft",
    location: "Atlantic Ocean",
    image: "images/whale.jpg",
  },
  {
    species: "Big Fish",
    name: "Killer Whale",
    size: "12 ft",
    location: "Atlantic Ocean",
    image: "images/killer_whale.jpg",
  },
  {
    species: "Big Fish",
    name: "Tiger Shark",
    size: "8 ft",
    location: "Ocean",
    image: "images/tiger_shark.jpg",
  },
  {
    species: "Big Fish",
    name: "Hammerhead Shark",
    size: "8 ft",
    location: "Ocean",
    image: "images/hammerhead_shark.jpg",
  },
];

function generateTable(data, containerId) {
  const container = document.getElementById(containerId);
  let tableHTML = `<table class="table table-bordered"><tr>`;

  data.forEach((item, index) => {
    tableHTML += `
            <td>
                <div class="animal-info">
                    <strong>Species:</strong> ${item.species}<br>
                    <strong>Name:</strong> ${item.name}<br>
                    <strong>Size:</strong> ${item.size}<br>
                    <strong>Location:</strong> ${item.location}
                </div>
                <img src="${item.image}" alt="${item.name}">
            </td>`;

    if ((index + 1) % 4 === 0 && index !== data.length - 1) {
      tableHTML += `</tr><tr>`;
    }
  });

  tableHTML += `</tr></table>`;
  container.innerHTML = tableHTML;
}

generateTable(bigCatsData, "bigCatsTable");
generateTable(dogsData, "dogsTable");
generateTable(bigFishData, "bigFishTable");
