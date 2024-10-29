let kg = kilo.value
let cm = zentimeter.value
let bmiwert = document.getElementById("bmi-wert");
let gewicht = document.getElementById("gewicht");
let bmi = document.getElementById("bmi");

function result() {
    let kg = kilo.value
    let cm = zentimeter.value
    bmi.innerText = "Ihr BMI ist: "
   m = cm / 100



  let ergebnis = kg / Math.pow(m , 2);

  if (ergebnis < 18.5){
        bmiwert.innerText = ergebnis
        bmiwert.innerText = ergebnis.toFixed(1).replace('.',',');
        gewicht.innerText = "Untergewicht."
  } else if (ergebnis >= 18.5 && ergebnis <= 24.9){
        bmiwert.innerText = ergebnis
        bmiwert.innerText = ergebnis.toFixed(1).replace('.',',');
        gewicht.innerText = "Normalgewicht."
  } else if (ergebnis >= 25 && ergebnis <= 29.9 ){
        bmiwert.innerText = ergebnis
        bmiwert.innerText = ergebnis.toFixed(1).replace('.',',');
        gewicht.innerText = "Übergewicht."
  } else if (ergebnis >= 30 && ergebnis <= 34.9){
        bmiwert.innerText = ergebnis
        bmiwert.innerText = ergebnis.toFixed(1).replace('.',',');
        gewicht.innerText = "Adipositas Grad I."
  }else if (ergebnis >= 35 && ergebnis <= 39.9){
        bmiwert.innerText = ergebnis
        bmiwert.innerText = ergebnis.toFixed(1).replace('.',',');
        gewicht.innerText = "Adipositas Grad II."
  }else if (ergebnis > 40){
        bmiwert.innerText = ergebnis
        bmiwert.innerText = ergebnis.toFixed(1).replace('.',',');
        gewicht.innerText = "Adipositas Grad III."
}


    
}

function zurueck(){
    document.getElementById('kilo').value = ''
    document.getElementById('zentimeter').value = ''
    document.getElementById("bmi-wert").innerText = ''
    document.getElementById("gewicht").innerText = ''
    document.getElementById("bmi").innerText = ''
}