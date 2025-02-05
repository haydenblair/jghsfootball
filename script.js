// script.js

// 1. Game Data Array (Now includes 'date', moves 'result' to overlay)
const gameData = [
  {
    id: 1,
    title: "John Glenn vs. Southgate Aquinas",
    score: "10-7",
    result: "Win",    // Will be in the top-left overlay
    year: 1989,       // Top-right overlay
    date: "Sep 8, 1989",
    thumbnail: "images/1.jpg",
    videoUrl: "https://www.youtube.com/embed/mHmKYBr3thw?rel=0"
  },
  {
    id: 2,
    title: "John Glenn vs. Dearborn Heights Robichaud",
    score: "21-6",
    result: "Win",
    year: 1989,
    date: "Oct 27, 1989",
    thumbnail: "images/2.jpg",
    videoUrl: "https://www.youtube.com/embed/zGLYwquLkyg?rel=0"
  },
  {
    id: 3,
    title: "John Glenn vs Bay City Central",
    score: "36-6",
    result: "Win",
    year: 1990,
    date: "Aug 31, 1990",
    thumbnail: "images/3.jpg",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2?rel=0"
  },
  {
    id: 4,
    title: "John Glenn vs. Southgate Aquinas",
    score: "28-6",
    result: "Win",
    year: 1990,
    date: "Sep 7, 1990",
    thumbnail: "images/4.jpg",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2?rel=0"
  },
  {
    id: 5,
    title: "John Glenn vs. Saginaw Heritage",
    score: "28-0",
    result: "Win",
    year: 1990,
    date: "Sep 14, 1990",
    thumbnail: "images/5.jpg",
    videoUrl: "https://www.youtube.com/embed/LrigpKXO6xI?rel=0"
  },
  {
    id: 6,
    title: "John Glenn vs. Mt. Pleasant",
    score: "21-0",
    result: "Win",
    year: 1990,
    date: "Sep 21, 1990",
    thumbnail: "images/6.jpg",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2?rel=0"
  },
  {
    id: 7,
    title: "John Glenn vs. Bridgeport",
    score: "35-0",
    result: "Win",
    year: 1990,
    date: "Sep 28, 1990",
    thumbnail: "images/7.jpg",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2?rel=0"
  },
  {
    id: 8,
    title: "John Glenn vs. Belding",
    score: "55-21",
    result: "Win",
    year: 1990,
    date: "Oct 5, 1990",
    thumbnail: "images/8.jpg",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2?rel=0"
  },
  {
    id: 9,
    title: "John Glenn vs. Saginaw Buena Vista",
    score: "52-12",
    result: "Win",
    year: 1990,
    date: "Oct 12, 1990",
    thumbnail: "images/9.jpg",
    videoUrl: "https://www.youtube.com/embed/kNNx9Pq-0Zk?rel=0"
  },
  {
    id: 10,
    title: "John Glenn vs. Inkster",
    score: "56-0",
    result: "Win",
    year: 1990,
    date: "Oct 26, 1990",
    thumbnail: "images/10.jpg",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2?rel=0"
  },
  {
    id: 11,
    title: "John Glenn vs. Cheboygan",
    score: "7-41",
    result: "Loss",
    year: 1990,
    date: "Nov 3, 1990",
    thumbnail: "images/11.jpg",
    videoUrl: "https://www.youtube.com/embed/NQ5sqYd9JIk?rel=0"
  },
  {
    id: 12,
    title: "1990 Awards",
    score: "1",
    result: "Win",
    year: 1990,
    date: "Nov 3, 1990",
    thumbnail: "images/12.jpg",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2?rel=0"
  }
  // Add more games as needed
];

// 2. Elements from the DOM
const gameListContainer = document.getElementById("game-list");
const videoOverlay = document.getElementById("video-overlay");
const closeOverlayBtn = document.getElementById("close-overlay");
const videoTitleElement = document.getElementById("video-title");
const videoPlayerElement = document.getElementById("video-player");

// 3. Create each "game card" element
function createGameCard(game) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("game-card");

  // Thumbnail
  const img = document.createElement("img");
  img.src = game.thumbnail;
  img.alt = game.title;

  // Overlays
  const yearOverlayDiv = document.createElement("div");
  yearOverlayDiv.classList.add("year-overlay");
  yearOverlayDiv.textContent = game.year;

  const resultOverlayDiv = document.createElement("div");
  resultOverlayDiv.classList.add("result-overlay");
  // If result is Win -> .win, else .loss
  resultOverlayDiv.classList.add(game.result.toLowerCase());
  resultOverlayDiv.textContent = game.result;

  // Info container
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("game-card-info");

  // Title
  const titleEl = document.createElement("h3");
  titleEl.textContent = game.title;

  // Score
  const scoreEl = document.createElement("p");
  scoreEl.textContent = `Score: ${game.score}`;

  // Date
  const dateEl = document.createElement("p");
  dateEl.textContent = `Date: ${game.date}`;

  // Append to infoDiv
  infoDiv.appendChild(titleEl);
  infoDiv.appendChild(scoreEl);
  infoDiv.appendChild(dateEl);

  // Append everything to the card
  cardDiv.appendChild(img);
  cardDiv.appendChild(yearOverlayDiv);
  cardDiv.appendChild(resultOverlayDiv);
  cardDiv.appendChild(infoDiv);

  // When card is clicked, open overlay
  cardDiv.addEventListener("click", () => {
    openVideoOverlay(game);
  });

  return cardDiv;
}

// 4. Populate the game list container
function populateGameList() {
  gameData.forEach((game) => {
    const card = createGameCard(game);
    gameListContainer.appendChild(card);
  });
}

// 5. Open video overlay
function openVideoOverlay(game) {
  videoTitleElement.textContent = game.title;
  videoPlayerElement.src = game.videoUrl;
  videoOverlay.style.display = "flex";
}

// 6. Close video overlay
function closeVideoOverlay() {
  // Clear the iframe to stop playback
  videoPlayerElement.src = "";
  videoOverlay.style.display = "none";
}

// 7. Attach event to close button
closeOverlayBtn.addEventListener("click", closeVideoOverlay);

// 8. Initialize the page
populateGameList();

