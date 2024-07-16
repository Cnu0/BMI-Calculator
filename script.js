document.getElementById("bmiform").addEventListener("submit", function(e) {
    e.preventDefault();

    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById('age').value);
    const heightfeet = parseInt(document.getElementById('height-feet').value);
    const heightinches = parseInt(document.getElementById('height-inches').value);
    const weight = parseInt(document.getElementById("weight").value);

    if (gender && age && heightfeet && heightinches && weight) {
        const heightInMeter = (heightfeet * 0.3048) + (heightinches * 0.0254);
        const bmi = weight / (heightInMeter * heightInMeter);
        const resultElement = document.getElementById("result");

        let category = '';

        if (bmi < 18.5) {
            category = 'Under Weight';
        } else if (bmi >= 18.5 && bmi < 25) {
            category = 'Normal Weight';
        } else if (bmi >= 25 && bmi < 30) {
            category = 'Over Weight';
        } else {
            category = "Obese";
        }

        let resultMessage = 'Your BMI: ' + bmi.toFixed(2) + '<br>';
        resultMessage += 'Category: ' + category;

        resultElement.innerHTML = resultMessage;
    } else {
        alert('Please fill in all the required form fields.');
    }
});