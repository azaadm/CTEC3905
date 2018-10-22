const hello = document.getElementById("hello");
//console.log(hello);

function greeting() {
  alert("Hello!");
  hello.textContent = "Goodbye";
}

hello.addEventListener("click", greeting);
