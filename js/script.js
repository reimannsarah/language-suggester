function userInput (event) {
  event.preventDefault ();
  const name = document.querySelector("#inputname").value;
  const style = document.querySelector("input[name='stle']:checked").value;
  const movie = document.querySelector("input[name='movie']:checked").value;
  const scenario = document.querySelector("input[name='scenario']:checked").value;
  const song = document.querySelector("input[name='song']:checked").value;
  const hygiene = document.querySelector("input[name='hygiene']:checked").value;
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", userInput)
})
