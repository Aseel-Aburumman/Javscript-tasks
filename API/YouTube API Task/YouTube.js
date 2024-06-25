document.getElementById("search-button").addEventListener("click", function () {
  const query = document.getElementById("search-query").value;
  fetchVideos(query);
});

function fetchVideos(query) {
  const apiKey = "AIzaSyDdX0wF23lAzBPq6H2-UlwRo2YIud1hFJg";
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${query}&key=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const videoResults = document.getElementById("video-results");
      videoResults.innerHTML = "";

      data.items.forEach((item) => {
        const videoItem = document.createElement("div");
        videoItem.classList.add("video-item");

        const videoThumbnail = document.createElement("img");
        videoThumbnail.src = item.snippet.thumbnails.medium.url;
        videoThumbnail.addEventListener("click", () => {
          playVideo(item.id.videoId, videoItem);
        });

        const videoTitle = document.createElement("h3");
        videoTitle.textContent = item.snippet.title;

        const videoDescription = document.createElement("p");
        videoDescription.textContent = item.snippet.description;

        videoItem.appendChild(videoThumbnail);
        videoItem.appendChild(videoTitle);
        videoItem.appendChild(videoDescription);

        videoResults.appendChild(videoItem);
      });
    })
    .catch((error) => {
      console.error("Error fetching videos:", error);
    });
}

function playVideo(videoId, videoItem) {
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.youtube.com/embed/${videoId}`;
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;

  videoItem.innerHTML = "";
  videoItem.appendChild(iframe);
}
