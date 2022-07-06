function BMI(){
    let gewicht = document.querySelector("#gewicht").value;
    gewicht = parseFloat(gewicht);

    let groesse = document.querySelector("#groesse").value;
    groesse = parseFloat(groesse);

    groesse = groesse / 100;

    let BMI = gewicht / (groesse * groesse);

    BMI = BMI.toFixed(1);

    document.querySelector("#ausgabe").innerHTML = BMI + "  BMI";
}