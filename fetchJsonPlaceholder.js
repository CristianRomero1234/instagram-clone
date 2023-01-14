async function getImage(){  fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
  .then((response) => response.json())
  .then((json) => {
  console.log(json[0].url);  
//    image.src = counter<=49 ? json[Number(`${counter}`)].url : json[0].url;
//    imagePlace.style.padding = "10px";
  })  
}
getImage();


async function getPost(){ fetch(`https://jsonplaceholder.typicode.com/posts/1`)
  .then((response) => response.json())
  .then((json) =>{ console.log(json.id);
    // authorId.innerText = json.userId;
    // postId.innerText = json.id;
    // postTitle.innerText = json.title;
    // postBody.innerText = json.body;
    // counter++;
    //               if(counter == 100){
    //                 counter = 1;
    //                 alert("reached end of registers, sending request for resource number = 1. \nEnd of the Example. Thank you!\nexample written by @cristianromero")
    //               }
      });
  
}
getPost();