// API Link https://icanhazdadjoke.com/

const jokes = document.querySelector('#joke');
const jokebtn = document.querySelector('#jokebtn')



const generateJoke = async ()=>{

    try {


const setHeader = {
    headers: {
        Accept: "application/json"
    }
}
   const response =  await fetch("https://icanhazdadjoke.com/", setHeader)
    
   const data= await response.json() 
   jokes.innerHTML = data.joke;
}catch(err){

console.log(`the error is ${err}`); }

}



jokebtn.addEventListener('click',generateJoke);
generateJoke();

