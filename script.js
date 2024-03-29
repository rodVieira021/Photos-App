const apiCall1 = async () => {
  const request1 = await fetch(
    "https://api.unsplash.com/photos?client_id=Az5mxRKorPPhF83198cBkP2XxlF49fMzYD-Bc98YNfc"
  );
  const response1 = await request1.json();
  let output1 = "";
  response1.forEach((resp) => {
    output1 += `
        <div class='container-photo'>
        <div class='aut-info'>
        <img class="autor-photo"src="${resp.user.profile_image.small}"/>
        <p><a class="aut-name" href= "${
          resp.user.portfolio_url ?? resp.user.links.portfolio
        }" target="blank">${resp.user.first_name}</a></p>
        
        </div>
        <a href="${resp.urls.regular}" target="_blank">
        <img class="main-img"src='${resp.urls.regular}'/>
        </a>
        <div class="button-text">
        <p class="p-txt-like">${resp.likes} Likes</p>
        </div>
         </div>
         `;
  });

  document.getElementById("photos").innerHTML = output1;
  //     `
};

const apiCall2 = async (call) => {
  const request2 = await fetch(
    `https://api.unsplash.com/search/photos?query=${call}&per_page=20&client_id=Az5mxRKorPPhF83198cBkP2XxlF49fMzYD-Bc98YNfc`
  );
  const response2 = await request2.json();
  let output2 = "";
  response2.results.forEach((resp) => {
    output2 += `
    <div class='container-photo'>
        <div class='aut-info'>
        <img class="autor-photo"src="${resp.user.profile_image.small}"/>
        <p><a class="aut-name" href= "${
          resp.user.portfolio_url ?? resp.user.links.portfolio
        }" target="blank">${resp.user.first_name}</a></p>
        
        </div>
        <a href="${resp.urls.regular}" target="_blank">
        <img class="main-img" src='${resp.urls.regular}'/>
        </a>
        <div class="button-text">
        <p class="p-txt-like">${resp.likes} Likes</p>
        </div>
         </div>
             `;
  });
  document.getElementById("photos").innerHTML = output2;
};
const checkbox = document
  .getElementById("checkbox")
  .addEventListener("change", () => {
    const mainDiv = document.querySelector(".main");
    mainDiv.classList.toggle("dark");

    const darkOn = mainDiv.classList.contains("dark");
    localStorage.setItem("darkOn", darkOn);
  });

const darkOn = localStorage.getItem("darkOn");
if (darkOn === "true") {
  document.querySelector(".main").classList.add("dark");
} else {
  document.querySelector(".main").classList.remove("dark");
}

document.getElementById("btn-search").addEventListener("click", function () {
  let input = document.getElementById("search");
  apiCall2(input.value);
  input.value = "";
});

document.getElementById("search").addEventListener("keydown", function (e) {
  let input = document.getElementById("search");
  if (e.key === "Enter" && input.value !== "") {
    apiCall2(input.value);
    input.value = "";
  }
});

apiCall1();
