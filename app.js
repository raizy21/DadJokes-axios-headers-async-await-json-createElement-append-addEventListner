//https://icanhazdadjoke.com/api#google_vignette     API

const jokes = document.querySelector("#jokes"); //select ul
const button = document.querySelector("button"); //select button

  //create a function for creating a random joke with async
const addNewJoke = async () => {
  const jokeText = await getDadJoke();         //extract a joke api headers for json
  const newLI = document.createElement("LI"); //create new li for jokes ul

  newLI.append(jokeText); //append text into li

  jokes.append(newLI); //append li into ul
};

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } }; //accept header for fetching json instead of html
    const res = await axios.get("https://icanhazdadjoke.com/", config); //fetch AXIOS with headers parameter
    return res.data.joke; //extract the joke from json
  } catch (e) {
    return "NO JOKES AVAILABLE! SORRY :("; //return a error
  }
};

button.addEventListener("click", addNewJoke); //button event click
