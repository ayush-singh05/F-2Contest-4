let arr = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
];

const card = document.querySelector(".food-items");
const ratingGreaterThanFour = document.getElementById("rating-four");
const ratingLessThanFour = document.getElementById("rating-three");

function CreateCard(container) {
    const cardItem = document.createElement('div');
    cardItem.className = 'item-card';
    //  div 1
    const imageDiv = document.createElement('div');
    imageDiv.className = 'card-image';
    const image = document.createElement('img');
    image.src = container.imageSrc;
    imageDiv.appendChild(image);
    cardItem.appendChild(imageDiv);
    // div 2
    const disc = document.createElement('div');
    disc.className = 'card-disc'
    disc.innerHTML = `<span>Russian Salad</span>
        <span><i class="fa-solid fa-star" style="color: #dfce11;"></i>${container.rating}</span> `
    cardItem.appendChild(disc);
    // div 3
    const deliveryTime = document.createElement('div');    
            deliveryTime.className = 'time';
            deliveryTime.innerHTML = `<div>
            <span>40 min</span>
        </div>
        <div class="time-item">
            <span><i class="fa-regular fa-heart" style="color: #d31212;"></i></span>
            <span><i class="fa-regular fa-comment"></i></span>
        </div>`
        cardItem.appendChild(deliveryTime);

        card.appendChild(cardItem);

}

for(let i = 0; i < arr.length; i++){
    CreateCard(arr[i]);
    // console.log(arr[i]);
}

const arrayFilter = arr.forEach((ele)=>{
    if(ele.rating >= 4){
        
    }
});
// rating greater than 4
const filteredRecipes = arr.filter(recipe => recipe.rating > 4.0);
ratingGreaterThanFour.addEventListener('click',()=>{
    card.innerHTML = '';
    filteredRecipes.forEach((ele)=>{
        CreateCard(ele);
    })
});

const filteredRecipes2 = arr.filter(recipe => recipe.rating < 4.0);
ratingLessThanFour.addEventListener('click',()=>{
    card.innerHTML = '';
    filteredRecipes2.forEach((ele)=>{
        CreateCard(ele);
    });
});

const allRecipes = document.querySelector('.btn-1');
const vegRecipes = document.querySelector('.btn-2');
const nonVegRecipes = document.querySelector('.btn-3');
// all recipies
allRecipes.addEventListener('click',()=>{
    card.innerHTML='';
    for(let i = 0; i < arr.length; i++){
        CreateCard(arr[i]);
        
    }
});
// veg recipres
vegRecipes.addEventListener('click',()=>{
    card.innerHTML = '';
    for(let i = 0; i < arr.length; i++){
        if(arr[i].type === "veg"){
            CreateCard(arr[i]);
        }
    }
});
// non veg recipes
nonVegRecipes.addEventListener('click',()=>{
    card.innerHTML = '';
    for(let i = 0; i < arr.length; i++){
        if(arr[i].type === "non-veg"){
            CreateCard(arr[i]);
        }
    }
})

const search = document.getElementById('search-btn');
function searchRecipes(query) {
    // Convert the query to lowercase for case-insensitive search
    card.innerHTML = ''
    const lowercaseQuery = query.toLowerCase();

    // Use the filter() method to find matching recipes
    const matchingRecipes = arr.filter((item) => {
        return (
            item.name.toLowerCase().includes(query.toLowerCase()) || item.type.toLowerCase().includes(query.toLowerCase())
    
        )
    }
  );
    matchingRecipes.forEach((item) => {
        CreateCard(item)
      });
}

search.addEventListener('input',()=>{
    const query = search.value;
    searchRecipes(query);
    console.log(query)
})
