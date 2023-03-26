const apiCall2 = async (call) => {
  const request2 = await fetch(
    `https://api.unsplash.com/search/photos?query=${call}&per_page=20&client_id=Az5mxRKorPPhF83198cBkP2XxlF49fMzYD-Bc98YNfc`
  );
  const response2 = await request2.json();
  console.log(response2);
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

        <a href="" download="${resp.links.download_location}">
        <img class="down-btn"src="imgs/download_btn.png"/>
        </a>

        </div>
         </div>
             `;
  });
  document.getElementById("photos").innerHTML = output2;
};

const apiCall1 = async () => {
  const request1 = await fetch(
    "https://api.unsplash.com/photos?client_id=Az5mxRKorPPhF83198cBkP2XxlF49fMzYD-Bc98YNfc"
  );
  const response1 = await request1.json();
  console.log(response1);
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
        <a href="" download="${
      resp.links.download_location
    }">
        <img class="down-btn"src="imgs/download_btn.png"/>
        </a>
        </div>
         </div>
         `;
  });
  document.getElementById("photos").innerHTML = output1;
  //     `
};

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
