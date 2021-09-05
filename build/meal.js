const displayMealDetails = (data) => {
    let add = document.getElementById('add-meal')
    console.log(data)
    document.getElementById('h1').style.display = 'block'
    let div = document.createElement('div')
    div.innerHTML = `

    <h1 class="text-3xl font-bold text-center my-5 ">How to cook <span class='text-yellow-600'> ${data.strMeal} </span></h1>
    <div class="grid md:grid-cols-3 my-5">
        <div class="img ">
            <img class=' h-full px-5 py-5 ' src="${data.strMealThumb}" alt="">

        </div>
        <div class="process   md:col-span-2">
            <h2 class="text-center font-bold text-3xl ">Please note this carefully  <span class='text-yellow-600'>before Cook!!!!</span></h2>
          <p class='p-5 text-1xl  '>
          ${data.strInstructions}

          </p> 
    
        </div>
    
    </div>
    
    
    
    `


    document.getElementById('loadc').style.display='none'
    add.appendChild(div)
    displayIngredients(data)
}

const displayIngredients = (data) => {
    let str;
    let str1;
    let nameIn = []
    let measureIn = []

    for (i = 1; i <= 20; i++) {
        str = 'strIngredient' + i
        str1 = 'strMeasure' + i

        if (data[str].length != 0) {

            nameIn.push(data[str])
            measureIn.push(data[str1])
        }
    }
    console.log(nameIn)
    let add = document.getElementById('add-here')
    for (i = 0; i < nameIn.length; i++) {
        let div = document.createElement('div')
        div.classList.add("shadow-lg")
        div.classList.add("rounded-2xl")
        div.classList.add("hover:bg-gray-200")



        div.innerHTML = `
      <div class="">
      <img src="https://www.themealdb.com/images/ingredients/${nameIn[i]}.png" alt="">
      </div>
      <h2 class="text-1xl font-bold text-yellow-600 text-center">${nameIn[i]} => ${measureIn[i]}</h2>
      
      `
        add.appendChild(div)
    }


}






window.onload = function () {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;

    for (var i = 0, l = params.length; i < l; i++) {
        tmp = params[i].split('=');
        data[tmp[0]] = tmp[1];
    }
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data.name}`)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
}

