const temperatura = document.querySelector("#temperature");
const btnConvert = document.querySelector(".convert-btn");
const resultValue = document.querySelector(".result__value");
const options = document.querySelectorAll(".option"); 
const resetBtn = document.querySelector(".reset-btn");
const celsiusRadio = document.querySelector("input[value='celsius']");
const selectedUnit = document.querySelector("input[name='unit']:checked"); 

btnConvert.addEventListener("click", function() {
    if (temperatura.value === "" || temperatura.value.includes("e") || temperatura.value.includes("E")) {
        alert("Please enter a valid number");
        resultValue.textContent = "---";
        return;
    }
    const result = Number(temperatura.value);
    const selectedUnit = document.querySelector("input[name='unit']:checked");
    if (selectedUnit.value === "celsius") {
        let fahr = (result * 9/5) + 32;
        resultValue.textContent = fahr.toFixed(2) + "°F";
    } else if (selectedUnit.value === "fahrenheit") {
        let cels = (result - 32) * (5/9);
        resultValue.textContent = cels.toFixed(2) + "°C";
    } 
});

resetBtn.addEventListener("click", function() {
    temperatura.value = "";
    celsiusRadio.checked = true;
    resultValue.textContent = "---";
});
