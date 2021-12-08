let joke = document.getElementById('joke');
let jokebtn = document.getElementById('jokebtn');

let count =0 ;
let array = [];
let fetchJoke = async ()=>{
    count++;


    let setHeader = {
        headers:{
            Accept: 'application/json'
        }
    }


    const response = await fetch("https://icanhazdadjoke.com/", setHeader)
    const data = await response.json();
    console.log(data.joke);

    joke.innerHTML = data.joke
if(count<11){
    array.push(data.joke)


        let newElement = document.createElement('li');
        let newText  = document.createTextNode(data.joke)
        newElement.appendChild(newText);
        document.getElementById('jokeArray').appendChild(newElement)

}

else{
    array.shift()
    array.push(data.joke)
    document.getElementById('jokeArray').innerHTML = null
    for(let i = 0; i<10; i++){
        
        let newElement = document.createElement('li');
        let newText  = document.createTextNode(array[i])
        newElement.appendChild(newText);
        document.getElementById('jokeArray').appendChild(newElement)
    }

}





}

jokebtn.addEventListener('click', fetchJoke);
fetchJoke();