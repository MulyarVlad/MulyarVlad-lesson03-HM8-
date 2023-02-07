let userAge = +prompt("Enter the year you were born");
let userCity = prompt("Enter the city you live in");
let userFavoriteSport = prompt("What's your favorite sport?");

let resultUserAge;
let resultUserCity;
let resultUserFavoriteSport;

if (!isNaN(userAge) && (userAge > 1900)) {
    resultMyAge = 2022 - userAge;
    resultUserAge = `Your age ${resultMyAge}`
} else {
    resultUserAge = `It's a pitty that you did not want to write your age!`
}

switch (true) {
    case (userCity === null):
        resultYourCity = `It's a pitty that you did not want to write your city!`
        break;
    case ('kiyv' === userCity.toLowerCase()):
        resultUserCity = 'You live in the capital of Ukraine!'
        break;
    case ('london' === userCity.toLowerCase()):
        resultUserCity = 'You live in the capital of England!'
        break;
    case ('washington' === userCity.toLowerCase()):
        resultUserCity = 'You live in the capital of USA!'
        break;
    case (userCity.trim() === ''):
        resultUserCity = `It's a pitty that you did not want to write your city!`
        break;
    default:
        resultUserCity = `You live in ${userCity}`
}

switch (true) {
    case (userFavoriteSport === null):
        resultUserFavoriteSport = `It's a pitty that you did not want to write your favorite sport!`
        break;
    case ('football' === userFavoriteSport.toLowerCase()):
        resultUserFavoriteSport = 'Great! Do you want to be like Leo Messi?'
        console.log(userFavoriteSport)
        break;
    case ('basketball' === userFavoriteSport.toLowerCase()):
        resultUserFavoriteSport ='Great! Do you want to be like Lebron James?'
        break;
    case ('golf' === userFavoriteSport.toLowerCase()):
        resultUserFavoriteSport = 'Great! Do you want to be like Tiger Woods?'
        break;
    default:
        resultUserFavoriteSport = `Very good choose - ${userFavoriteSport}`
        break;
}

alert(`${resultUserAge} \n ${resultUserCity} \n ${resultUserFavoriteSport}`)