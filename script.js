let movieTitle0 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(1) > div > h5")
let movieTitle1 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(2) > div > h5")
let movieTitle2 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(3) > div > h5")
let movieTitle3 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(4) > div > h5")
let movieTitle4 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(5) > div > h5")
let movieTitle5 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(6) > div > h5")
let movieTitle6 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(7) > div > h5")
let movieTitle7 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(8) > div > h5")
let movieTitle8 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(9) > div > h5")
let movieTitle9 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(10) > div > h5")
let movieTitle10 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(11) > div > h5")
let movieTitle11 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(12) > div > h5")
let movieTitle12 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(13) > div > h5")
let movieTitle13 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(14) > div > h5")
let movieTitle14 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(15) > div > h5")
let movieTitle15 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(16) > div > h5")
let movieTitle16 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(17) > div > h5")
let movieTitle17 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(18) > div > h5")
let movieTitle18 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(19) > div > h5")
let movieTitle19 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(20) > div > h5")
let movieDescription0 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(1) > div > p")
let movieDescription1 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(2) > div > p")
let movieDescription2 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(3) > div > p")
let movieDescription3 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(4) > div > p")
let movieDescription4 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(5) > div > p")
let movieDescription5 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(6) > div > p")
let movieDescription6 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(7) > div > p")
let movieDescription7 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(8) > div > p")
let movieDescription8 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(9) > div > p")
let movieDescription9 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(10) > div > p")
let movieDescription10 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(11) > div > p")
let movieDescription11 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(12) > div > p")
let movieDescription12 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(13) > div > p")
let movieDescription13 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(14) > div > p")
let movieDescription14 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(15) > div > p")
let movieDescription15 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(16) > div > p")
let movieDescription16 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(17) > div > p")
let movieDescription17 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(18) > div > p")
let movieDescription18 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(19) > div > p")
let movieDescription19 = document.querySelector("#carouselExampleIndicators > div > div:nth-child(20) > div > p")

var clickButton = document.getElementById('fetchUserDataBtn')

document.querySelector("#carouselExampleIndicators > div > div:nth-child(1) > div > h5")

// clickButton.addEventListener('click', fetchUserData)

// async function fetchUserData(e) {
//     e.preventDefault()


fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        movieTitle0.innerText = json[0].original_title
        movieTitle1.innerText = json[1].original_title
        movieTitle2.innerText = json[2].original_title
        movieTitle3.innerText = json[3].original_title
        movieTitle4.innerText = json[4].original_title
        movieTitle5.innerText = json[5].original_title
        movieTitle6.innerText = json[6].original_title
        movieTitle7.innerText = json[7].original_title
        movieTitle8.innerText = json[8].original_title
        movieTitle9.innerText = json[9].original_title
        movieTitle10.innerText = json[10].original_title
        movieTitle11.innerText = json[11].original_title
        movieTitle12.innerText = json[12].original_title
        movieTitle13.innerText = json[13].original_title
        movieTitle14.innerText = json[14].original_title
        movieTitle15.innerText = json[15].original_title
        movieTitle16.innerText = json[16].original_title
        movieTitle17.innerText = json[17].original_title
        movieTitle18.innerText = json[18].original_title
        movieTitle19.innerText = json[19].original_title
        movieDescription0.innerText = json[0].description
        movieDescription1.innerText = json[1].description
        movieDescription2.innerText = json[2].description
        movieDescription3.innerText = json[3].description
        movieDescription4.innerText = json[4].description
        movieDescription5.innerText = json[5].description
        movieDescription6.innerText = json[6].description
        movieDescription7.innerText = json[7].description
        movieDescription8.innerText = json[8].description
        movieDescription9.innerText = json[9].description
        movieDescription10.innerText = json[10].description
        movieDescription11.innerText = json[11].description
        movieDescription12.innerText = json[12].description
        movieDescription13.innerText = json[13].description
        movieDescription14.innerText = json[14].description
        movieDescription15.innerText = json[15].description
        movieDescription16.innerText = json[16].description
        movieDescription17.innerText = json[17].description
        movieDescription18.innerText = json[18].description
        movieDescription19.innerText = json[19].description
    })
    .catch(err => console.log(err))


//      .description    .director     .original_title        .release_date