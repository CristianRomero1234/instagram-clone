

var postArea = document.getElementById("post-area");

// // postArea.addEventListener("click", create);
function create() {
  for (var i = 0; i < 35; i++) {
    var post = document.createElement('div');
    post.classList.add("post");

    var visuals = document.createElement('div');
    visuals.classList.add("visuals");

    var visualsUserInfo = document.createElement('div');
    visualsUserInfo.classList.add("visuals-userInfo");

    var userInfoStories = document.createElement('div');
    userInfoStories.id = "userInfo-stories";

    var userInfoHandle = document.createElement('div');
    userInfoHandle.id = "userInfo-handle";

    var visualsBottomNav = document.createElement('div');
    visualsBottomNav.id = "visuals-bottomNav";
    populateVisualsAreaBottomNav(visualsBottomNav);
    var captionArea = document.createElement('div');
    captionArea.classList.add("captionArea");


    visualsUserInfo.appendChild(userInfoStories);
    visualsUserInfo.appendChild(userInfoHandle);
    visuals.appendChild(visualsBottomNav);
    visuals.appendChild(visualsUserInfo);
    post.appendChild(visuals);
    post.appendChild(captionArea);
    postArea.appendChild(post);
  }
  console.log(post);
}
function populateVisualsAreaBottomNav(visualsBottomNav) {
  let likeIcon = document.createElement('img');
  let commentIcon = document.createElement('img');
  let sendIcon = document.createElement('img');
  //let saveIcon = document.createElement('img');
  likeIcon.src = "./images/icons/heartIconTransparent.png"
  commentIcon.src = "./images/icons/commentsIcon.png"
  sendIcon.src = "./images/icons/sendTransparent.png"
  likeIcon.style = "order:1;";
  commentIcon.style = "order:2;";
  sendIcon.style = "order:3;";
  //saveIcon.src = "./images/icons"
  visualsBottomNav.appendChild(likeIcon); 
  visualsBottomNav.appendChild(commentIcon); 
  visualsBottomNav.appendChild(sendIcon);

}
create();