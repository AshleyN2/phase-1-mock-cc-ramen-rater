// write your code here
const baseApi = 'http://localhost:3000';
const ramenMenu = document.querySelector('#ramen-menu')

function getImages(){
    fetch(`${baseApi}/ramens`)
    .then(res => res.json())
    .then(ramenData => ramenData.forEach(ramen => displaySingleImage(ramen)))
}
/*
function displayInfo(){
    fetch(`${baseApi}/ramens`)
    .then(res => res.json())
    .then(ramenData => ramenData.forEach(ramenObj => ramenDetails(ramenObj)))
}
*/


function displaySingleImage(ramen){
    //const menu = document.getElementById('ramen-menu');
    const images = document.createElement('img');
    images.src = ramen.image;
    ramenMenu.appendChild(images)
    
    images.addEventListener('click', function(){
        getImages()
        const ramenInfo = document.querySelector('.detail-image')
        ramenInfo.src = ramen.image
        const ramenName = document.querySelector('.name')
        ramenName.textContent = ramen.name
        const ramenRest = document.querySelector('.restaurant')
        ramenRest.innerHTML = ramen.restaurant
        const commentDisplay = document.querySelector('#comment-display')
        commentDisplay.innerText = ramen.comment
        const ratingDisplay = document.querySelector('#rating-display')
        ratingDisplay.innerText = ramen.rating
    }
    )}

function createRamenForm() {
    const newRamenForm = document.getElementById('new-ramen')

    newRamenForm.addEventListener('submit', (event) => {
    event.preventDefault() // stop the page from refreshing on form submit
    
    // create new ramen object
    const newRamenObject = {}
    newRamenObject.name = document.querySelector('#new-name').value
    newRamenObject.restaurant = document.querySelector('#new-restaurant').value
    newRamenObject.image = document.querySelector('#new-image').value
    newRamenObject.rating = document.querySelector('#new-rating').value
    newRamenObject.comment = document.querySelector('#new-comment').value
    console.log(newRamenObject)

    // display new ramen in #ramen-menu (append?)
    const newRamenItem = document.createElement('img')
    newRamenItem.innerText = newRamenObject.image
    ramenMenu.append(newRamenItem)
    })
}
/*
function ramenDetails(ramenDet){
    ramenInfo = document.getElementById('ramen-detail');
    
    ramenInfo.className = 'ramenInfo';
    ramenInfo.innerHTML = `
    <img src = '${ramenDet.image}'>
    <h2> ${ramenDet.name} </h2>
    <h3> ${ramenDet.restaurant} </h3>
    <span ${ramenDet.rating} </span>
    <p> ${ramenDet.comment} </p>
    `
    document.querySelector('#ramen-details').appendChild(ramenInfo)
}
*/

//ramenDetails()
//console.log(ramenDetails)

getImages()
//displayInfo()
createRamenForm()
