let jokes = document.getElementById("joke-cont")
let jokes_btn = document.getElementById("random-botton")
let fetchedJokes;

//let fetchedJokes = fetch(`https://api.chucknorris.io/jokes/random`).then(res => res.json()).then(data => console.log(data.value))

jokes_btn.addEventListener("click",() =>{
    
  fetch(`https://api.chucknorris.io/jokes/random`).then(res => res.json()).then(data => fetchedJokes = data.value)

 

  jokes.textContent = fetchedJokes

  
    

})


