var postArea = document.getElementById("post-area");

function createVisualsArea() {
  let visualsUserInfo = elementCreator(3, 0, "visuals-userInfo", [createDivWithId("userInfo-stories"), createDivWithId("userInfo-handle")]);
  let visualsImageContainer = elementCreator(3, 0, "visuals-image", elementCreator(4, 'img'))

  let visualsBottomNav = populateVisualsAreaBottomNav(elementCreator(0, 1, "visuals-bottomNav"));
  let visualsArea = elementCreator(3, 0, "visuals", [visualsUserInfo, visualsImageContainer, visualsBottomNav]);//create element with class visuals and add children
  return visualsArea;
}
function populateVisualsAreaBottomNav(visualsBottomNav) {
  let likeIcon = elementCreator(1, 1);
  let commentIcon = elementCreator(1, 2);
  let sendIcon = elementCreator(1, 3);
  addChildren(visualsBottomNav, [likeIcon, commentIcon, sendIcon])
  return visualsBottomNav;
}
function createCaptionArea() {
  let caption = elementCreator(3, 1, "caption", [elementCreator(3, 1, "text", [elementCreator(5, 'p', 1, "commentBody")])])
  let comments = elementCreator(3, 0, "comments", [caption]);
  let likesCounterBox = elementCreator(3, 1, "likesCounter", [elementCreator(0, 1, "likesCounter-number"), elementCreator(0, 1, "likesCounter-likes")]);
  let captionArea = elementCreator(3, 0, "captionArea", [likesCounterBox, comments]);
  return captionArea;
}
function createDivWithClass(classString) {//Returns a HTML Object <div> with class of parameter
  var element = document.createElement('div');
  element.classList.add(classString);
  return element;
}
function createDivWithId(idString) {//Returns a HTML Object <div> with id of parameter
  var element = document.createElement('div');
  element.id = idString;
  return element;
}
function addChildren(parent, childrenArray) {// Returns a HTML Object with children appended
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
function elementCreator(mode, ...args) {//Dependending on selected mode and parameters returns a HTML Object, with posiblity of create othe kind of tags
  switch (mode) {
    case 0:
      if (args[0] === 0) {
        return createDivWithClass(args[1]);
      }
      return createDivWithId(args[1]);
    case 1:
      let icon = document.createElement('img');

      icon.style = `order:${args[0]}; height:20px; width:20px;`;


      let sources = ["./images/icons/heartIconTransparent.png", "./images/icons/commentsIcon.png", "./images/icons/sendTransparent.png"]
      icon.src = sources[args[0] - 1];
      return icon;
    case 2:
      var element = document.createElement(args[0]);
      args[1] === 0 ? element.classList.add(args[2]) : element.id = args[2];
      return element;
    case 3://Create element with children
      if (args[0] === 0) {
        var element = createDivWithClass(args[1]);
        return addChildren(element, args[2]);
      }
      var element = createDivWithId(args[1]);
      return addChildren(element, args[2]);
    case 4: // get image url from jsonplaceholder API
      let image = document.createElement('img');
      let imageFetched = async () => {
        await fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
          .then((response) => response.json())
          .then((json) => {
            console.log(json[0].url);
            image.src = json[0].url;
            image.style = "height:300px;width:430px;"
          })
      }
      let url = imageFetched();
      return image;
    case 5://fetch post from  jsonplaceholder
      let postBody = document.createElement(args[0]);
        let postFetched = async () => {
          await fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((json) => {
              console.log(json);
              postBody.innerText = json.body;
              postBody.style = "text-overflow: ellipsis;"
              // authorId.innerText = json.userId; 
              //     // postId.innerText = json.id;
              //     // postTitle.innerText = json.title;
            })
        }
      let returnedValue = postFetched();
      return postBody;

  }
}
function createPostStructure() {//Creates a placeholder strucuture of a post, returns an HTML Object with all the described sections of a post, the object can be manipulated and added API data
  let post = elementCreator(3, 0, "post", [createVisualsArea(), createCaptionArea()]);
  return post;
}
function create() {
  for (var i = 0; i < 35; i++) {
    let post = createPostStructure();
    addChildren(postArea, post);
  }
}
create();
