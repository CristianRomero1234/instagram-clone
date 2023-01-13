var postArea = document.getElementById("post-area");

postArea.addEventListener("click", create);
function create(){
    var post = document.createElement('div');
    post.classList.add("post");
    var visuals = document.createElement('div');
    visuals.classList.add("visuals");
    var captionArea = document.createElement('div');
    captionArea.classList.add("captionArea");
    post.appendChild(visuals);
    post.appendChild(captionArea);
    postArea.appendChild(post);
    // console.log(post);
}