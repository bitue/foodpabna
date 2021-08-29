
const loadData = () => {
  document.getElementById("load").style.display = "block"
  //clear previous data
  document.getElementById("add-card").textContent = ``
  let food = document.getElementById("input-field").value;
  document.getElementById("input-field").value = ``

  //get the value of the input field 


  //make the url dynamic 

  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`

  //using fetch function to call the api and get data


  fetch(url)
    .then(res => res.json())
    .then(food => displayData(food.meals))
}
//global variable scope variable 
let addCard = document.getElementById("add-card")


const displayData = (foods) => {
  if(foods==null){
    alert('No search result found')
    document.getElementById("load").style.display = "none"
    return
  }
  document.getElementById("load").style.display = "none"



  foods.forEach(food => {


    console.log(food)
    let div = document.createElement("div")
    div.innerHTML = `

      <div class=" flex flex-col md:flex-row  px-5 py-5 bg-gray-200 rounded-3xl w-9/12 mx-auto md:space-x-5">
        <div class=" md:w-1/4 w-full">
            <img class="w-full" src=${food.strMealThumb} alt="">
        </div>
        <div class="des md:w-3/4 w-full h-72 overflow-y-auto space-y-4 ">
            <h2 class="text-2xl font-bold">Name: ${food.strMeal}</h2>
            <p class=""> ${food.strInstructions}</p>
            <a target="_blank"   class="px-5 py-1 bg-yellow-400 font-bold rounded-2xl hover:bg-yellow-600 inline-block cursor-pointer"  onclick='cookData("${food.idMeal}")'>how to cook</a>
            <a href=${food.strYoutube} target="_blank" class="px-5 py-1 bg-yellow-400 font-bold rounded-2xl hover:bg-yellow-600 inline-block">Search You tube</a>

        </div>

      </div>

      `
    addCard.appendChild(div)
  })



}

//call function which fetch data  after click the search event
document.getElementById("search-btn").addEventListener("click", loadData)
// document.getElementById("cook").addEventListener('click',cookData)

//using the function for cookData 

const cookData = (foodId) => {
  var b = foodId
  let link = window.location.href;

  link = link.slice(0, link.length - 9);
  console.log(link);
  url = `${link}/meal.html?name=` + encodeURIComponent(b);


  window.open(url, '_blank');


}