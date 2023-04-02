var postArea = document.getElementById("post-area");

function createVisualsArea(...args) {
  let visualsUserInfo = elementCreator(3, 0, "visuals-userInfo", [createDivWithId("userInfo-stories"), createDivWithId("userInfo-handle")]);
  let visualsBottomNav = populateVisualsAreaBottomNav(elementCreator(0, 1, "visuals-bottomNav"));
  if (args[0] == undefined) {
    let visualsImageContainer = elementCreator(3, 0, "visuals-image", elementCreator(4, 'img'));
    let visualsArea = elementCreator(3, 0, "visuals", [visualsUserInfo, visualsImageContainer, visualsBottomNav]);//create element with class visuals and add children
    return visualsArea;
  } else {
    let visualsUserInfo = elementCreator(3, 0, "visuals-userInfo", [createDivWithId("userInfo-stories"), createDivWithId("userInfo-handle")]);
    let visualsImageContainer = elementCreator(3, 0, "visuals-image", elementCreator(7, args[0]));
    
    let visualsArea = elementCreator(3, 0, "visuals", [visualsUserInfo, visualsImageContainer, visualsBottomNav]);//create element with class visuals and add children
    return visualsArea;
  }
}
function populateVisualsAreaBottomNav(visualsBottomNav) {
  let likeIcon = elementCreator(1, 1);
  let commentIcon = elementCreator(1, 2);
  let sendIcon = elementCreator(1, 3);
  addChildren(visualsBottomNav, [likeIcon, commentIcon, sendIcon])
  return visualsBottomNav;
}
function createCaptionArea(...args) {
  if (args[0] == undefined) {
    let caption = elementCreator(3, 1, "caption", [elementCreator(3, 1, "text", [elementCreator(5, 'p', 1, "commentBody")])])
    let comments = elementCreator(3, 0, "comments", [caption]);
    let likesCounterBox = elementCreator(3, 1, "likesCounter", [elementCreator(0, 1, "likesCounter-number"), elementCreator(0, 1, "likesCounter-likes")]);
    let captionArea = elementCreator(3, 0, "captionArea", [likesCounterBox, comments]);
    return captionArea;
  }else{
    let caption = elementCreator(3, 1, "caption", [elementCreator(3, 1, "text", [elementCreator(8, args[0])])])
    let comments = elementCreator(3, 0, "comments", [caption]);
    let likesCounterBox = elementCreator(3, 1, "likesCounter", [elementCreator(0, 1, "likesCounter-number"), elementCreator(0, 1, "likesCounter-likes")]);
    let captionArea = elementCreator(3, 0, "captionArea", [likesCounterBox, comments]);
    return captionArea;

  }
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
    case 4:// get image url from jsonplaceholder API
      let image = document.createElement('img');
      let imageFetched = async () => {
        await fetch("https://my-json-server.typicode.com/CristianRomero1234/instagramDb/posts/4")
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            image.src = json.imageUrl;
            image.style = "height:300px;width:100%;"
          })
      }
      let url = imageFetched();
      return image;
    case 5://fetch post from  jsonplaceholder
      let postBody = document.createElement(args[0]);
      let postFetched = async () => {
        await fetch("https://my-json-server.typicode.com/CristianRomero1234/instagramDb/posts/4")
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            postBody.innerText = json.content;
            postBody.style = "text-overflow: ellipsis;"
            // authorId.innerText = json.userId; 
            //     // postId.innerText = json.id;
            //     // postTitle.innerText = json.title;
          })
      }
      let returnedValue = postFetched();
      return postBody;
    case 6://return empty image to debug, etc
      let imageFake = document.createElement('img');
      let test = () => {
        imageFake.src = "";
        imageFake.style = "height:300px;width:400px;"
      }
      let eee = test();
      return imageFake;
    case 7:
      // get image url from jsonplaceholder API by Id mode4 extension
      let imageElement = document.createElement('img');
      let imageFetchedById = async () => {
        await fetch(`https://my-json-server.typicode.com/CristianRomero1234/instagramDb/posts/${args[0]}`)
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            imageElement.src = json.imageUrl;
            imageElement.style = "height:300px;width:100%; max-width:400px;"
          })
      }
      let urlById = imageFetchedById();
      if(imageElement.src == undefined){
        imageElement.src = "https://images.unsplash.com/photo-1594568284297-7c64464062b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bm8lMjBjb3B5cmlnaHR8ZW58MHx8MHx8&w=1000&q=80";
      }
      return imageElement;
    case 8:
      //fetch post from  jsonplaceholder by ID mode5 extension
      let postBodyelement = document.createElement('p');
      let postFetchedById = async () => {
        await fetch(`https://my-json-server.typicode.com/CristianRomero1234/instagramDb/posts/${args[0]}`)
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            postBodyelement.innerText = json.content;
            postBodyelement.style = "text-overflow: ellipsis;"
            // authorId.innerText = json.userId; 
            //     // postId.innerText = json.id;
            //     // postTitle.innerText = json.title;
          })
      }
      let returnedValuebyId = postFetchedById();
      if(postBodyelement.innerText == undefined){
        postBodyelement.innerText = "Thanks to the new advancements in technology we can observe the vast universe that sorround us #Space";
      }
      return postBodyelement;
  }
}

function createPostStructure2(fakeId) {//Creates a placeholder structure of a post, returns an HTML Object with all the described sections of a post, the object can be manipulated and added API data
  let post = elementCreator(3, 0, "post", [createVisualsArea(fakeId), createCaptionArea(fakeId)]);
  return post;
}

function create2() {
  for (var i = 0; i < 35; i++) {
    if (i >0 && i < 9) {
      let post = createPostStructure2(i);
      addChildren(postArea, post);
    } else {
      var randomId =  Math.floor(Math.random() * 10) > 0 ? Math.floor(Math.random() * 10) : Math.floor(Math.random() * 10);
      let post = createPostStructure2(randomId);
      addChildren(postArea, post);
      
    }

  }
}

function createPostStructure() {//Creates a placeholder structure of a post, returns an HTML Object with all the described sections of a post, the object can be manipulated and added API data
  let post = elementCreator(3, 0, "post", [createVisualsArea(), createCaptionArea()]);
  return post;
}

function create() {
  for (var i = 0; i < 35; i++) {
    let post = createPostStructure();
    addChildren(postArea, post);
  }
}
create2();
