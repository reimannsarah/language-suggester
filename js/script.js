// function userInput (event) {
//   event.preventDefault ();
// }

function languageresult (event) {
  event.preventDefault ();
  const thanks = document.getElementById("thanks"); 
  const name = document.querySelector("#inputname").value;
  const style = document.querySelector("input[name='style']:checked").value;
  const movie = document.querySelector("input[name='movie']:checked").value;
  const scenario = document.querySelector("input[name='scenario']:checked").value;
  const song = document.querySelector("input[name='song']:checked").value;
  const hygiene = document.querySelector("input[name='hygiene']:checked").value;
  
  thanks.innerText = name;

  if (style==="style3" && movie === "movie2" && scenario === "scenario3" && song === "song1" && hygiene === "hygiene2") {
    language.innerText="Python";
  } else if (style === "style2" && movie === "movie3" && scenario === "scenario1" && song === "song3" && hygiene === "hygiene2") {
    language.innerText = "C#";
  } else if (style === "style1" && movie === "movie2" && scenario === "scenario3" && song === "song1" && hygiene === "hygiene2") {
    language.innerText = "Ruby";
  } else if (style === "style3" && movie === "movie2" && scenario === "scenario1" && song === "song3" && hygiene === "hygiene2") {
    language.innerText = "Python";
  } else if (style === "style3" && movie === "movie3" && scenario === "scenario3" && song === "song2" && hygiene === "hygiene1") {
    language.innerText = "C#";
  } else if (style === "style2" && movie === "movie3" && scenario === "scenario1" && song === "song2" && hygiene === "hygiene3") {
    language.innerText = "Ruby";
  } else if (style === "style1" && movie === "movie1" && scenario === "scenario1" && song === "song1" && hygiene === "hygiene1") {
    language.innerText = "Rust";
  } else if (style === "style2" && movie === "movie2" && scenario === "scenario2" && song === "song2" && hygiene === "hygiene2") {
    language.innerText = "JavaScript";
  } else if (style === "style3" && movie === "movie3" && scenario === "scenario3" && song === "song3" && hygiene === "hygiene3") {
    language.innerText = "Go";
  } else if (style === "style2" && movie === "movie2" && scenario === "scenario2" && song === "song2" && hygiene === "hygiene3") {
    language.innerText = "Rust";
  } else {
    language.innerText = "Swift";
  }
}


window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit",languageresult)
})
