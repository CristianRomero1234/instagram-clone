

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

    var captionArea = document.createElement('div');
    captionArea.classList.add("captionArea");

    visualsUserInfo.appendChild(userInfoStories);
    visualsUserInfo.appendChild(userInfoHandle);
    visuals.appendChild(visualsUserInfo);
    post.appendChild(visuals);
    post.appendChild(captionArea);
    postArea.appendChild(post);
  }
  console.log(post);
}
create();