// function BMI(){
//     let gewicht = document.querySelector("#gewicht").value;
//     gewicht = parseFloat(gewicht);

//     let groesse = document.querySelector("#groesse").value;
//     groesse = parseFloat(groesse);

//     groesse = groesse / 100;

//     let BMI = gewicht / (groesse * groesse);

//     BMI = BMI.toFixed(1);

//     document.querySelector("#ausgabe").innerHTML = BMI + "  BMI";
// }


let height = document.querySelector("#height").value;

let weight = document.querySelector("#weight").value;

let nickname = document.querySelector("#nickname").value;

height = parseFloat(height)

height = height / 100
console.log(typeof height)
weight = parseFloat(weight)

console.log(nickname, height, weight)
function calculateBMI (nickname , weight , height) {


    let BMI = weight / (height * height);
    console.log(typeof weight , typeof height , BMI)
    BMI = BMI.toFixed(1);
    console.log(nickname , weight , height , BMI)
    document.querySelector("#ausgabe").innerHTML = nickname + ", ihr BMI beträgt: " + BMI
    console.log(BMI)
}

let button = document.querySelector("#button")
button.addEventListener("click" , function(event){event.preventDefault()
calculateBMI(nickname , weight , height)})


