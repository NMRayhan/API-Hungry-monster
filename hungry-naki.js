document.getElementById('submit').addEventListener('click', function () {
    const SearchText = document.getElementById('inputText').value;
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${SearchText}`
    fetch(url)
        .then(Response => Response.json())
        .then(data => {
            const foodContainerDiv = document.getElementById('foodContainer')
            for (let i = 0; i < data.meals.length; i++) {
                let element = data.meals[i]

                const mealDisplay = document.createElement('div');
                const mealNameDisplay = document.createElement('div');
                const mealDetails = document.createElement('div');

                mealDisplay.className = 'mealDisplay'
                mealNameDisplay.className = 'mealNameDisplay'
                mealDetails.className = 'mealDetails'

                mealDisplay.innerHTML = `
            <img src="${element.strMealThumb}" alt="">
            `
                mealNameDisplay.innerHTML = `
            <h3 class="mealName" >${element.strMeal}</h3>
            `
                mealDetails.appendChild(mealDisplay);
                mealDetails.appendChild(mealNameDisplay);

                foodContainerDiv.appendChild(mealDetails);
                mealDetails.addEventListener('click', function () {
                    showMealDetails(element.idMeal)
                })
            }
        })
})

const showMealDetails = data => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data}`
    fetch(url)
        .then(Response => Response.json())
        .then(Response => {
            renderMealsInfo(Response.meals[0]);
        })
}

const renderMealsInfo = data => {
    document.getElementById('foodContainer').style.display = "none"
    document.getElementById('searchContainer').style.display = "none"

    const details = document.getElementById('foodDetailsContainer')
    const newDiv = document.createElement('div');
    newDiv.className = "newDiv"
    let OtherDetails = " "
    OtherDetails = `
    <img src="${data.strMealThumb}" alt="">
    <h3>${data.strMeal}</h3>
    <h4>Instraction</h4>
        <li><i class="fas fa-check-square"></i> ${data.strInstructions}</li>
    `

    newDiv.innerHTML = OtherDetails;
    details.appendChild(newDiv);
}

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=pork')
    .then(Response => Response.json())
    .then(data => {
        const foodContainerDiv = document.getElementById('foodContainer')
        for (let i = 0; i < data.meals.length; i++) {
            let element = data.meals[i]

            const mealDisplay = document.createElement('div');
            const mealNameDisplay = document.createElement('div');
            const mealDetails = document.createElement('div');

            mealDisplay.className = 'mealDisplay'
            mealNameDisplay.className = 'mealNameDisplay'
            mealDetails.className = 'mealDetails'

            mealDisplay.innerHTML = `
            <img src="${element.strMealThumb}" alt="">
            `
            mealNameDisplay.innerHTML = `
            <h3 class="mealName" >${element.strMeal}</h3>
            `
            mealDetails.appendChild(mealDisplay);
            mealDetails.appendChild(mealNameDisplay);

            foodContainerDiv.appendChild(mealDetails);
            mealDetails.addEventListener('click', function () {
                showMealDetails(element.idMeal)
            })
        }
    })