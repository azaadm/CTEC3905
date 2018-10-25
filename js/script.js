const hello = document.getElementById("hello");
//console.log(hello);
function greeting() {
  alert("BOO!");
  hello.textContent = "helolllwjdklewhdiwh";
}
hello.addEventListener("click", greeting);



// Get the modal
let modal = document.getElementById('WholeModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.getElementById('OGImg');
const img2 = document.getElementById('OGImg2');
const img3 = document.getElementById('OGImg3');
let modalImg = document.getElementById("BigImageID");
let captionText = document.getElementById("ImageName");


function OpenModel(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
img.addEventListener("click",OpenModel);
img2.addEventListener("click",OpenModel);
img3.addEventListener("click",OpenModel);


const close = document.getElementsByClassName("CloseWindow")[0];
function Closed(){
    modal.style.display = "none";
}
close.addEventListener("click", Closed);

// When the user clicks on <span> (x), close the modal
