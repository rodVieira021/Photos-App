//access-  Az5mxRKorPPhF83198cBkP2XxlF49fMzYD-Bc98YNfc

//secret- fZE2Dp2NfKqsj0DXls-vB87iv4nURR9tvlTGjigY96I

//https://api.unsplash.com/photos?client_id=Az5mxRKorPPhF83198cBkP2XxlF49fMzYD-Bc98YNfc

//https://api.unsplash.com/search/photos?query=car&per_page=20&client_id=Az5mxRKorPPhF83198cBkP2XxlF49fMzYD-Bc98YNfc

const apiCall2 = async (call) => {
  const request2 = await fetch(
    `https://api.unsplash.com/search/photos?query=${call}&per_page=20&client_id=Az5mxRKorPPhF83198cBkP2XxlF49fMzYD-Bc98YNfc`
  );
  const response2 = await request2.json();
  let output2 = "";
  response2.results.forEach((resp) => {
    console.log(resp.user);
    output2 += `
    <div class='container-photo'>
    <div class='aut-info'>
    <img class="autor-photo"src="${resp.user.profile_image.small}"/>
    <p><a class="aut-name"href= "${resp.user.social_instagram_username}" target="blank">${resp.user.first_name}</a></p>
    <a href="#" download="${resp.links.download}">Download</a>
    </div>
    </div>
    <img class="main-img"src='${resp.urls.regular}'/>
    <div class="button-text">
    <p class="p-txt-like">${resp.likes} Likes</p>
    <a href="#" download="${resp.links.download}"><img class="down-btn"src="imgs/download_btn.png"/></i></a>
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
  let output1 = "";
  //  console.log(response1);
  response1.forEach((resp) => {
    console.log(resp);
    output1 += `
        <div class='container-photo'>
        <div class='aut-info'>
        <img class="autor-photo"src="${resp.user.profile_image.small}"/>
        <p><a class="aut-name" href= "${
          resp.user.portfolio_url ?? resp.user.links.portfolio
        }" target="blank">${resp.user.first_name}</a></p>
        
        </div>
        <img class="main-img"src='${resp.urls.regular}'/>
        <div class="button-text">
        <p class="p-txt-like">${resp.likes} Likes</p>
        <a href="#" download="${
          resp.links.download
        }"><img class="down-btn"src="imgs/download_btn.png"/></i></a>
        </div>
         </div>
         `;
  });
  document.getElementById("photos").innerHTML = output1;
  //     `
};

document.getElementById("btn-search").addEventListener("click", function () {
  let input = document.getElementById("search").value;
  apiCall2(input);
});
apiCall1();

// https://www.w3schools.com/js/js_array_iteration.asp
// https://www.w3schools.com/js/js_classes.asp
// https://www.w3schools.com/js/js_mistakes.asp
// https://web.dev/learn/design/media-queries/
// https://codepen.io/jcplus/pen/oebJRO    grid waterfall
