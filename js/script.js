function languageResult (event) {
  event.preventDefault();
  const result = document.querySelector("#result");
  const thanks = document.getElementById("thanks"); 
  const name = document.querySelector("#inputname").value;
  
  const style = document.querySelector("input[name='style']:checked").value;
  const movie = document.querySelector("input[name='movie']:checked").value;
  const scenario = document.querySelector("input[name='scenario']:checked").value;
  const song = document.querySelector("input[name='song']:checked").value;
  const hygiene = document.querySelector("input[name='hygiene']:checked").value;

  thanks.innerText = name;

  if (style==="style3" && movie === "movie2" && scenario === "scenario3" && song === "song1" && hygiene === "hygiene2") {
    result.removeAttribute("class");
    language.innerText="Python";  
  } else if (style === "style2" && movie === "movie3" && scenario === "scenario1" && song === "song3" && hygiene === "hygiene2") {
    result.removeAttribute("class");
    language.innerText = "C#";
  } else if (style === "style1" && movie === "movie2" && scenario === "scenario3" && song === "song1" && hygiene === "hygiene2") {
    result.removeAttribute("class");
    language.innerText = "Ruby";
  } else if (style === "style3" && movie === "movie2" && scenario === "scenario1" && song === "song3" && hygiene === "hygiene2") {
    result.removeAttribute("class");
    language.innerText = "Python";
  } else if (style === "style3" && movie === "movie3" && scenario === "scenario3" && song === "song2" && hygiene === "hygiene1") {
    result.removeAttribute("class");
    language.innerText = "C#";
  } else if (style === "style2" && movie === "movie3" && scenario === "scenario1" && song === "song2" && hygiene === "hygiene3") {
    result.removeAttribute("class");
    language.innerText = "Ruby";
  } else if (style === "style1" && movie === "movie1" && scenario === "scenario1" && song === "song1" && hygiene === "hygiene1") {
    language.innerText = "Rust";
    result.removeAttribute("class");
  } else if (style === "style2" && movie === "movie2" && scenario === "scenario2" && song === "song2" && hygiene === "hygiene2") {
    language.innerText = "JavaScript";
    result.removeAttribute("class");
  } else if (style === "style3" && movie === "movie3" && scenario === "scenario3" && song === "song3" && hygiene === "hygiene3") {
    result.removeAttribute("class");
    language.innerText = "Go";
  } else if (style === "style2" && movie === "movie2" && scenario === "scenario2" && song === "song2" && hygiene === "hygiene3") {
    result.removeAttribute("class");
    language.innerText = "Rust";
  } else {
    result.removeAttribute("class");
    language.innerText = "Swift";
  }  
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit",languageResult)
})