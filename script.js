function calculateBMI() {
    var w = document.getElementById("weight").value;
    var h_cm = document.getElementById("height").value;

    var h_m = h_cm / 100; // convert cm to meters

    var bmi = w / (h_m * h_m);

    var category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    }
    if (bmi >= 18.5 && bmi < 25) {
        category = "Normal";
    }
    if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
    }
    if (bmi >= 30) {
        category = "Obese";
    }

    document.getElementById("result").innerHTML = "Your BMI is " + bmi.toFixed(2) + " (" + category + ")";
}
