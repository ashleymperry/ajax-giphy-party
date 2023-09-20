const $gifArea = $("#gif-area");
const $searchInput = $("#search");

//Add GIF

function addGif(res) {
  let numResults = res.data.length;
  if (numResults) {
    let randomIdx = Math.floor(Math.random() * numResults);
    let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
    let $newGif = $("<img>", {
      src: res.data[randomIdx].images.original.url,
      class: "w-100"
    });
    $newCol.append($newGif);
    $gifArea.append($newCol);
  }
}

//Handle form submission

$("form").on("submit", async function(evt) {
  evt.preventDefault();

  let searchTerm = $searchInput.val();
  $searchInput.val("");

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "vtGWuRQgP1RC1lelauTn7wr7AiP3OBmE"
    }
  });
  addGif(response.data);
});

//Remove GIF

$("#remove").on("click", function() {
  $gifArea.empty();
});
console.log("Let's get this party started!")