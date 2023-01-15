

var postArea = document.getElementById("post-area");

// // postArea.addEventListener("click", create);
function create() {
  for (var i = 0; i < 35; i++) {
    let post = [postStructureCreate()];
    addChildren(postArea, post)
  }
  console.log(post);
}
function postStructureCreate() {
  let post = createDivWithClass("post");  
  postChildsArray = [createVisualsArea(), createCaptionArea()];
  addChildren(post, postChildsArray);  // [visuals, captionArea];
  return post;

}
function createVisualsArea() {
  let visualsArea = createDivWithClass("visuals");
  let visualsUserInfo = createDivWithClass("visuals-userInfo");
  let userInfoStories = createDivWithId("userInfo-stories");
  let userInfoHandle = createDivWithId("userInfo-handle");
  let visualsBottomNav = createDivWithId("visuals-bottomNav");
  populateVisualsAreaBottomNav(visualsBottomNav);
  visualsUserInfoChildsArray = [userInfoStories, userInfoHandle];
  visualsChildsArray = [visualsUserInfo, visualsBottomNav];
  addChildren(visualsUserInfo, visualsUserInfoChildsArray);
  addChildren(visualsArea, visualsChildsArray);
  return visualsArea;



}
function createCaptionArea(){
  let captionArea = createDivWithClass("captionArea");
  let likesCounterBox = createDivWithId("likesCounter");
  let likesCounterNumber = createDivWithId("likesCounter-number");
  let likesCounterLikes = createDivWithId("likesCounter-likes");
 
 
 
  likesCounterBoxChildsArray = [likesCounterNumber, likesCounterLikes];  
  addChildren(likesCounterBox, likesCounterBoxChildsArray);
  captionAreaChildsArray = [likesCounterBox];
  addChildren(captionArea, captionAreaChildsArray);
  return captionArea;
}
function createDivWithClass(classString) {
  var element = document.createElement('div');
  element.classList.add(classString);
  return element;
}
function createDivWithId(idString) {
  var element = document.createElement('div');
  element.id = idString;
  return element;
}
function addChildren(parent, childrenArray) {
  if (childrenArray instanceof Array) {
    for (var child = 0; child < childrenArray.length; child++) {
      parent.appendChild(childrenArray[child]);
    }
  } else if (!(childrenArray instanceof Array)) {
    let child = childrenArray;
    parent.appendChild(child);
  }
  return parent;
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